'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  
  return (
    <section className="relative w-full min-h-screen text-white">
      {/* Layer 1: Background image with 50% opacity */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Banner2.jpg"
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
          <h1 className="text-3xl sm:text-4xl md:text-5l font-bold leading-tight max-w-5xl">
            DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
            </h1>

        </div>
      </div>
    </section>
  );
}
