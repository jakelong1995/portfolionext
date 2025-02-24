"use client";

import Link from "next/link";
import {
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { fadeInAnimationVariants } from "./animation";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-20 max-w-screen-xl scroll-mt-28"
    >
      <div className="container grid px-4 md:px-6">
        <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-16 text-center">
          <span className="text-zinc-900">My </span> Portfolio
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-auto">
          {projectsData.map((project, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              key={index}
              whileHover={{ scale: 1.05 }} // Zoom in when hovered over
              transition={{ duration: 0.3 }} // Transition duration
            >
              <Link href={project.link} target="_blank">
                <span className="sr-only">View {project.title}</span>
                <Card className="h-full overflow-hidden dark:bg-gray-900">
                  <CardContent className="p-0">
                    <Image
                      alt={project.title} // Use the name from the project data
                      className="aspect-video object-cover"
                      height="360"
                      src={project.imageUrl} // Use the image from the project data
                      width="640"
                    />
                  </CardContent>
                  <CardHeader className="gap-1 p-4">
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="whitespace-nowrap"
                          variant="secondary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
