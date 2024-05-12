"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./animation";

export default function Experience() {
  return (
    <section id="experience" className="mb-28 max-w-3xl scroll-mt-28">
      <SectionHeading>my experience</SectionHeading>
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
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
              <Image
                alt={experience.title}
                height={48}
                src={experience.image}
                style={{
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
                width={48}
                className="rounded-[0.5rem] shadow w-12 h-12"
              />
              <div className="flex flex-col space-y-2">
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
