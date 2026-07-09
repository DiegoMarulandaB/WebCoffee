import { NextRequest, NextResponse } from 'next/server';

const CONTENT_SECURITY_POLICY = `
  default-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  object-src 'none';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval';

  style-src
    'self'
    'unsafe-inline'
    https://fonts.googleapis.com;

  img-src
    'self'
    data:
    blob:
    https:
    https://res.cloudinary.com;

  font-src
    'self'
    data:
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://webcoffe-backend.onrender.com
    https://api.cloudinary.com
    https://res.cloudinary.com;

  media-src
    'self'
    https://res.cloudinary.com;

  worker-src
    'self'
    blob:;

  manifest-src 'self';

  upgrade-insecure-requests;
`
  .replace(/\n/g, ' ')
  .replace(/\s{2,}/g, ' ')
  .trim();

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('Content-Security-Policy', CONTENT_SECURITY_POLICY);

  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');

  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');

  response.headers.set('Origin-Agent-Cluster', '?1');

  return response;
}

export const config = {
  matcher: [
    /*
     * - API
     * - Archivos internos de Next.js
     * - Imágenes optimizadas
     * - Archivos estáticos
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
