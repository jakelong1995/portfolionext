import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import fpt from "@/public/fpt.webp";
import ada from "@/public/ada.webp";
import capi from "@/public/capi.webp";
import g2j from "@/public/g2j.png";
import Go2Joy from "@/public/Go2Joy.png";
import telos from "@/public/telos.webp";
import healthy from "@/public/Healthy-casestudy.png";
import vuifest from "@/public/vuifest.png";
import NRI from "@/public/NRIJapan.png";
import BFI from "@/public/BFI Finance.png";
import Pyxissafe from "@/public/PyxisSafe.png";
import songphi from "@/public/songphi.png";
import fefyfo from "@/public/Fefyfo.jpg";
import uplend from "@/public/UPLend.png";
import storyco from "@/public/storyco.jpeg";
import sieuthimaypin from "@/public/sieuthimaypin.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    company: "Storyco",
    title: "UI/UX Designer - Design System",
    image: storyco,
    date: "Dec 2024 - Now",
  },
  {
    company: "FPT Software",
    title: "UI/UX Designer",
    image: fpt,
    date: "Jan 2022 - Aug 2024",
  },
  {
    company: "Go2Joy",
    title: "Product Designer",
    image: g2j,
    date: "Mar 2021 - Dec 2021",
  },
  {
    company: "ADA Agency",
    title: "Graphic Designer",
    image: ada,
    date: "Nov 2020 - Feb 2021",
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
    title: "UPLend",
    description: "Cryptocurrency - BTC Lending Platform",
    tags: ["Landing Page", "React", "Nextjs"],
    link: "https://www.uplend.xyz",
    imageUrl: uplend,
  },
  {
    title: "Fefyfo - Your Imagination - Your Story",
    description: "A library of custom story create by your imagination.",
    tags: [
      "UI-UX",
      "Brand Identity",
      "Graphic Design",
      "Web App",
      "Mobile App",
    ],
    link: "https://fefyfo.com/",
    imageUrl: fefyfo,
  },
  {
    title: "Gia Phúc Ân - Siêu Thị Máy Pin",
    description:
      "Trải qua hơn 23 năm hình thành và phát triển, Gia Phúc Ân đã vươn lên trở thành đơn vị dẫn đầu trong ngành sản xuất và kinh doanh vật liệu hàn.",
    tags: ["UI-UX", "Development", "E-com"],
    link: "https://www.figma.com/design/iwcXVoCuTJfHk5DUseq5yX/sieuthimayhan?node-id=23-2137&t=9WWMKCAouRpxW9lw-1",
    imageUrl: sieuthimaypin,
  },
  {
    title: "Songphi Brows",
    description:
      "SongPhi Brows, established in April 2020, is among the top 10 Eyebrow Embroidery providers in Singapore.",
    tags: ["UI-UX", "Development", "Landing Page"],
    link: "https://songphibrowsg.com/",
    imageUrl: songphi,
  },
  {
    title: "BFI Finance - Bike Collaterals",
    description:
      "PT BFI Finance Indonesia Tbk (BFI) was established in 1982 as PT Manufacturers Hanover Leasing Indonesia, a joint venture between Manufacturers Hanover Leasing Corporation from the United States and local partners.",
    tags: ["UI-UX", "Web App"],
    link: "https://1drv.ms/b/s!Agi6lanJu3IHhqNscdl-FVK5XP1kiQ?e=pZaGPK",
    imageUrl: BFI,
  },
  {
    title: "NRI Japan",
    description:
      "Japanese client wants to develop an education platform that can manage student, classroom, check attendance, time table, connect teacher with students & parents",
    tags: ["UI-UX", "Web App"],
    link: "https://1drv.ms/b/s!Agi6lanJu3IHhqNq-Ga5e_AZ-tIVXQ?e=1miOdT",
    imageUrl: NRI,
  },
  {
    title: "Vuifest",
    description:
      "Vuifest is an internal web project for a music festival in FPT",
    tags: ["UI-UX", "Graphic", "Landing Page"],
    link: "https://www.behance.net/gallery/163175735/Vuifest",
    imageUrl: vuifest,
  },
  {
    title: "Pyxis Safe",
    description: "The Multi-Signature Safe of the Multichain",
    tags: ["UI Design", "Graphic Design", "Landing Page"],
    link: "https://pyxis.aura.network/",
    imageUrl: Pyxissafe,
  },
  {
    title: "Healthy",
    description: `Healthy is an app that help patient to book appoint with doctors in hospital and medical center around Ho Chi Minh City. Healthy helps patients avoid queue at hospitals and doctors prepare better for the patients.`,
    tags: ["UI Design", "UX Research", "Mobile App"],
    link: "https://www.behance.net/gallery/114150753/Healthy-Doctor-Appointment-app",
    imageUrl: healthy,
  },
  {
    title: "Go2Joy",
    description: `Hourly Booking Platform`,
    tags: ["UI Design", "Mobile App"],
    link: "https://go2joy.vn",
    imageUrl: Go2Joy,
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
