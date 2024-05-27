"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Card } from "./ui/card";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="z-20 fixed top-0 sm:top-4 left-1/2 mx-auto w-full">
      <motion.div
        className="flex border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-75 sm:w-fit rounded-none sm:rounded-full items-center justify-between sm:justify-center text-[0.9rem] font-medium text-gray-500 gap-4 p-2 sm:p-1"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        {" "}
        <div className="flex gap-1">
          {" "}
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden h-12 w-12 rounded-full"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>{" "}
          <Link href="#home" className="h-12 aspect-square p-3">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>{" "}
        <nav className="hidden sm:flex items-center justify-center gap-4">
          {links.map((link) => (
            <div className="relative" key={link.hash}>
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-3 hover:text-gray-900 transition dark:hover:text-gray-200",
                  {
                    "text-gray-900 dark:text-gray-200":
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
            </div>
          ))}{" "}
        </nav>{" "}
        <ModeToggle />
      </motion.div>
      {isMobileMenuOpen && (
        <Card className="fixed w-full px-4 flex flex-col text-gray-500 left-0 rounded-none border-none z-10">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                isMobileMenuOpen && setIsMobileMenuOpen(false);
              }}
              className="px-2 py-3 hover:text-gray-900 dark:hover:text-gray-200"
            >
              {link.name}
            </Link>
          ))}
        </Card>
      )}
    </header>
  );
}
