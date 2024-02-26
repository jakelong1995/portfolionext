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
      <Card className="flex">
        <Link className="absolute inset-0 rounded-lg overflow-hidden" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-0 w-full">
          <Image
            alt="Project thumbnail"
            className="aspect-video object-cover"
            height="320"
            src={imageUrl}
            width="640"
          />
        </CardContent>
        <CardHeader className="p-4 w-full">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription>{description} </CardDescription>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto py-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
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
