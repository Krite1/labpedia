/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ["images.unsplash.com"] },
  env: {
    SITE_NAME: 'Labpedia',
    SITE_URL: 'https://example.com',
    NEXT_PUBLIC_ADSENSE_ID: 'ca-pub-XXXX'
  }
}
