"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profile from "@/public/profile.png";

export default function Intro() {
  return (
    <section className="flex-col max-w-3xl flex gap-8">
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
            className="rounded-full object-cover w-48 h-fit border-[0.3rem] border-white shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full flex-col flex gap-4 text-gray-700 text-center max-w-md sm:text-left !leading-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl pt-6 sm:pt-0">
            Hi I'm <span className="font-semibold">Hoang Long!</span>
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
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition shadow-sm"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <FiArrowRight className="opacity-80 " />
        </Link>

        <a
          className=" bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 shadow-sm"
          href="/CV.pdf"
          download
        >
          Download CV <FiDownload className="opacity-80 " />
        </a>
        <div className="flex gap-4">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-sm"
            href="https://www.linkedin.com/in/jakelong1995/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-sm"
            href="https://github.com/jakelong1995"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
