import withPWA from 'next-pwa'

const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  register: true,
  skipWaiting: true,
}

export default withPWA(pwaConfig)({
  reactStrictMode: true,
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
})
