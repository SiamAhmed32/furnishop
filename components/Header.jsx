"use client";
import Link from "next/link";
import { ShoppingCart, List, X } from "phosphor-react";
import { useSelector } from "react-redux";
import { useLang } from "../lib/langContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { items } = useSelector((s) => s.cart);
  const count = items.reduce((a, c) => a + c.qty, 0);
  const { lang, t, toggleLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
            FurniShop
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/products"
            className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {t.nav.products}
          </Link>
          <Link
            href="/stories"
            className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {t.nav.stories}
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {t.nav.contact}
          </Link>

          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm"
          >
            {lang === "en" ? "বাংলা" : "English"}
          </button>

          <Link href="/cart" className="relative">
            <ShoppingCart size={24} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="p-2 border rounded-lg border-neutral-300 dark:border-neutral-700"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-72 bg-white dark:bg-neutral-900 z-50 p-6"
          >
            <button
              onClick={() => setOpen(false)}
              className="mb-6 p-2 border rounded-lg border-neutral-300 dark:border-neutral-700"
            >
              <X size={20} />
            </button>
            <nav className="flex flex-col gap-4">
              <Link href="/products" onClick={() => setOpen(false)}>
                {t.nav.products}
              </Link>
              <Link href="/stories" onClick={() => setOpen(false)}>
                {t.nav.stories}
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                {t.nav.contact}
              </Link>
              <button
                onClick={() => {
                  toggleLang();
                  setOpen(false);
                }}
                className="px-3 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm"
              >
                {lang === "en" ? "বাংলা" : "English"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
