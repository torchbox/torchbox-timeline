import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'export', // key part for static export
    images: {
        unoptimized: true, // needed for GitHub Pages
    },
    distDir: 'dist',
};

export default nextConfig;
