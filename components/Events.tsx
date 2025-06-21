'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    image: '/images/architecture.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    content: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    alt: 'Colorful historic buildings architecture',
  },
  {
    id: 2,
    image: '/images/meditation.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    alt: 'Person in white clothing meditating',
  },
  {
    id: 3,
    image: '/images/traditional.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    alt: 'Person in traditional dress against blue sky',
  },
  {
    id: 4,
    image: '/images/oranges.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur.',
        content: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
description:
      'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisl. Nunc molestes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    alt: 'Fresh oranges on tree with green leaves',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.6 },
  },
};

export default function LandingPage() {
  // Track which card is expanded
  const [openCard, setOpenCard] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#"
            tabIndex={-1}
            className="text-[#1959AC] md:text-[28px] hover:text-[#0546D2] text-sm font-semibold mb-4 inline-block font-inter tracking-[-0.02em] transition-colors duration-300"
          >
            Lorem ipsum dolor sit amet
          </a>
       <h1 className="text-left text-[42px] md:text-5l font-bold text-[#222222] mb-6 uppercase font-roboto-condensed tracking-[-0.02em] leading-tight">
  LOREM IPSUM DOLOR SIT
</h1>
<p className="text-left text-[#222222] max-w-2xl text-base leading-relaxed font-inter">
  Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mauris maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
</p>

        </motion.div>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="bg-white shadow-sm hover:shadow-md transition-all duration-300 group rounded-2xl"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#222222] mb-3 font-inter tracking-[-0.02em] leading-tight">
                  {card.title}
                </h3>
                <p className="text-[20px] md:text-[20px] text-[#222222] mb-3 font-inter tracking-[-0.02em] leading-tight">
                  {card.content}
                </p>
                {/* Learn More Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(card.id)}
                  aria-expanded={openCard === card.id}
                  aria-controls={`desc-${card.id}`}
                  className="flex items-center text-[#1959AC] hover:text-[#0546D2] font-semibold text-sm transition-colors duration-300 font-inter tracking-[-0.02em] mb-2 focus:outline-none"
                >
                  Learn More
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${openCard === card.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {/* Collapsible Description */}
                <AnimatePresence initial={false}>
                  {openCard === card.id && (
                    <motion.p
                      id={`desc-${card.id}`}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#222222] text-sm md:text-base leading-relaxed font-inter overflow-hidden"
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
