'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQty, clearCart } from '../../lib/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const total = items.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-sm text-neutral-500">
            Your cart is empty.{' '}
            <Link href="/products" className="underline">
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 border rounded-xl p-4"
                  >
                    {/* Product Image */}
                    <div className="relative w-24 h-20 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-neutral-500">{item.category}</p>

                      {/* Quantity Controls */}
                      <div className="mt-2 flex items-center gap-3">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            dispatch(
                              updateQty({ id: item.id, qty: item.qty - 1 })
                            )
                          }
                          className="px-2 py-1 border rounded-lg"
                        >
                          -
                        </motion.button>
                        <span>{item.qty}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            dispatch(
                              updateQty({ id: item.id, qty: item.qty + 1 })
                            )
                          }
                          className="px-2 py-1 border rounded-lg"
                        >
                          +
                        </motion.button>

                        {/* Remove Button */}
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="ml-4 text-red-500 text-sm underline"
                        >
                          Remove
                        </motion.button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="font-semibold">
                      ${item.price * item.qty}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Cart Total */}
            <div className="mt-6 border-t pt-6 flex justify-between items-center">
              <motion.div
                key={total}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold"
              >
                Total: ${total.toFixed(2)}
              </motion.div>

              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(clearCart())}
                  className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700"
                >
                  Clear cart
                </motion.button>
                <Link
                  href="/checkout"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white hover:opacity-90 transition"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
