"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-28 max-w-3xl scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-700">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="text-4xl bg-white borderBlack rounded-xl p-4 dark:bg-white/10 dark:text-white/80"
          >
            {skill.image}
          </li>
        ))}
      </ul>
    </section>
  );
}
