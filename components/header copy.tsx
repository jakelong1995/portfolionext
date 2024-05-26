"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { ModeToggle } from "./mode-toggle";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger menu icons

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed p-1 top-4 left-1/2 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-75 w-full max-w-5xl transform -translate-x-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex items-center justify-between md:justify-center text-[0.9rem] font-medium text-gray-500 gap-4">
          <Link href="#home" className="h-12 aspect-square p-3">
            <Image src={logo} alt="Logo" />
          </Link>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-8 h-8 text-gray-500" />
              ) : (
                <HiMenu className="w-8 h-8 text-gray-500" />
              )}
            </button>
          </div>
          <ul className="hidden md:flex items-center justify-center gap-4">
            {links.map((link) => (
              <li className="relative" key={link.hash}>
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
            ))}
          </ul>
        </div>
        {isMobileMenuOpen && (
          <motion.ul
            className="md:hidden flex flex-col items-center gap-4 mt-4 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link) => (
              <li className="relative" key={link.hash}>
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
                    setIsMobileMenuOpen(false); // Close the menu on link click
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
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </header>
  );
}
