/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrlConfig = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  trailingSlash: true,
};

export default siteUrlConfig;
