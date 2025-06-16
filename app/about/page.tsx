"use client";

import { useState } from "react";
import myPicture from "../../asset/my-picture.png";
import Eclipse from "../../asset/Ellipse 75.png";
import Image from "next/image";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="m-0 p-6 bg-[#25282A] min-h-[calc(100vh-96px)]">
      <div className="flex items-center justify-center gap-20 max-w-5xl mx-auto min-h-full">
        {/* Picture with eclipse behind */}
        <div className="relative w-80 h-80 flex-shrink-0">
          {/* Eclipse background */}
          <Image
            src={Eclipse}
            alt="Eclipse background"
            fill
            className="object-contain"
            style={{ zIndex: 0, top: "0", objectPosition: "center bottom" }}
          />
          {/* Profile Picture */}
          <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-lg z-10">
            <Image
              src={myPicture}
              alt="Olufemi's Picture"
              width={288}
              height={288}
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-gray-300 max-w-xl text-left font-inter">
          <p className="text-white text-3xl font-inter mb-2">
            About <span className="text-blue-500">Me</span>
          </p>
          <p className="text-blue-400 font-semibold mb-4">Software Engineer</p>
          <p className="leading-relaxed text-lg mb-4">
            I’m Aladeyelu Olufemi Samuel, a passionate Software Engineer with hands-on experience at Semicolon Africa.
            {showMore && (
              <>
                {" "}I honed my skills in debugging, testing, and improving software quality. I thrive on solving complex problems,
                collaborating with teams, and continuously learning new technologies to build efficient and innovative solutions.
                Driven by curiosity and a strong commitment to excellence, I focus on writing clean, maintainable code and delivering software that makes a difference.
                Outside of coding, I enjoy connecting with fellow tech enthusiasts and exploring new ideas that push boundaries.
              </>
            )}
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {showMore ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </main>
  );
}
