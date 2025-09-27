'use client';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import ProductCard from './ProductCard';

export default function TrendingGrid() {
  const trending = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Trending Now</h2>
      </div>

      <motion.div
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {trending.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </motion.div>
    </section>
  );
}
