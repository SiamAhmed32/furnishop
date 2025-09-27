"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Armchair, Bed, ForkKnife, PaintBrushBroad } from "phosphor-react";

const categories = [
  { name: "Living", icon: Armchair },
  { name: "Bedroom", icon: Bed },
  { name: "Dining", icon: ForkKnife },
  { name: "Decor", icon: PaintBrushBroad },
];

export default function CategoryStrip() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient and accent wave */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at -10% -10%, rgba(16,185,129,0.15), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(20,184,166,0.14), transparent 60%), linear-gradient(to bottom, transparent, rgba(0,0,0,0.02))",
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 opacity-[0.07] dark:opacity-[0.08]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60 Q 360 0 720 60 T 1440 60 V120 H0 Z"
          className="fill-emerald-600"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Shop by Category
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Explore curated collections for every room.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline"
          >
            View all products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map(({ name, icon: Icon }, index) => (
            <CategoryCard key={name} name={name} Icon={Icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ name, Icon, index }) {
  return (
    <Link
      href={`/products?category=${encodeURIComponent(name)}`}
      aria-label={`Browse ${name} products`}
      className="group"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 * index }}
        className="relative rounded-2xl p-5 border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/70 backdrop-blur hover:shadow-lg transition-shadow"
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-emerald-500/0 group-hover:ring-4 group-hover:ring-emerald-500/10 transition" />

        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-neutral-800 dark:to-neutral-900">
              <Icon size={24} className="text-emerald-600" />
            </div>
            <span className="absolute -z-10 -left-2 -top-2 h-7 w-7 rounded-full bg-emerald-500/10 blur-[6px] opacity-0 group-hover:opacity-100 transition" />
          </div>

          <div className="flex-1">
            <div className="font-medium">{name}</div>
            <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Browse {name.toLowerCase()} collection
            </div>
          </div>

          <span className="ml-auto inline-block transition-transform group-hover:translate-x-1">
            <span className="block h-2 w-2 rotate-45 border-r-2 border-b-2 border-neutral-400 dark:border-neutral-500" />
          </span>
        </div>

        <span className="pointer-events-none absolute left-5 right-5 bottom-4 h-[2px] bg-gradient-to-r from-emerald-500/40 via-teal-500/40 to-emerald-500/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
      </motion.div>
    </Link>
  );
}
