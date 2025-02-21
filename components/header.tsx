"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-50 fixed top-0 md:top-4 left-1/2 mx-auto w-full">
      <motion.div
        className="flex bg-gray-900 md:w-fit rounded-none md:rounded-full items-center justify-between md:justify-center gap-6 p-2 text-white text-lg"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex gap-1 items-center w-full">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="md:hidden h-12 w-12 rounded-full"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-8 text-center">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-2 p-6 justify-center items-center h-full">
                {links.map((link) => (
                  <Link
                    key={link.hash}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsOpen(false);
                    }}
                    className="px-1 py-3 hover:text-gray-900 dark:hover:text-gray-200 transition-colors w-full justify-center text-xl"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#home" className="h-14 aspect-square p-3 ml-1">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-6">
          {links.map((link) => (
            <div className="relative" key={link.hash}>
              <Link
                className={clsx("flex items-center justify-center px-8 py-4", {
                  "font-bold": activeSection === link.name,
                  "hover:text-primary transition": activeSection !== link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-primary rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </div>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
