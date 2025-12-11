import type {NextConfig} from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export', // key part for static export
    images: {
        unoptimized: true, // needed for GitHub Pages
    },
    distDir: 'dist',
    basePath: isProd ? '/torchbox-timeline' : '',
    assetPrefix: isProd ? '/torchbox-timeline' : '',
};

export default nextConfig;
