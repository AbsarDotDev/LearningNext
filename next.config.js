/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    CONTENTFUL_SPACE_ID:'7evp6b5xbxo3',
CONTENTFUL_ACCESS_KEY:'Atu2VZmgRDZWrD8FBzkTaCX8SzgtaFD3qW085hk-aHE'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
