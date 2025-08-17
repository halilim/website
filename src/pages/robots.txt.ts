import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import type { APIRoute } from "astro";

const aiRobotsFile = "cache/ai-robots.txt";
let aiRobotsTxt;

if (
  existsSync(aiRobotsFile) &&
  statSync(aiRobotsFile).mtimeMs > Date.now() - 7 * 24 * 3600 * 1000
) {
  aiRobotsTxt = readFileSync(aiRobotsFile, "utf-8");
} else {
  aiRobotsTxt = await (
    await fetch(
      "https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.txt",
    )
  ).text();
  writeFileSync(aiRobotsFile, aiRobotsTxt);
}

const getRobotsTxt = (sitemapURL: URL) => `\
# Why? Because they don't link back. https://x.com/GergelyOrosz/status/1688829094249615360
${aiRobotsTxt}

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
