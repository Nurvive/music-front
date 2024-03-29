/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

const nextConfig = withPWA({
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
});

module.exports = nextConfig;

