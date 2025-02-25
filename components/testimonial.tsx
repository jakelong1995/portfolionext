"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    avatar: "/testimonials/avatar.png", // Replace with actual avatar path
    content:
      "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    id: 2,
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    avatar: "/testimonials/avatar.png", // Replace with actual avatar path
    content:
      "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "/testimonials/avatar.png", // Replace with actual avatar path
    content:
      "Sed lobortis orci elementum egestas lobortis. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
];

export default function Testimonial() {
  return (
    <section className="testimonial-section relative w-full py-20 rounded-3xl overflow-hidden mb-20">
      {/* Background Image - using the same background as services */}
      <Image
        src="/servicesbg.png"
        alt="Testimonials Background"
        width={2000}
        height={2000}
        quality={90}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <div className="text-5xl font-medium mb-16 text-center">
          <span className="text-white">Testimonials Speaking to </span>
          <span className="text-primary">My Results</span>
          <Image
            src="/sparkle.png"
            alt="Sparkle"
            width={32}
            height={32}
            className="inline-block ml-2"
          />
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  className="bg-[#686868]/20 backdrop-blur-lg rounded-3xl border-2 border-white/20 p-6 h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-medium">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base">
                    {testimonial.content}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-primary/80 hover:bg-primary text-white border-none" />
          <CarouselNext className="right-4 bg-primary/80 hover:bg-primary text-white border-none" />
        </Carousel>
      </div>
    </section>
  );
}
