"use client";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  GlobeHemisphereEast,
  ShieldCheck,
} from "phosphor-react";

const items = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    text: "We prefer FSC-certified wood and eco-friendly finishes.",
  },
  {
    icon: Recycle,
    title: "Circular Design",
    text: "Packaging is recyclable and we reduce waste across the chain.",
  },
  {
    icon: GlobeHemisphereEast,
    title: "Carbon-Conscious",
    text: "Optimized logistics to minimize emissions for every order.",
  },
  {
    icon: ShieldCheck,
    title: "Fair & Safe",
    text: "Ethical sourcing and strict quality control at every step.",
  },
];
export default function Commitment() {
  return (
    <section className="relative">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950" />
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Our Commitment & Values
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          Built to last, designed responsibly — because your home and the planet
          matter.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald-200/60 dark:border-emerald-900/40 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-5"
            >
              <div className="inline-flex items-center justify-center rounded-xl border border-emerald-200/70 dark:border-emerald-900/50 p-3">
                <Icon size={22} className="text-emerald-600" />
              </div>
              <h3 className="mt-3 font-medium">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
