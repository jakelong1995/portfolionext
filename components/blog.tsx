"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
export default function Component() {
  const blogItems = [
    {
      id: 1,
      author: "Jayesh Patil",
      title: "Best practices for UX Design",
      date: "10 Nov, 2024",
      description: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      imageUrl: "/sample-blog.jpg",
    },
    {
      id: 2,
      author: "Jayesh Patil",
      title: "Best practices for UX Design",
      date: "9 Oct, 2023",
      description: "Sugee: Loan Management System for Rural Sector.",
      imageUrl: "/sample-blog.jpg",
    },
    {
      id: 3,
      author: "Jayesh Patil",
      title: "Best practices for UX Design",
      date: "13 Aug, 2023",
      description: "Cinetrade: Innovative way to invest in Digital Media",
      imageUrl: "/sample-blog.jpg",
    },
  ];

  return (
    <section className="blog-section max-w-screen-xl h-auto py-12 px-4">
      <div className="w-full justify-between items-center inline-flex">
        <div className="text-gray-700 text-5xl font-bold">
          From my blog post
        </div>
        <Button className="px-10 h-16 bg-primary rounded-full text-white text-xl font-bold">
          See All
        </Button>
      </div>
      <div className="list grid grid-cols-3 gap-6 mt-12">
        {blogItems.map((item) => (
          <div
            key={item.id}
            className="blog-item flex flex-col bg-white rounded-3xl gap-8"
          >
            <div className="relative w-full h-72">
              <Image
                src={item.imageUrl}
                alt={item.title}
                quality={100}
                className="object-cover rounded-3xl w-full h-full"
                width={540}
                height={540}
              />
              <div
                className="absolute -bottom-4 -right-4 z-10 bg-white p-4 transition-all duration-300 rounded-br-none
               rounded-full"
              >
                <div className="bg-gray-800 rounded-full p-4">
                  <ArrowUpRight className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            <div className="px-8 py-4 bg-gray-100 rounded-full w-fit">
              <div className="text-black text-xl">App Design</div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-700 text-xl flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {item.author}
              </p>
              <p className="text-gray-700 text-xl flex items-center ml-4">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                {item.date}
              </p>
            </div>
            <p className="text-gray-700 text-3xl leading-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
