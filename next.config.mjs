import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['geist/font/sans', 'next/font'],
    async redirects() {
        return [
            {
                source: '/:name(getters|i18n|ab-tests|cache-adapter|cache-in-memory|classnames-minifier|config|context|middleware-chain|router)/:path',
                destination: '/:name',
                statusCode: 307,
            },
            {
                source: '/:name(getters|i18n|ab-tests|cache-adapter|cache-in-memory|classnames-minifier|config|context|middleware-chain|router)/:path1/:path2',
                destination: '/:name',
                statusCode: 307,
            }
        ]
    }
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

export default withNextra(nextConfig);
