"use client";

import Image from "next/image";
import profile from "@/public/profile.png";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="h-[100vh] flex max-w-screen-xl flex-col items-center text-center pt-28 overflow-hidden w-full gap-8 relative"
    >
      <div className="flex flex-col justify-center items-center z-30">
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-none">
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
        className="z-10 h-full w-auto object-bottom object-contain max-w-[800px]"
        quality={100}
      />
      <Image
        src="/ellipse.svg"
        alt="ellipse"
        width={1000}
        height={1000}
        className="absolute bottom-0 max-w-[1000px] mx-auto"
      />
      <Button className="absolute bottom-8 z-20 rounded-full text-xl font-medium h-12 px-6">
        Hire me
        <ArrowUpRight className="w-8 h-8 ml-1" />
      </Button>
      <div className="absolute left-4 bottom-1/2 z-30 flex-col gap-2 text-left max-w-32 md:max-w-64 hidden sm:flex">
        <Image
          src="/quote-up.svg"
          alt="quote-up"
          width={40}
          height={40}
          className="w-8 h-8 hidden sm:block"
        />
        <p className="text-base lg:text-xl font-medium leading-tight">
          The only way to do great work is to love what you do
        </p>
      </div>
      <p className="absolute right-4 bottom-1/2 z-30 text-xl text-right hidden sm:block">
        <span className="text-3xl lg:text-5xl font-semibold">3 years</span>
        <br /> of experience
      </p>
    </section>
  );
}
