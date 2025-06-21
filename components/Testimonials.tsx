// components/Testimonials.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M6 19a4 4 0 0 1 0-8 5 5 0 1 1 9.9 1.1A3.5 3.5 0 1 1 18 19H6z"/>
      </svg>
    ),
    text: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
    name: 'Jane Cooper',
    avatar: '/images/avatar1.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        <path d="M7 10l2 4 4-2"/>
      </svg>
    ),
    text: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
    name: 'Ralph Edwards',
    avatar: '/images/avatar2.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="10" width="14" height="9" rx="2"/>
        <path d="M8 10V7h2v3M14 10V7h2v3"/>
      </svg>
    ),
    text: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
    name: 'Courtney Henry',
    avatar: '/images/avatar3.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
    text: 'Hendrerit augue ut nisi, quis integer netus. Sed rhoncus magnis habitasse. Egestas amet habitant tellus ornare. Hendrerit senectus. Mauris egestas vitae praesent neque.',
    name: 'Cameron Williamson',
    avatar: '/images/avatar4.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20"/>
      </svg>
    ),
    text: 'Aenean euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec ullamcorper velit enim vitae justo.',
    name: 'Leslie Alexander',
    avatar: '/images/avatar5.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    text: 'Phasellus feugiat sapien vel urna tempor, sed dictum sapien varius. Etiam vitae magna euismod, dictum nulla at, pretium urna.',
    name: 'Jenny Wilson',
    avatar: '/images/avatar6.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 9h6v6H9z"/>
      </svg>
    ),
    text: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.',
    name: 'Marvin McKinney',
    avatar: '/images/avatar7.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#1976d2" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="12 2 2 22 22 22 12 2"/>
      </svg>
    ),
    text: 'Nulla facilisi. Etiam facilisis, sem in scelerisque sodales, mi lectus hendrerit nulla, eget facilisis enim leo at velit.',
    name: 'Eleanor Pena',
    avatar: '/images/avatar8.jpg',
  },
];

const VISIBLE_COUNT = 4;

const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.95,
    transition: { duration: 0.2 },
  }),
};

export default function Testimonials() {
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setStartIdx((prev) =>
      prev === 0 ? testimonials.length - VISIBLE_COUNT : prev - VISIBLE_COUNT
    );
  };

  const handleNext = () => {
    setDirection(1);
    setStartIdx((prev) =>
      prev + VISIBLE_COUNT >= testimonials.length ? 0 : prev + VISIBLE_COUNT
    );
  };

  // Get visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    visibleTestimonials.push(
      testimonials[(startIdx + i) % testimonials.length]
    );
  }

  return (
    <section className="relative px-6 py-16 bg-blue-600 text-white overflow-hidden">
      {/* Heading and Button */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Join other Sun harvesters</h2>
          <h1 className="text-4xl font-extrabold mb-4 uppercase">Lorem Ipsum Dolor Sit Amet</h1>
          <p className="text-base font-normal max-w-2xl">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>
        <button className="bg-white text-black font-semibold py-2 px-8 rounded shadow mt-2">
          Lorem Ipsum
        </button>
      </div>
      {/* Carousel */}
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-6xl flex gap-6">
          {visibleTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...({
                className: `
                  bg-white text-black rounded-lg p-6 shadow transition-transform duration-50
                  flex flex-col h-full min-w-[250px] max-w-[320px] w-full
                  hover:scale-105 hover:shadow-2xl
                  group
                `
              } as { className: string })}
              whileHover={{ scale: 1.08 }}
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="mb-4">{t.icon}</div>
              <p className="mb-6 text-base">{t.text}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-medium">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Arrows at bottom left */}
      <div className="absolute left-8 bottom-8 flex gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow hover:bg-blue-100"
          aria-label="Previous"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow hover:bg-blue-100"
          aria-label="Next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
