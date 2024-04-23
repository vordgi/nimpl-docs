/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://nimpl.tech',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
}
