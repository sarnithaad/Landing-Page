'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage({ type: 'success', text: 'Submitted successfully!' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
  };

  return (
    <section className="relative w-full min-h-screen text-white">
      {/* Layer 1: Background image with 50% opacity */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Banner1-Image.jpg"
          alt="Background"
          fill
          sizes="100vw"
          priority
        />
      </div>

      {/* Layer 2: Foreground content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-12 h-full flex flex-col">
        {/* Logo */}
        <div className="bg-white text-black px-6 py-3 rounded-md w-fit mb-10 mt-4">
          <span className="text-2xl font-bold">LOGO</span>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </h1>

          <p className="text-white text-base md:text-lg max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet.
            Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu 
            vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
          </p>

          <p className="text-white text-base md:text-lg max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in 
            tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus 
            quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
          </p>

          {/* CTA Button */}
          <Link href="/newletter">
          <button className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-4 text-lg font-semibold rounded shadow">
            Sign in to NewsLetter
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
