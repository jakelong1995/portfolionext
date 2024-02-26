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
    offset: ["0 1", "1.33 1"],
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
      <Card>
        <Link className="absolute inset-0 rounded-lg overflow-hidden" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-0">
          <img
            alt="Project thumbnail"
            className="aspect-video object-cover"
            height="320"
            src="/placeholder.svg"
            width="640"
          />
        </CardContent>
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold">Project One</CardTitle>
          <CardDescription>
            This is the first project description.
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
