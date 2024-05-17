"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/components/ui/active-section-context";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed p-1 top-6 left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex items-center justify-center text-[0.9rem] font-medium text-gray-500 gap-4">
          <li>
            <Link href="#home">
              <Image src={logo} alt="Logo" className="h-6" />
            </Link>
          </li>
          {links.map((link) => (
            <li className=" relative" key={link.hash}>
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
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
          <li>
            <ModeToggle />
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}
