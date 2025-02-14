// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/**
 * @type {import('next').NextConfig}
 */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://example.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https://example.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['web-coffee-ten.vercel.app'], // Nota: Elimina el prefijo "https://" para que funcione correctamente.
  },
  pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts', 'tsx'],
  async headers() {
    return [
      {
        source: '/(.*)', // Aplica las políticas a todas las rutas
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Protección HTTPS estricta
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''), // Aplica la CSP sin saltos de línea
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Protección contra fuga de referencias
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Previene la detección automática del tipo de contenido
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Evita que el sitio sea incrustado en iframes
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(), payment=()', // Restringe permisos de API
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Protección contra ataques XSS
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
