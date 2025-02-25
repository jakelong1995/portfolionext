"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "motion/react";
import { fadeInAnimationVariants } from "./animation";
import { useSectionInView } from "@/lib/hooks";

export default function TechStacks() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-3xl scroll-mt-28 text-center"
    >
      <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-12">
        Tech<span className="text-zinc-900"> Stacks </span>
      </div>
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
            <div className="text-[40px]">{skill.image}</div>
            <div className="text-sm">{skill.title}</div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
