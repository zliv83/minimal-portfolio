import type { ImageMetadata } from 'astro';

import managePreview from '../../assets/manage.webp';
import managePreview2 from '../../assets/image-manage-preview-2.webp';
import manageHero from '../../assets/image-manage-hero.webp';
import bookmarkPreview from '../../assets/bookmark.webp';
import bookmarkPreview2 from '../../assets/image-bookmark-preview-2.webp';
import bookmarkHero from '../../assets/image-bookmark-hero.webp';
import insurePreview from '../../assets/insure.webp';
import insurePreview2 from '../../assets/image-insure-preview-2.webp';
import insureHero from '../../assets/image-insure-hero.webp';
import fyloPreview from '../../assets/fylo.webp';
import fyloPreview2 from '../../assets/image-fylo-preview-2.webp';
import fyloHero from '../../assets/image-fylo-hero.webp';

export interface Project {
  name: string;
  description: string;
  projectBackground: string;
  previewImg: ImageMetadata;
  previewAlt: string;
  previewImg2: ImageMetadata;
  previewAlt2: string;
  heroImg: ImageMetadata;
  heroAlt: string;
  reverse?: boolean;
  js?: boolean;
  nextPageName: string;
  nextPageHref: string;
  lastPageName: string;
  lastPageHref: string;
  link: string;
}

type BaseProject = Omit<
  Project,
  'nextPageName' | 'nextPageHref' | 'lastPageName' | 'lastPageHref'
>;

const alts = (
  name: string
): Pick<Project, 'previewAlt' | 'previewAlt2' | 'heroAlt'> => ({
  previewAlt: `Preview of the ${name} home page`,
  previewAlt2: `Preview of the ${name} home page and footer`,
  heroAlt: `Hero of the ${name} home page and footer`,
});

const description: string =
  'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.';

const projectBackground: string =
  'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.';

export const projectMap = {
  manage: {
    name: 'Manage',
    description,
    projectBackground,
    ...alts('manage'),
    previewImg: managePreview,
    previewImg2: managePreview2,
    heroImg: manageHero,
    js: true,
    link: '/portfolio/manage',
  },
  bookmark: {
    name: 'Bookmark',
    description,
    projectBackground,
    ...alts('bookmark'),
    previewImg: bookmarkPreview,
    previewImg2: bookmarkPreview2,
    heroImg: bookmarkHero,
    reverse: true,
    js: true,
    link: '/portfolio/bookmark',
  },
  insure: {
    name: 'Insure',
    description,
    projectBackground,
    ...alts('insure'),
    previewImg: insurePreview,
    previewImg2: insurePreview2,
    heroImg: insureHero,
    js: true,
    link: '/portfolio/insure',
  },
  fylo: {
    name: 'Fylo',
    description,
    projectBackground,
    ...alts('fylo'),
    previewImg: fyloPreview,
    previewImg2: fyloPreview2,
    heroImg: fyloHero,
    reverse: true,
    link: '/portfolio/fylo',
  },
} as const satisfies Record<string, BaseProject>;

export const baseProjects = [
  projectMap.manage,
  projectMap.bookmark,
  projectMap.insure,
  projectMap.fylo,
];

export const projects: Project[] = baseProjects.map((project, i) => {
  const prev =
    baseProjects[(i - 1 + baseProjects.length) % baseProjects.length];
  const next = baseProjects[(i + 1) % baseProjects.length];
  return {
    ...project,
    lastPageName: prev.name,
    lastPageHref: prev.link,
    nextPageName: next.name,
    nextPageHref: next.link,
  };
});
