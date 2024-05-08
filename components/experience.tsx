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
            <div className="flex flex-col md:flex-row gap-6">
              <div className="col-span-1 flex items-center justify-center">
                <Image
                  alt={experience.title}
                  height={64}
                  src={experience.image}
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                  width={64}
                  className="rounded-[0.5rem] shadow"
                />
              </div>
              <div className="col-span-2 space-y-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <span>Vercel</span>
                  <span>•</span>
                  <span>Jan 2022 - Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and maintained cutting-edge web applications using
                  the latest technologies. Collaborated with cross-functional
                  teams to deliver high-quality, user-centric solutions.
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
