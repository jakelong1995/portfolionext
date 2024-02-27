"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex-col flex max-w-3xl gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
