"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInAnimationVariants } from "./animation";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <section ref={ref} id="experience" className="mb-28 max-w-3xl scroll-mt-28">
      <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-12">
        <span className="text-zinc-900">My </span> Experience
      </div>
      <ul className="space-y-8">
        {experiencesData.map((experience, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Image
                alt={experience.title}
                src={experience.image}
                style={{
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
                className="rounded-full shadow w-16 h-16 bg-white"
              />
              <div className="flex flex-col space-y-2 items-center sm:items-start">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex space-x-2 text-gray-500 dark:text-gray-400">
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.date}</span>
                </div>
                {/* <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained cutting-edge web applications using
                  the latest technologies. Collaborated with cross-functional
                  teams to deliver high-quality, user-centric solutions.
                </p> */}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
