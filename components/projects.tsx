"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Badge } from "./ui/badge";
import { fadeInAnimationVariants } from "./animation";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState("All");
  const [animatedProjects, setAnimatedProjects] = useState(projectsData);

  const tabOptions = ["All", "Landing Page", "Web App", "Mobile App", "UI/UX"];

  useEffect(() => {
    setAnimatedProjects(projectsData);
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? animatedProjects
      : animatedProjects.filter((project) =>
          activeTab === "UI/UX"
            ? project.tags.some(
                (tag) =>
                  tag.toLowerCase().includes("ui") ||
                  tag.toLowerCase().includes("ux")
              )
            : project.tags.includes(activeTab)
        );

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 scroll-mt-28 max-w-6xl mx-auto"
    >
      <div className="container grid gap-4 px-4 md:gap-8 md:px-6">
        <SectionHeading>Featured Projects</SectionHeading>

        <Tabs
          defaultValue="All"
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="justify-center mb-4">
            {tabOptions.map((option) => (
              <TabsTrigger key={option} value={option}>
                {option}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 h-auto">
              {filteredProjects.map((project, index) => (
                <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={project.link} target="_blank">
                    <span className="sr-only">View {project.title}</span>
                    <Card className="h-full overflow-hidden dark:bg-gray-900">
                      <CardContent className="p-0">
                        <Image
                          alt={project.title}
                          className="aspect-video object-cover"
                          height="360"
                          src={project.imageUrl}
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
