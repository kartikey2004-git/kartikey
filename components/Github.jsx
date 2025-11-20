"use client";
import { motion } from "framer-motion";
import GithubDashboard from "./dashboard/GithubDashboard";

const GithubSection = () => {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-4xl font-normal text-white tracking-tight">
          GitHub <span className="text-gray-400">Dashboard</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-xl">
          A quick look at my coding activity, contributions & development
          journey.
        </p>
      </div>

      {/* Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-[#0f0f0f] border p-6 md:p-10"
      >
        <GithubDashboard />
      </motion.div>
    </section>
  );
};

export default GithubSection;
