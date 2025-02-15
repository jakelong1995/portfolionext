"use client";

import React from "react";
import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 mb-28 h-16 w-0.5 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
