"use client";
import { motion } from "framer-motion";
import GithubDashboard from "./dashboard/GithubDashboard";

const GithubSection = () => {
  return (
    <section className="w-full bg-black/60 px-6 md:px-12 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=""
      >
        <div className="w-full overflow-x-auto">
          <GithubDashboard />
        </div>
      </motion.div>
    </section>
  );
};

export default GithubSection;
