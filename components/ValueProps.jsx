'use client';
import { motion } from 'framer-motion';
import { Truck, ArrowCounterClockwise, ShieldCheck, CreditCard } from 'phosphor-react';

const perks = [
  { icon: Truck, title: 'Free Delivery', desc: 'On orders over $200' },
  { icon: ArrowCounterClockwise, title: '30-Day Returns', desc: 'No questions asked' },
  { icon: ShieldCheck, title: 'Quality Materials', desc: 'Built to last' },
  { icon: CreditCard, title: 'Secure Payments', desc: 'Encrypted & safe' }
];

export default function ValueProps() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {perks.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 flex items-start gap-3"
          >
            <div className="rounded-xl p-2 border border-neutral-200 dark:border-neutral-800">
              <Icon size={22}/>
            </div>
            <div>
              <div className="font-medium">{title}</div>
              <div className="text-sm text-neutral-500">{desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
