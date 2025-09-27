export const categories = ["All", "Living", "Bedroom", "Dining", "Decor"];

export function applyFilters(items, { q, category, min, max, rating }) {
  const qLower = (q || "").toLowerCase();
  const catLower = (category || "All").toLowerCase();

  return items.filter((p) => {
    const pCat = (p.category || "").toLowerCase();
    const pTitle = (p.title || "").toLowerCase();

    const matchesQ =
      !qLower || pTitle.includes(qLower) || pCat.includes(qLower);
    const matchesCat = catLower === "all" || pCat === catLower;
    const matchesMin = min === "" || p.price >= Number(min);
    const matchesMax = max === "" || p.price <= Number(max);
    const matchesRating = rating === "" || p.rating >= Number(rating);

    return matchesQ && matchesCat && matchesMin && matchesMax && matchesRating;
  });
}
