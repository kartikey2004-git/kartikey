"use client";

import { Cpu, Server, Zap, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    Icon: Server,
    text: "Full-stack architecture",
  },
  {
    Icon: Zap,
    text: "Real-time systems",
  },
  {
    Icon: Cpu,
    text: "Performance-first backend",
  },
  {
    Icon: Brain,
    text: "Practical AI integration",
  },
];

export default function WhoAmI() {
  return (
    <section
      className="bg-black/60 px-4 sm:px-8 lg:px-16 py-20"
      id="how-i-build"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
          Who Am I?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          I architect full-stack applications that don&apos;t fall apart at 3
          AM. React, Node.js, real-time systems, and the occasional AI
          integration when it actually makes sense (not everything needs GPT-5).
          Currently building tools that developers actually want to use.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {highlights.map(({ Icon, text }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-md text-gray-400"
            >
              <Icon className="h-4 w-4 text-white/70" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div
          className="
    relative mt-10 max-w-3xl
    rounded-lg
    bg-linear-to-r from-white/5 via-white/3 to-transparent
    border border-white/10
    px-5 py-4
  "
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-white/60 rounded-l-lg" />

          <div className="flex items-start gap-3 pl-3">
            <Rocket className="h-4 w-4 text-white/70 mt-1" />
            <p className="text-md sm:text-base text-gray-200 italic">
              “If you're scared to deploy on Friday, that's an architecture
              problem.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
