"use client";

import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-12 px-4 pb-28">
      {/* Section Title */}
      <h2 className="text-gray-400 text-sm ml-7">About</h2>
      <h1 className="text-3xl font-semibold text-white mb-6 ml-6">Me</h1>

      {/* Main Card */}
      <div className="flex flex-col sm:flex-row items-start gap-8  p-6">
        {/* Avatar */}
        <Image
          src="/hi.png" // your pixel avatar
          width={220}
          height={220}
          alt="Kartikey Avatar"
          className="object-cover flex-shrink-0"
        />

        {/* Content */}
        <div className="flex flex-col gap-3">
          {/* Name */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Kartikey Bhatnagar
          </h1>

          {/* Your Text */}
          <p className="text-gray-300 leading-relaxed max-w-xl">
            I'm a Full Stack Web Developer who enjoys turning ideas into fast,
            functional, and well-designed web apps—building clean, practical
            digital experiences and production-ready systems with modern tech.
          </p>

          {/* Skills Label */}
          <h2 className="mt-3 font-semibold text-white">Skills</h2>

          {/* Skills Row */}
          <div className="flex items-center gap-3 mt-2">
            <img src="/svgs/React.svg" alt="React" className="w-6 h-6" />
            <img
              src="/svgs/Javascript.svg"
              alt="JavaScript"
              className="w-6 h-6"
            />
            <img
              src="/svgs/TypeScript.svg"
              alt="TypeScript"
              className="w-6 h-6"
            />
            <img src="/svgs/Node.js.svg" alt="Node.js" className="w-6 h-6" />
            <img
              src="/svgs/nextjs.svg"
              alt="Next.js"
              className="w-6 h-6 bg-white rounded-full border-black"
            />
            <img
              src="/svgs/PostgresSQL.svg"
              alt="PostgreSQL"
              className="w-6 h-6"
            />
            <img src="/svgs/MongoDB.svg" alt="MongoDB" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
