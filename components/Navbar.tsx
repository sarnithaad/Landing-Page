'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signin');
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="font-bold text-xl">LOGO</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="#">Lorem Ipsum</Link>
        <Link href="#">Lorem Ipsum</Link>
        <Link href="#">Lorem Ipsum</Link>
      </nav>

      {/* Sign In Button */}
      <button
        onClick={handleSignIn}
        className="text-blue-600 hover:underline text-sm ml-4"
      >
        Sign In
      </button>
    </header>
  );
}
