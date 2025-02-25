"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="text-white py-16"
    >
      <div
        id="contact"
        className="mb-28 max-w-3xl mx-auto scroll-mt-28 px-4 md:px-6 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-12">
            <span className="text-zinc-400">Have an Project Idea? </span>
            <span className="text-primary">Let's Discuss</span>
          </h2>
        </div>
        <form className="mt-10 flex flex-col gap-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              className="border rounded-full pl-12 py-6 text-white focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <Input
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
              className=" border rounded-full pl-12 py-6 text-white focus:ring-primary focus:border-primary"
            />
          </div>

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6"
            type="submit"
          >
            Send
          </Button>

          <div className="text-center text-gray-500 mt-4">or</div>
        </form>
      </div>
    </motion.section>
  );
}
