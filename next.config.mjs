// @ts-check
// @ts-ignore
import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['geist/font/sans', 'next/font'],
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

export default withNextra(nextConfig);
