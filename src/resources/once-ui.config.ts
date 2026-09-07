import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

const baseURL: string = "https://haythamabouelfaid.com";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const protectedRoutes: ProtectedRoutesConfig = {};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

/**
 * 2026 brand system:
 * - orange = action / automation signal
 * - blue = infrastructure / cloud / security
 * - slate + near-black = enterprise base
 */
const style: StyleConfig = {
  theme: "dark",
  neutral: "slate",
  brand: "orange",
  accent: "blue",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 90,
  },
  gradient: {
    display: true,
    opacity: 45,
    x: 52,
    y: 18,
    width: 95,
    height: 70,
    tilt: -8,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 34,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: true,
    opacity: 12,
    color: "accent-alpha-medium",
    width: "1rem",
    height: "1rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action:
    "https://gmail.us18.list-manage.com/subscribe/post?u=4b7d742341f2e25a1cd7ec92b&id=3f7ed35e8b&f_id=0083b3e6f0",
  effects: {
    mask: {
      cursor: false,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 80,
      x: 50,
      y: 0,
      width: 60,
      height: 55,
      tilt: 0,
      colorStart: "brand-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 18,
      size: "2",
      color: "accent-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Haytham Abouelfaid",
  description: home.description,
  email: "haythamwick2019@gmail.com",
};

const sameAs: SameAsConfig = {
  threads: "",
  linkedin: "https://www.linkedin.com/in/haytham-abouelfaid/",
  discord: "",
};

const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
