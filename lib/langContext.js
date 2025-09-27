'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: { products: "Products", stories: "Stories", contact: "Contact", cart: "Cart" },
    hero: {
      headline: "Discover Furniture That Defines Your Home",
      sub: "Crafted with precision. Inspired by modern design. Built for comfort.",
      shop: "Shop Now",
      explore: "Explore Stories"
    },
    cart: { title: "Your Cart", empty: "Your cart is empty.", browse: "Browse products", total: "Total", checkout: "Checkout", clear: "Clear cart", remove: "Remove" },
    contact: { title: "Get in Touch", name: "Your Name", email: "Your Email", message: "Your Message", send: "Send Message" }
  },
  bn: {
    nav: { products: "পণ্য", stories: "কাহিনী", contact: "যোগাযোগ", cart: "কার্ট" },
    hero: {
      headline: "আসবাবপত্র যা আপনার ঘরকে সংজ্ঞায়িত করে",
      sub: "নির্ভুলভাবে তৈরি। আধুনিক ডিজাইনের অনুপ্রেরণায়। আরামের জন্য নির্মিত।",
      shop: "এখনই কিনুন",
      explore: "কাহিনী দেখুন"
    },
    cart: { title: "আপনার কার্ট", empty: "আপনার কার্ট খালি।", browse: "পণ্য দেখুন", total: "মোট", checkout: "চেকআউট", clear: "কার্ট খালি করুন", remove: "মুছে ফেলুন" },
    contact: { title: "যোগাযোগ করুন", name: "আপনার নাম", email: "আপনার ইমেইল", message: "আপনার বার্তা", send: "বার্তা পাঠান" }
  }
};

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'bn' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
