"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./animation";

export default function Skills() {
  return (
    <section id="skills" className="mb-28 max-w-3xl scroll-mt-28 text-center">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg ">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className=" w-24 h-24 flex flex-col gap-2 justify-center items-center p-2"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="text-3xl text-gray-700">{skill.image}</div>
            <div className="text-sm text-gray-500">{skill.title}</div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
