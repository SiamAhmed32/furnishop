'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Armchair, Bed, ForkKnife, PaintBrushBroad } from 'phosphor-react';

const categories = [
  { name: 'Living', icon: Armchair },
  { name: 'Bedroom', icon: Bed },
  { name: 'Dining', icon: ForkKnife },
  { name: 'Decor', icon: PaintBrushBroad }
];

export default function CategoryStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Shop by Category</h2>
        <Link href="/products" className="text-sm underline hover:no-underline">
          View all
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map(({ name, icon: Icon }) => (
          <Link key={name} href={`/products?category=${encodeURIComponent(name)}`} className="group">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex items-center gap-3 hover:shadow-md transition bg-white/80 dark:bg-neutral-900/70 backdrop-blur">
              <div className="rounded-xl p-3 border border-neutral-200 dark:border-neutral-800">
                <Icon size={24}/>
              </div>
              <div className="font-medium">{name}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
