'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVar = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function StoryCard({ story }) {
  return (
    <motion.article
      variants={cardVar}
      className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
    >
      <Link href={`/stories/${story.id}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          <Link href={`/stories/${story.id}`} className="hover:underline">
            {story.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {story.excerpt}
        </p>
        <div className="mt-3 text-xs text-neutral-500">
          By {story.author} • {new Date(story.date).toLocaleDateString()}
        </div>
      </div>
    </motion.article>
  );
}
