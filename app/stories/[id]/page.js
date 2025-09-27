'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import stories from '../../../data/stories.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

export default function StoryDetail({ params }) {
  const story = stories.find((s) => s.id === params.id);

  if (!story) {
    return notFound();
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden"
        >
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              {story.title}
            </h1>
          </div>
        </motion.div>

        {/* Meta */}
        <div className="mt-6 text-sm text-neutral-500">
          By {story.author} • {new Date(story.date).toLocaleDateString()}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-neutral dark:prose-invert mt-6 max-w-none"
        >
          {story.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
