"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { SiLinkedin, SiGithub, SiFacebook, SiX } from "react-icons/si";
import profile from "@/public/profile.png";
import { Button } from "./ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="h-[100vh] flex max-w-screen-lg flex-col items-center text-center pt-28 overflow-hidden w-full relative"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center ml-6">
          <div className="rounded-full text-gray-900 px-6 py-2 text-xl font-medium border-2 border-gray-900">
            Hello!
          </div>
          <Image
            src="/vector1.svg"
            alt="vector"
            width={40}
            height={40}
            className="mb-14 w-8 h-8 -ml-2"
          />
        </div>
        <div className="relative">
          <h1 className="text-7xl font-semibold leading-none">
            I&apos;m <span className="text-primary">Long</span> <br />
            Software Engineer
          </h1>{" "}
          <Image
            src="/vector2.svg"
            alt="vector"
            width={40}
            height={40}
            className="w-16 h-16 absolute -left-5 -translate-x-1/2 -bottom-10"
          />
        </div>
      </div>
      <Image
        src={profile}
        alt="Profile"
        height={800}
        width={800}
        priority={true}
        className="h-full w-auto z-10"
      />
      <div className="absolute -bottom-[300px] bg-primary/70 w-[600px] h-[600px] rounded-full"></div>
      <Button className="absolute bottom-8 z-20 rounded-full text-xl font-medium h-12 px-6">
        Hire me
        <ArrowUpRight className="w-8 h-8 ml-1" />
      </Button>
      <div className="absolute left-1 bottom-1/3 z-20 flex flex-col gap-3 max-w-xs text-left">
        <Image
          src="/quote-up.svg"
          alt="quote-up"
          width={40}
          height={40}
          className="w-8 h-8"
        />
        <p className="text-xl font-medium leading-tight">
          The only way to do great work is to love what you do
        </p>
      </div>
      <p className="absolute right-1 bottom-1/3 z-20 text-xl text-right">
        <span className="text-5xl font-semibold">3 years</span>
        <br /> of experience
      </p>
    </section>
  );
}
