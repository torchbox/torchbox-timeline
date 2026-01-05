import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export', // key part for static export
    images: {
        unoptimized: true, // needed for GitHub Pages
    },
};

export default nextConfig;
