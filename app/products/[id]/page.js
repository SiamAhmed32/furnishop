"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductFilters from "../../components/ProductFilters";
import ProductsGrid from "../../components/ProductsGrid";
import data from "../../data/products.json";
import { useEffect, useMemo, useState } from "react";
import { applyFilters } from "../../lib/filters";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function paramsToFilters(params) {
  return {
    q: params.get("q") ?? "",
    category: params.get("category") ?? "All",
    min: params.get("min") ?? "",
    max: params.get("max") ?? "",
    rating: params.get("rating") ?? "",
  };
}

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // initialize from URL
  const [filters, setFilters] = useState(() => paramsToFilters(searchParams));

  // keep state in sync if URL changes (e.g., user clicked CategoryStrip link)
  useEffect(() => {
    setFilters(paramsToFilters(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  // when filters change, write them to the current URL (no hardcoded '/products' or trailing slashes)
  const handleChange = (next) => {
    setFilters(next);
    const sp = new URLSearchParams();
    Object.entries(next).forEach(([k, v]) => {
      if (!v) return;
      if (k === "category" && v === "All") return;
      sp.set(k, v);
    });
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : `${pathname}`);
  };

  const list = useMemo(() => applyFilters(data, filters), [filters]);

  return (
    <>
      <Header />
      <main className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl md:text-3xl font-semibold pt-6 pb-2">
            All Products
          </h1>
          <p className="text-sm text-neutral-500 mb-2">
            Showing {list.length} {list.length === 1 ? "item" : "items"}
          </p>
        </div>

        <ProductFilters value={filters} onChange={handleChange} />

        <div className="mx-auto max-w-7xl px-4 pt-6">
          {list.length ? (
            <ProductsGrid products={list} />
          ) : (
            <div className="text-sm text-neutral-600 dark:text-neutral-300 border rounded-xl p-6 bg-white/80 dark:bg-neutral-900/70 backdrop-blur">
              No products match your filters. Try resetting filters or searching
              a different term.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
