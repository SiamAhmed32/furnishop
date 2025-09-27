"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/slices/cartSlice";

const itemVar = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <motion.article
        variants={itemVar}
        className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
      >
        <Link href={`/products/${item.id}`}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>

        <div className="p-4">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
            <Link href={`/products/${item.id}`} className="hover:underline">
              {item.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {item.category}
          </p>
          <p className="mt-2 font-semibold text-neutral-900 dark:text-neutral-100">
            ${item.price}
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => dispatch(addToCart(item))}
            className="mt-3 w-full rounded-xl bg-emerald-600 text-white py-2 hover:opacity-90 transition"
          >
            Add to cart
          </motion.button>
        </div>
      </motion.article>
    </>
  );
}
