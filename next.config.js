/**
 * @type {import('next').NextConfig}
 */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://web-coffee-ten.vercel.app;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data:  https://res.cloudinary.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self'  https://webcoffe-backend.onrender.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web-coffee-ten.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },

  pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts', 'tsx'],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(), payment=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
