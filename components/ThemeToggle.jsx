"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 py-1 rounded-lg border border-neutral-400 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-2"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? "Light" : "Dark"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
