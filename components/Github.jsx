"use client";

import { motion } from "framer-motion";
import GithubDashboard from "./dashboard/GithubDashboard";

const GithubSection = () => {
  return (
    <section
      className="w-full overflow-x-hidden bg-transparent py-8 sm:py-14 lg:py-16 p-2"
      id="github"
    >
      <div className="mx-auto max-w-3xl px-3 sm:px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full overflow-x-auto">
            <div className="min-w-full">
              <GithubDashboard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
