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
          width={260}
          height={260}
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
            I'm a Full Stack Web Developer who loves building clean, meaningful,
            and practical digital experiences. I enjoy turning ideas into fast,
            functional, and well-designed web apps. I specialize in creating
            MVPs and production-ready systems using modern web technologies.
          </p>

          {/* Skills Label */}
          <h2 className="mt-3 font-semibold text-white">Skills</h2>

          {/* Skills Row */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <img
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=000"
              alt="JavaScript"
            />
            <img
              src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
            <img
              src="https://img.shields.io/badge/Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />
            <img
              src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js"
            />
            <img
              src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-4ea94b?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
