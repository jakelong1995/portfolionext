import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiFramer,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import placeholder from "@/public/placeholder.svg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import fpt from "@/public/fpt.webp";
import ada from "@/public/ada.webp";
import capi from "@/public/capi.webp";
import g2j from "@/public/g2j.png";
import telos from "@/public/telos.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "FPT Software",
    title: "UX Designer",
    image: fpt,
    date: "Jan 2021 - Now",
  },
  {
    company: "Go2Joy",
    title: "Product Designer",
    image: g2j,
    date: "Mar 2020 - Dec 2020",
  },
  {
    company: "ADA Agency",
    title: "Graphic Designer",
    image: ada,
    date: "Nov 2019 - Feb 2020",
  },
  {
    company: "Capi Academy",
    title: "Mobile App Design Instructor",
    image: capi,
    date: "2021",
  },
  {
    company: "Telos",
    title: "Figma Instructor",
    image: telos,
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "Invi",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "UI UX", "Tailwind"],
    imageUrl: placeholder,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: placeholder,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    image: React.createElement(SiHtml5),
  },
  {
    title: "CSS",
    image: React.createElement(SiCss3),
  },
  {
    title: "JavaScript",
    image: React.createElement(SiJavascript),
  },
  {
    title: "TypeScript",
    image: React.createElement(SiTypescript),
  },
  {
    title: "React",
    image: React.createElement(SiReact),
  },
  {
    title: "Next.js",
    image: React.createElement(SiNextdotjs),
  },
  {
    title: "Tailwind",
    image: React.createElement(SiTailwindcss),
  },
  {
    title: "Github",
    image: React.createElement(SiGithub),
  },
  {
    title: "Firebase",
    image: React.createElement(SiFirebase),
  },
  {
    title: "MongoDB",
    image: React.createElement(SiMongodb),
  },
  {
    title: "Framer",
    image: React.createElement(SiFramer),
  },
  {
    title: "Figma",
    image: React.createElement(SiFigma),
  },
  {
    title: "Illustrator",
    image: React.createElement(SiAdobeillustrator),
  },
  {
    title: "Photoshop",
    image: React.createElement(SiAdobephotoshop),
  },
] as const;
