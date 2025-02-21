"use client";

import { motion } from "motion/react";

export default function Banner() {
  const text = (
    <>
      <span className="text-black text-5xl mx-2">UX Design</span>
      <span className="text-primary mx-2">✦</span>
      <span className="text-black text-5xl mx-2">App Design</span>
      <span className="text-primary mx-2">✦</span>
      <span className="text-black text-5xl mx-2">Dashboard</span>
      <span className="text-primary mx-2">✦</span>
      <span className="text-black text-5xl mx-2">Wireframe</span>
      <span className="text-primary mx-2">✦</span>
      <span className="text-black text-5xl mx-2">User Research</span>
      <span className="text-primary mx-2">✦</span>
    </>
  );

  return (
    <div className="relative w-full h-[148px] bg-orange-500 overflow-hidden mx-4">
      <div
        className="absolute w-full h-[72px] left-42 top-8 inset-0 bg-white"
        style={{ transform: "rotate(-3deg) scale(1.1)" }}
      >
        <div className="flex whitespace-nowrap w-full h-full items-center">
          <motion.div
            className="text-black text-4xl tracking-tight"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {text}
            {text}
            {text}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
