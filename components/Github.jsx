"use client";

import { motion } from "framer-motion";
import GithubDashboard from "./dashboard/GithubDashboard";

const GithubSection = () => {
  return (
    <section className="w-full bg-black/60 py-12 overflow-x-hidden" id="github">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
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
