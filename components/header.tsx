"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { ModeToggle } from "./mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed p-1 left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-75 w-full sm:w-fit top-0 sm:top-4 rounded-none sm:rounded-full flex items-center justify-between sm:justify-center text-[0.9rem] font-medium text-gray-500 gap-4"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {" "}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="h-12 w-12 rounded-full"
            >
              {" "}
              <Menu />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <ul className="hidden sm:flex items-center justify-center gap-4">
              {links.map((link) => (
                <li className=" relative" key={link.hash}>
                  <Link
                    className={clsx(
                      "flex items-center justify-center px-4 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-100":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </li>
              ))}{" "}
            </ul>{" "}
          </PopoverContent>
        </Popover>
        <Link href="#home" className="h-12 aspect-square p-3">
          <Image src={logo} alt="Logo" />
        </Link>
        <ModeToggle />
      </motion.nav>
    </header>
  );
}
