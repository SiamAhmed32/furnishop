"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight, Quotes, Star } from "phosphor-react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Aminul Islam",
    role: "Interior Designer",
    quote:
      "FurniShop’s build quality blew me away. The sofa felt premium and delivery was quick.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Nusrat Jahan",
    role: "Product Manager",
    quote:
      "Smooth browsing, clear photos, and checkout was effortless. Exactly what I needed.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Rafi Khan",
    role: "Homeowner",
    quote:
      "Loved the minimal look. Assembly was simple and everything matched my decor.",
    rating: 4.5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const total = TESTIMONIALS.length;

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const play = () => {
    clear();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
  };

  useEffect(() => {
    play();
    return clear;
  }, []);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const active = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 bg-neutral-50 dark:bg-neutral-950 rounded-3xl">
      <div className="text-center mb-8">
        <Quotes
          size={40}
          className="mx-auto text-emerald-600 dark:text-emerald-400"
        />
        <h2 className="text-2xl md:text-3xl font-semibold">
          What our customers say
        </h2>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200">
              “{active.quote}”
            </p>
            <div className="mt-6 font-semibold text-neutral-900 dark:text-neutral-100">
              {active.name}
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {active.role}
            </div>
            <div className="mt-3 flex justify-center gap-1 text-amber-500">
              {renderStars(active.rating)}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute top-1/2 -translate-y-1/2 -left-6 p-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow"
        >
          <CaretLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute top-1/2 -translate-y-1/2 -right-6 p-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow"
        >
          <CaretRight size={18} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index
                ? "bg-emerald-600"
                : "bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++)
    stars.push(<Star key={`f${i}`} weight="fill" />);
  if (half) stars.push(<Star key="half" />);
  while (stars.length < 5) stars.push(<Star key={`e${stars.length}`} />);
  return stars;
}
