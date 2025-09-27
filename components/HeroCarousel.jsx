"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
// import { ArrowLeft, ArrowRight } from "phosphor-react";

const slides = [
  {
    image: "/images/hero1.jpg",
    alt: "Modern living room with cozy sofa and warm lighting",
    headline: "Elevate your living space",
    sub: "Modern furniture for every corner",
  },
  {
    image: "/images/hero2.jpg",
    alt: "Minimalist bedroom interior with soft textures",
    headline: "Sleep in style",
    sub: "Comfort meets design",
  },
  {
    image: "/images/hero3.jpg",
    alt: "Elegant dining table set in a bright room",
    headline: "Dining redefined",
    sub: "Tables & chairs crafted to impress",
  },
];

// Slide motion variants (lightweight & smooth)
const slideVariants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir < 0 ? 60 : -60,
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

export default function HeroCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);


  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

 
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setTimeout(() => changeSlide(1), 6000);
    return () => clearTimeout(timer);
    
  }, [index, prefersReducedMotion]);

  const changeSlide = (dir) => {
    const next = (index + dir + slides.length) % slides.length;
    setIndex([next, dir]);
  };

  const { image, alt, headline, sub } = slides[index];

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
    
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-neutral-900 to-neutral-800" />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={alt}
              fill
              priority={index === 0} // Preload first slide
              sizes="100vw"
              className="object-cover"
            />
            {/* Readability overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 mx-auto max-w-7xl h-full px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                {headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="mt-4 max-w-xl text-base md:text-lg text-neutral-200"
              >
                {sub}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                className="mt-8 flex gap-3"
              >
                <a
                  href="/products"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl bg-emerald-600 text-white font-medium hover:opacity-90 transition"
                >
                  Shop Now
                </a>
                <a
                  href="/stories"
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-xl border border-white text-white font-medium hover:bg-white/10 transition"
                >
                  Explore Stories
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      
      {/* <button
        onClick={() => changeSlide(-1)}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition focus:outline-none"
        aria-label="Previous slide"
      >
        <ArrowLeft size={22} />
      </button>

      <button
        onClick={() => changeSlide(1)}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition focus:outline-none"
        aria-label="Next slide"
      >
        <ArrowRight size={22} />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-emerald-500" : "bg-white/65 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
