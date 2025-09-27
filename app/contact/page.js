"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("✅ Message sent successfully!");
    }, 1200);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-neutral-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-neutral-900"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-neutral-900"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 text-white py-3 font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                {status}
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9023623752214!2d90.39945221538526!3d23.750885494616785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a8dfaa2b73%3A0xd7f47c93d0e2f379!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
