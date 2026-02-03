/** @type {import('next').NextConfig} */
const nextConfig = {
  // Creates an `out/` folder on `next build` (static export)
  output: 'export',
  // Disable Image Optimization API for static export (no server at build time)
  images: { unoptimized: true },
}

module.exports = nextConfig
