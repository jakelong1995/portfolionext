"use client";

import Link from "next/link";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeInAnimationVariants } from "./animation";
import { useSectionInView } from "@/lib/hooks";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  // Define animation variants
  const containerVariants = {
    initial: {
      background: "rgba(0, 0, 0, 0)",
      height: "auto",
    },
    hover: {
      background: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(24px)",
      height: "fit-content",
    },
  };

  const descriptionVariants = {
    initial: {
      height: 0,
      opacity: 0,
      marginTop: 0,
    },
    hover: {
      height: "auto",
      opacity: 1,
      marginTop: "0.5rem",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-20 max-w-screen-xl scroll-mt-28"
    >
      <div className="container grid px-4 md:px-6">
        <div className="flex justify-between items-center mb-10 sm:mb-12">
          <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium text-center">
            <span className="text-zinc-900">My </span> Portfolio
          </div>
          <Button className="rounded-full text-xl font-medium h-12 px-6">
            View all
          </Button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-auto">
          {projectsData.map((project, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{
                once: true,
              }}
              custom={index}
              key={index}
              className="group"
            >
              <Link href={project.link} target="_blank">
                <span className="sr-only">View {project.title}</span>
                <div className="h-full overflow-hidden rounded-3xl border-0 shadow-sm relative">
                  <Image
                    alt={project.title}
                    className="aspect-[4/3] object-cover rounded-t-xl"
                    height="360"
                    src={project.imageUrl}
                    width="640"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 p-3 flex items-center justify-center border-primary text-primary border rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="h-8 w-8" />
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-3 text-white flex flex-col gap-1 rounded-2xl m-2"
                    variants={containerVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-semibold mb-1">
                      {project.title}
                    </h3>
                    <motion.div
                      variants={descriptionVariants}
                      className="flex flex-col gap-2 overflow-hidden"
                    >
                      {" "}
                      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-1">
                        {project.tags.map((tag, index) => (
                          <div
                            key={index}
                            className="whitespace-nowrap text-sm px-3 py-1 bg-white/10 text-white rounded-full backdrop-blur-lg font-medium"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="block">{project.description}</div>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
