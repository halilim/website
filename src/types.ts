export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  NUM_POSTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type OgImage = {
  path: string;
  alt: string;
}

export type Socials = {
  ICON: string;
  NAME: string;
  HREF: string;
  REL_ME?: boolean;
}[];
