"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-neutral-800 dark:to-neutral-900 py-16 px-6 text-center relative z-10 rounded-3xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-neutral-100">
          Get design tips &amp; exclusive offers
        </h3>
        <p className="text-sm md:text-base mt-2 text-emerald-50 dark:text-neutral-400">
          Join our newsletter—no spam, just good stuff.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          />
          <button className="px-5 py-3 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-neutral-100 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500 transition">
            Subscribe
          </button>
        </form>
        {ok && (
          <div className="mt-3 text-emerald-100 dark:text-emerald-400 font-medium">
            You’re in! 🎉
          </div>
        )}
      </div>
    </motion.section>
  );
}
