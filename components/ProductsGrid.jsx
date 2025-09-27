'use client';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

export default function ProductsGrid({ products }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} item={p}/>
      ))}
    </motion.div>
  );
}
