"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "motion/react";
import { fadeInAnimationVariants } from "./animation";

export default function TechStacks() {
  // Duplicate the skills data to create a seamless loop
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" className="mb-28 scroll-mt-28 text-center w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-12">
          Tech<span className="text-zinc-900"> Stacks </span>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -50 * skillsData.length],
          }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-24 h-24 flex-shrink-0 flex flex-col gap-2 justify-center items-center p-2"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-[40px]">{skill.image}</div>
              <div className="text-sm">{skill.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
