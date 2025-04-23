import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Halil Özgür",
  DESCRIPTION: "Halil Özgür's website",
  NUM_POSTS_ON_HOMEPAGE: 6,
};

export const HOME: Metadata = {
  TITLE: "",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://twitter.com/halilweb",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/halilim",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/halilozgur/",
  },
];
