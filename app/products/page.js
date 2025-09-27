"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductFilters from "../../components/ProductFilters";
import ProductsGrid from "../../components/ProductsGrid";
import data from "../../data/products.json";
import { useMemo, useState, useEffect } from "react";
import { applyFilters } from "../../lib/filters";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    q: "",
    category: "All",
    min: "",
    max: "",
    rating: "",
  });

  // ✅ Update filters whenever searchParams change
  useEffect(() => {
    setFilters({
      q: searchParams.get("q") || "",
      category: searchParams.get("category") || "All",
      min: searchParams.get("min") || "",
      max: searchParams.get("max") || "",
      rating: searchParams.get("rating") || "",
    });
  }, [searchParams]);

  // ✅ Depend on both filters and searchParams
  const list = useMemo(
    () => applyFilters(data, filters),
    [filters, searchParams]
  );

  return (
    <>
      <Header />
      <main className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-2xl md:text-3xl font-semibold pt-6 pb-2">
            All products
          </h1>
          <p className="text-sm text-neutral-500 mb-2">
            Showing {list.length} {list.length === 1 ? "item" : "items"}
          </p>
        </div>

        <ProductFilters value={filters} onChange={setFilters} />

        <div className="mx-auto max-w-7xl px-4 pt-6">
          {list.length ? (
            <ProductsGrid products={list} />
          ) : (
            <div className="text-sm text-neutral-500 border rounded-xl p-6">
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
