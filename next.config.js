/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "googleusercontent.com",
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
      'img.clerk.com',
    ]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
