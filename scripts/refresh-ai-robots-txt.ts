import { writeFileSync } from "node:fs";

const aiRobotsFile = "cache/ai-robots.txt";
const aiRobotsTxt = await (
  await fetch(
    "https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.txt",
  )
).text();
writeFileSync(aiRobotsFile, aiRobotsTxt);
