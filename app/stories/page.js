'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoryCard from '../../components/StoryCard';
import stories from '../../data/stories.json';
import { motion } from 'framer-motion';

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Inspiration & Stories</h1>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
