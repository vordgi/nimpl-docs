// @ts-check
// @ts-ignore
import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['geist/font/sans', 'next/font'],
    webpack: (config) => {
        config.resolve.fallback = {
            "child_process": false,
        }
        return config;
    },
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

export default withNextra(nextConfig);
