'use client';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/slices/cartSlice';

export function AddToCartButton({ product }) {
  const d = useDispatch();
  return (
    <button
      onClick={()=>d(addToCart(product))}
      className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:opacity-90 transition"
    >
      Add to cart
    </button>
  );
}
