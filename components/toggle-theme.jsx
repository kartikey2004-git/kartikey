'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (theme === 'system' ? resolvedTheme : theme) === 'dark';

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="relative flex items-center w-14 h-8 rounded-full border border-border bg-background shadow-sm transition-colors duration-300 hover:ring-1 hover:ring-primary/40"
        aria-label="Toggle Theme"
      >
        {/* Handle */}
        <motion.div
          className="absolute top-[2px] left-[2px] w-6 h-6 rounded-full flex items-center justify-center"
          animate={{ x: isDark ? 24 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {isDark ? (
            <MoonIcon className="h-5 w-5 text-yellow-300" />
          ) : (
            <SunIcon className="h-5 w-5 text-orange-400" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
