const path = require('path');

module.exports = {
    i18n: {
        localeDetection: false,
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },
    localePath: path.resolve('./src/i18n/locales'),
};
