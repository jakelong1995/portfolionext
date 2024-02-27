"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
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
      <Card
        className={`group flex flex-col overflow-hidden bg-gray-50 hover:bg-gray-200 ${
          index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row "
        } `}
      >
        <CardContent className="p-0 overflow-hidden w-full">
          <Image
            alt="Project thumbnail"
            className=" object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src={imageUrl}
          />
        </CardContent>
        <CardHeader className="p-6 flex flex-col justify-between w-full">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl font-semibold text-gray-700">
              {title}
            </CardTitle>
            <CardDescription className="text-md">
              {description}{" "}
            </CardDescription>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto py-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
