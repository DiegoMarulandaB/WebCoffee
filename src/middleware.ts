import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import crypto from 'crypto';
import { kv } from '@vercel/kv';

// Configurar Redis para Rate Limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
});

const inMemoryCache = new Map<string, number>();

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(100, '1m'),
  ephemeralCache: inMemoryCache,
  analytics: true,
});

export async function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';
  const referer = req.headers.get('referer') || '';
  const origin = req.headers.get('origin') || '';
  const method = req.method;

  try {
    // 📌 1️⃣ Validar si la IP está en lista negra
    const blockedIps = ['192.168.1.100', '203.0.113.42', '179.13.18.125']; // Agrega IPs maliciosas conocidas
    if (blockedIps.includes(ip)) {
      return NextResponse.json({ error: 'Access denied.' }, { status: 403 });
    }

    // 📌 2️⃣ Aplicar Rate Limiting
    const { success, remaining } = await ratelimit.limit(ip);
    if (!success) {
      await kv.set(`rate_limit_block_${ip}`, {
        blockedAt: new Date().toISOString(),
        path: req.nextUrl.pathname,
        userAgent,
      });
      return NextResponse.json({ error: 'Too many requests. Please slow down.' }, { status: 429 });
    }

    // 📌 3️⃣ Bloquear User-Agents sospechosos
    const blockedUserAgents = [/curl/, /python-requests/, /wget/, /scrapy/, /bot/];
    if (blockedUserAgents.some((pattern) => pattern.test(userAgent.toLowerCase()))) {
      return NextResponse.json({ error: 'Request blocked due to suspicious behavior.' }, { status: 403 });
    }

    // 📌 4️⃣ Validar Referer y Origin para evitar CSRF
    if (referer && !referer.startsWith('https://web-coffee-ten.vercel.app/')) {
      return NextResponse.json({ error: 'Invalid referer.' }, { status: 403 });
    }
    if (origin && !origin.startsWith('https://web-coffee-ten.vercel.app/')) {
      return NextResponse.json({ error: 'Invalid origin.' }, { status: 403 });
    }

    // 📌 5️⃣ Bloquear métodos HTTP no permitidos
    const allowedMethods = ['GET', 'POST'];
    if (!allowedMethods.includes(method)) {
      return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
    }

    const response = NextResponse.next();

    // 📌 6️⃣ Generar nonce para CSP
    const nonce = crypto.randomUUID();

    // 📌 7️⃣ Aplicar Headers de Seguridad Mejorados
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    response.headers.set(
      'Content-Security-Policy',
      `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self';`
    );
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // 📌 8️⃣ Protección contra CORS
    response.headers.set('Access-Control-Allow-Origin', 'https://web-coffee-ten.vercel.app/');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 📌 9️⃣ Headers de Rate Limiting
    response.headers.set('X-RateLimit-Limit', '100');
    response.headers.set('X-RateLimit-Remaining', remaining.toString());

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// 📌  🔟 Configurar el middleware para que actúe en rutas específicas
export const config = {
  matcher: '/api/:path*',
};
