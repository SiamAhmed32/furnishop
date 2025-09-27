"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/slices/cartSlice";

// Example featured product
const featured = {
  id: "sofa-aurora",
  title: "Aurora Modular Sofa",
  price: 680,
  rating: 4.7,
  category: "Living",
  image: "/images/sofa-aurora.jpg",
  description: "A modular sofa combining clean lines with plush comfort.",
  discount: 15, // percent off
};

export default function DealOfTheWeek() {
  const dispatch = useDispatch();
  const [leftMs, setLeftMs] = useState(0);
  const endRef = useRef(null);

  // countdown timer
  useEffect(() => {
    endRef.current = Date.now() + 72 * 60 * 60 * 1000; // 72h
    const tick = () => {
      const left = Math.max(0, endRef.current - Date.now());
      setLeftMs(left);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // breakdown time
  const { d, h, m, s } = useMemo(() => {
    const total = 72 * 60 * 60 * 1000;
    return {
      d: Math.floor(leftMs / (1000 * 60 * 60 * 24)),
      h: Math.floor((leftMs / (1000 * 60 * 60)) % 24),
      m: Math.floor((leftMs / (1000 * 60)) % 60),
      s: Math.floor((leftMs / 1000) % 60),
      pct: Math.round((leftMs / total) * 100),
    };
  }, [leftMs]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex-1 w-full aspect-[4/3] rounded-3xl overflow-hidden"
        >
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
          />
          <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {featured.discount}% OFF
          </span>
        </motion.div>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            Deal of the Week
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Don’t miss out — this exclusive offer ends in:
          </p>

          {/* countdown */}
          <div className="mt-5 flex gap-3">
            <TimePill label="DAYS" value={d} />
            <Separator />
            <TimePill label="HRS" value={h} />
            <Separator />
            <TimePill label="MIN" value={m} />
            <Separator />
            <TimePill label="SEC" value={s} />
          </div>

          {/* details */}
          <div className="mt-6">
            <h3 className="text-xl font-medium">{featured.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {featured.description}
            </p>
            <div className="mt-3 text-lg font-semibold text-emerald-600">
              ${featured.price}
            </div>
          </div>

          {/* action */}
          <button
            onClick={() => dispatch(addToCart(featured))}
            className="mt-6 px-6 py-3 rounded-xl bg-emerald-600 text-white hover:opacity-90 transition"
          >
            Add to cart
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// helper subcomponents
function TimePill({ label, value }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 leading-none text-center">
      <div className="font-semibold text-lg">{padded}</div>
      <div className="text-[10px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}

function Separator() {
  return <span className="opacity-40">:</span>;
}
