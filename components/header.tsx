"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "@/public/logo.svg";
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
        className="flex bg-gray-900 sm:w-fit rounded-none sm:rounded-full items-center justify-between sm:justify-center gap-6 p-2 text-white text-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <div className="flex gap-1">
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden h-12 w-12 rounded-full"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>{" "}
          <Link href="#home" className="h-14 aspect-square p-3 ml-1">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>{" "}
        <nav className="hidden sm:flex items-center justify-center gap-6">
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
          ))}{" "}
        </nav>{" "}
        {/* <ModeToggle /> */}
      </motion.div>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed w-full text-gray-500 left-0"
          initial={{ x: "-100vh" }}
          animate={{ x: "0vh" }}
          transition={{ type: "spring", stiffness: 380, damping: 40 }}
        >
          <Card className="px-4 flex flex-col rounded-none border-none z-10">
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
        </motion.div>
      )}
    </header>
  );
}
