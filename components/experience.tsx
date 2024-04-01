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
      <ul className="timeline timeline-vertical">
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
            <hr className="!w-0.5" />
            <div
              className={`${
                index % 2 === 0 ? "timeline-start" : "timeline-end"
              } text-gray-500 !my-4`}
            >
              {experience.date}
            </div>
            <div className="timeline-middle">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden border border-gray-200 rounded-full m-2">
                <Image src={experience.image} alt={experience.company}></Image>
              </div>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "timeline-end" : "timeline-start"
              } timeline-box !my-4`}
            >
              <h2 className="text-gray-700 font-semibold">
                {experience.company}
              </h2>
              <h3 className="text-gray-700">{experience.title}</h3>
            </div>
            <hr className="!w-0.5" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
