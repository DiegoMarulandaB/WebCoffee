/**
 * @type {import('next').NextConfig}
 */

const ContentSecurityPolicy = `
  default-src 'self';

  script-src
    'self'
    'unsafe-inline';

  style-src
    'self'
    'unsafe-inline'
    https://fonts.googleapis.com;

  img-src
    'self'
    data:
    blob:
    https://webcoffe-backend.onrender.com;

  font-src
    'self'
    https://fonts.gstatic.com;

  connect-src
    'self'
    https://webcoffe-backend.onrender.com;

  frame-src 'self';

  object-src 'none';

  base-uri 'self';

  form-action 'self';

  frame-ancestors 'none';

  upgrade-insecure-requests;
`;

const securityHeaders = [
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
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-site',
  },
  {
    key: 'Origin-Agent-Cluster',
    value: '?1',
  },
];

const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webcoffe-backend.onrender.com',
        pathname: '/**',
      },
    ],
  },

  pageExtensions: ['page.tsx', 'page.ts', 'route.tsx', 'route.ts', 'tsx'],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
