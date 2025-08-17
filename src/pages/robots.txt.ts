import { readFileSync } from "node:fs";
import type { APIRoute } from "astro";

const aiRobotsTxt = readFileSync("cache/ai-robots.txt", "utf-8");

const getRobotsTxt = (sitemapURL: URL) => `\
# Why? Because they don't link back. https://x.com/GergelyOrosz/status/1688829094249615360
${aiRobotsTxt}

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
