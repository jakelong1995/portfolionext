"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import profile from "@/public/profile.png";
import { Button } from "./ui/button";

export default function Intro() {
  return (
    <section
      id="home"
      className="scroll-mt-96 flex-col max-w-3xl flex gap-8  mb-28"
    >
      <div className="flex flex-col md:flex-row items-center h-fit px-4 py-8 justify-between mx-auto sm:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={profile}
            alt="profilepic"
            priority={true}
            className="rounded-full object-cover w-48 h-fit border-[0.3rem] border-white dark:border-slate-700 shadow-lg"
          />
        </motion.div>

        <motion.div
          className="w-full flex-col flex gap-4 text-center md:text-left max-w-md !leading-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl pt-6 sm:pt-0">
            Hi I&apos;m <span className="font-semibold">Hoang Long!</span>
          </h1>

          <p className="text-xl !leading-[1.5] ">
            <span className="font-semibold">
              UX Designer & full-stack developer
            </span>{" "}
            with <span className="font-semibold">4 years</span> of experience. I
            enjoy building{" "}
            <span className="italic">usable & aesthetic websites</span>. My
            focus is <span className="underline">React (Next.js)</span>.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Button asChild className="rounded-full">
          <Link href="#contact">
            Contact me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button> */}

        <Button
          size={"icon"}
          variant={"secondary"}
          asChild
          className="rounded-full bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Link
            href="https://www.linkedin.com/in/jakelong1995/"
            target="_blank"
          >
            <SiLinkedin className="h-4 w-4" />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant={"secondary"}
          asChild
          className="rounded-full bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Link href="https://github.com/jakelong1995" target="_blank">
            <SiGithub className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
