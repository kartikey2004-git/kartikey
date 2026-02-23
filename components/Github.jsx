"use client";

import { motion } from "framer-motion";
import GithubDashboard from "./dashboard/GithubDashboard";

const GithubSection = () => {
  return (
    <section
      className="w-full overflow-x-hidden border-b border-border bg-background py-12 sm:py-14"
      id="github"
    >
      <div className="mx-auto max-w-7xl">
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
