/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        CUSTOM_API_ENDPOINT: '',
    },
};;

export default nextConfig;
