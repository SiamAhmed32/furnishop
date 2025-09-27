'use client';
import products from '../data/products.json';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

export default function FeaturedGrid() {
  const featured = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Featured</h2>
        <a href="/products" className="text-sm underline hover:no-underline">
          View all
        </a>
      </div>
      <motion.div
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {featured.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
