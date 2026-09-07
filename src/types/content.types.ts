import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

export type IANATimeZone = Extract<keyof typeof zones, string>;

export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  /** IANA time zone used by the live clock. */
  location: IANATimeZone;
  /** Human-readable geographic label displayed in the UI. */
  locationLabel?: string;
  languages?: string[];
};

export type Newsletter = {
  display: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
};

export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
}>;

export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

export interface Home extends BasePageConfig {
  image: `/images/${string}` | string;
  headline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  subline: React.ReactNode;
}

type ExperienceItem = {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
};

type SimpleItem = {
  name: string;
  description: React.ReactNode;
};

export interface About extends BasePageConfig {
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: ExperienceItem[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: SimpleItem[];
  };
  certifications: {
    display: boolean;
    title: string;
    items: SimpleItem[];
  };
  community: {
    display: boolean;
    title: string;
    experiences: ExperienceItem[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: React.ReactNode;
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

export interface Blog extends BasePageConfig {}
export interface Work extends BasePageConfig {}

export interface Gallery extends BasePageConfig {
  images: Array<{
    src: string;
    alt: string;
    orientation: string;
  }>;
}
