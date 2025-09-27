"use client";
import { categories } from "../lib/filters";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function ProductFilters({ value, onChange }) {
  const safe = value || {
    q: "",
    category: "All",
    min: "",
    max: "",
    rating: "",
  };
  const [open, setOpen] = useState(false);
  const update = (k, v) => onChange({ ...safe, [k]: v });

  return (
    <section className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-3">
        <div className="relative flex-1">
          <MagnifyingGlass
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={18}
          />
          <input
            value={safe.q}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur"
            placeholder="Search products…"
            onChange={(e) => update("q", e.target.value.toLowerCase())}
          />
        </div>

        <button
          className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 flex items-center gap-2 bg-white/80 dark:bg-neutral-900/70 backdrop-blur"
          onClick={() => setOpen(!open)}
        >
          <SlidersHorizontal size={18} /> Filters
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className={clsx("overflow-hidden")}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
          <select
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2"
            onChange={(e) => update("category", e.target.value)}
            value={safe.category}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="0"
            placeholder="Min price"
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2"
            onChange={(e) => update("min", e.target.value)}
            value={safe.min}
          />
          <input
            type="number"
            min="0"
            placeholder="Max price"
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2"
            onChange={(e) => update("max", e.target.value)}
            value={safe.max}
          />
          <select
            className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2"
            onChange={(e) => update("rating", e.target.value)}
            value={safe.rating}
          >
            <option value="">Any rating</option>
            <option value="4.5">4.5+</option>
            <option value="4.6">4.6+</option>
            <option value="4.7">4.7+</option>
            <option value="4.8">4.8+</option>
          </select>
        </div>
      </motion.div>
    </section>
  );
}
