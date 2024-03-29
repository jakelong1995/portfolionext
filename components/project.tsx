"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      {" "}
      <Link
        href={link}
        target="_blank"
        className={`group flex flex-col overflow-hidden bg-gray-100 hover:bg-gray-200 rounded-xl ${
          index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row "
        } `}
      >
        <div className="p-0 overflow-hidden w-full">
          <Image
            alt="Project thumbnail"
            className=" object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src={imageUrl}
          />
        </div>
        <div className="p-6 flex flex-col justify-between w-full">
          <div className="flex flex-col gap-4 text-gray-700">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-md">{description} </p>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto py-2">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-600 px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
