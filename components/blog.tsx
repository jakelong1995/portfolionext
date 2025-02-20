"use client";

import Image from "next/image";

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
    <section className="blog-section w-full h-auto py-12">
      <div className="option">
        <div className="w-full h-36 justify-between items-center inline-flex">
          <div className="w-1/4 h-auto text-[#344053] text-5xl font-bold">
            From my blog post
          </div>
          <button
            className="px-10 py-5 bg-[#fd8439] rounded-[60px] justify-center items-center gap-2.5 flex 
            hover:bg-[#e67732] transition-colors duration-100 cursor-pointer"
            onClick={() => {
              // Add your click handler here
            }}
          >
            <span className="text-white text-xl font-bold">See All</span>
          </button>
        </div>
      </div>
      <div className="list grid grid-cols-3 gap-6 mt-8">
        {blogItems.map((item) => (
          <div key={item.id} className="blog-item bg-white rounded-3xl p-6">
            <div className="relative w-full h-72 mb-4">
              <Image
                src={item.imageUrl}
                alt={item.title}
                quality={100}
                className="object-cover rounded-xl w-full h-full"
                width={540}
                height={540}
              />
              <div
                data-svg-wrapper
                className="absolute bottom-[-7px] right-[-5px] z-10 bg-white p-2 transition-all duration-300 hover:scale-110 hover:mb-1"
                style={{
                  borderRadius: "30px 0 30px 0",
                }}
              >
                <svg
                  width={60}
                  height={60}
                  viewBox="0 0 115 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="114.081"
                    width={114}
                    height={114}
                    rx={57}
                    transform="rotate(-90 0.5 114.081)"
                    fill="#1D2939"
                  />
                  <path
                    d="M42.5 72.0811L72.5 42.0811"
                    stroke="white"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.5 42.0811H72.5V72.0811"
                    stroke="white"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="h-14 px-8 py-4 mb-4 bg-gray-100 hover:bg-gray-300 rounded-3xl justify-center items-center gap-2.5 inline-flex overflow-hidden transition-colors duration-300">
              <div className="text-black text-xl">App Design</div>
            </div>
            <div className="flex mb-2 gap-2">
              <p className="text-gray-500 text-xl flex items-center">
                <span className="w-2 h-2 bg-[#fd8439] rounded-full mr-2"></span>
                {item.author}
              </p>
              <p className="text-gray-500 text-xl flex items-center ml-4">
                <span className="w-2 h-2 bg-[#fd8439] rounded-full mr-2"></span>
                {item.date}
              </p>
            </div>
            <p className="text-gray-700 text-3xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
