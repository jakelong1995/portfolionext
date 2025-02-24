"use client";

import Image from "next/image";
import { motion } from "motion/react";

const SERVICES = [
  {
    title: "Web Development",
    image: "/test.png",
  },
  {
    title: "UI/UX Design",
    image: "/test.png",
  },
  {
    title: "Mobile Development",
    image: "/test.png",
  },
];

export default function Services() {
  return (
    <section className="services-section relative w-full py-20 rounded-3xl overflow-hidden mb-20">
      <Image
        src="/servicesbg.png"
        alt="Services"
        width={2000}
        height={2000}
        quality={90}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-16 text-center">
          <span className="text-white">My </span> Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#686868]/20 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-primary transition-all duration-300 flex flex-col overflow-hidden cursor-pointer pt-1 sm:pt-2"
              whileHover="hover"
              initial="initial"
            >
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-medium p-6 mb-16 text-center">
                {service.title}
              </h3>
              <motion.div
                variants={{
                  hover: { scale: 1.05, y: -5 },
                }}
                className="relative"
              >
                <div className="absolute -top-12 bg-[#757575]/50 w-[80%] h-20 rounded-3xl z-10 left-1/2 -translate-x-1/2"></div>
                <div className="absolute -top-6 bg-[#9E9D9D] w-[90%] h-20 rounded-3xl z-20 left-1/2 -translate-x-1/2"></div>
                <div className="absolute -top-6 bg-[#9E9D9D] w-[90%] h-20 rounded-3xl z-20 left-1/2 -translate-x-1/2"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="rounded-3xl z-40 relative"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
