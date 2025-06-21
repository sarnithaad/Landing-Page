'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setMessage({ type: 'success', text: 'Submitted!' });
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email' });
    }
  };

  

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md flex items-center gap-2"
            >
              Submit <ArrowRight size={18} />
            </button>
          </div>

          {message && (
            <p className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message.text}
            </p>
          )}

          <div className="flex items-center gap-4 mt-4">
            <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              ✓
            </span>
            <span className="text-sm text-gray-600">No credit card required!</span>

            
          </div>
        </div>

        {/* Right Image (Desktop & Mobile) */}
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 w-10 bg-white -skew-x-[20deg] z-10"></div>
          <img
            src="/images/hero.jpg"
            alt="motorcycle"
            className="w-full h-full object-cover rounded-md shadow-xl"
          />
        </div>

        <div className="md:hidden w-full mt-10">
          <img
            src="/images/hero.jpg"
            alt="motorcycle"
            className="w-full h-auto object-cover rounded-md shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
