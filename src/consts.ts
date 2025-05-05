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
  DESCRIPTION: "My blog posts",
};

export const SOCIALS: Socials = [
  {
    ICON: "RiTwitterXFill",
    NAME: "Twitter",
    HREF: "https://x.com/halilweb",
  },
  {
    ICON: "MdiGithub",
    NAME: "GitHub",
    HREF: "https://github.com/halilim",
  },
  {
    ICON: "MdiStackoverflow",
    NAME: "Stack Overflow",
    HREF: "https://stackoverflow.com/users/372654",
  },
  {
    ICON: "MdiLinkedin",
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/halilozgur/",
  },
];
