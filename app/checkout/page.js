"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { clearCart } from "../../lib/slices/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

export default function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          🎉 Order Confirmed!
        </h1>
        <p className="mt-4 text-neutral-500">
          Thank you for your purchase. A confirmation email would be sent in a
          real app.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block px-4 py-2 rounded-xl bg-emerald-600 text-white hover:opacity-90 transition"
        >
          Continue Shopping
        </Link>
      </main>
      <Footer />
    </>
  );
}
