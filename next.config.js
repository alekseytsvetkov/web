const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const {i18n} = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
    i18n,
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async redirects() {
        return [
            {
                source: '/@:username',
                destination: '/@:username/want',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/@:username',
                destination: '/u/:username',
            },
            {
                source: '/@:username/want',
                destination: '/u/:username/want',
            },
            {
                source: '/@:username/visited',
                destination: '/u/:username/visited',
            },
        ];
    },
});
