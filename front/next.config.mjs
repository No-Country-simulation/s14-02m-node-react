/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'unpkg.com'
            },
        ]
    }
};

export default nextConfig;
