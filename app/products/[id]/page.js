import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import data from '../../../data/products.json';
import Image from 'next/image';
import Link from 'next/link';
import { AddToCartButton } from './parts';

export async function generateStaticParams() {
  return data.map(p => ({ id: p.id }));
}

export default function ProductDetail({ params }) {
  const product = data.find(p => p.id === params.id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm text-neutral-500">Product not found.</p>
          <Link href="/products" className="underline mt-3 inline-block">Back to products</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header/>
      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <Image src={product.image} alt={product.title} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{product.title}</h1>
            <div className="mt-2 text-sm text-neutral-500">{product.category} • {product.rating}★</div>
            <div className="mt-4 text-2xl font-semibold">${product.price}</div>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{product.description}</p>

            <div className="mt-6 flex gap-3">
              <AddToCartButton product={product}/>
              <Link href="/products" className="px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
                Continue browsing
              </Link>
            </div>

            <div className="mt-10">
              <h2 className="font-medium mb-3">Details</h2>
              <ul className="list-disc ml-5 text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                <li>Ships in 3–5 business days</li>
                <li>30-day returns</li>
                <li>Matte protective finish</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
