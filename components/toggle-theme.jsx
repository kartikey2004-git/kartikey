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
      <motion.button
        whileTap={{ rotate: 360, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="p-2 rounded-full border border-border hover:border-primary transition-colors duration-300 bg-background shadow-md hover:shadow-lg"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <MoonIcon className="h-6 w-6 text-yellow-300 transition duration-300" />
        ) : (
          <SunIcon className="h-6 w-6 text-orange-400 transition duration-300" />
        )}
      </motion.button>
    </div>
  );
}
