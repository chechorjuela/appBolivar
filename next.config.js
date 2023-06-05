const { parsed: localEnv } = require('dotenv').config({
  path: '.env.local',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...localEnv,
  },
  pageExtensions: ['tsx', 'ts'],
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/screens/:any*',
      },
    ];
  },
}

module.exports = nextConfig
