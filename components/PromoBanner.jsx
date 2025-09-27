"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MS = 1000,
  MIN = 60 * MS,
  HR = 60 * MIN,
  DAY = 24 * HR;

export default function PromoBanner() {
  const [remaining, setRemaining] = useState(7 * DAY);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      setRemaining(Math.max(7 * DAY - elapsed, 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(remaining / DAY);
  const hours = Math.floor((remaining % DAY) / HR);
  const mins = Math.floor((remaining % HR) / MIN);
  const secs = Math.floor((remaining % MIN) / MS);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-4 py-12"
    >
      <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-800 dark:to-teal-900 p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Limited-Time Offer
            </h2>
            <p className="text-sm opacity-90 mt-1">
              Save up to 20% on selected living &amp; dining sets.
            </p>
          </div>
          <div className="flex items-center gap-3 text-center">
            <TimeBox label="Days" value={days} />
            <Sep />
            <TimeBox label="Hours" value={hours} />
            <Sep />
            <TimeBox label="Mins" value={mins} />
            <Sep />
            <TimeBox label="Secs" value={secs} />
          </div>
          <Link
            href="/products"
            className="px-5 py-2.5 rounded-xl bg-white text-neutral-900 hover:opacity-90 transition"
          >
            Shop Offer
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="min-w-[60px]">
      <div className="text-2xl font-semibold leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
}
function Sep() {
  return <span className="text-2xl font-bold">:</span>;
}
