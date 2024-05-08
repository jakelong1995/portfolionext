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
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="mb-28 max-w-6xl scroll-mt-28">
      <div className="container grid gap-4 px-4 md:gap-8 md:px-6">
        <SectionHeading>Featured Projects</SectionHeading>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-auto">
          {projectsData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }} // Zoom in when hovered over
              transition={{ duration: 0.3 }} // Transition duration
            >
              <Link key={index} href={project.link}>
                <span className="sr-only">View {project.title}</span>
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      alt={project.title} // Use the name from the project data
                      className="aspect-video object-cover"
                      height="320"
                      src={project.imageUrl} // Use the image from the project data
                      width="640"
                    />
                  </CardContent>
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
}
