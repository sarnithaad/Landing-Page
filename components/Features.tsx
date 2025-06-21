'use client';

import { useRouter } from 'next/navigation';
import { PhoneCall } from 'lucide-react';

export default function Features() {
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push('/contact');
  };

  return (
    <section id="features" className="px-4 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Section */}
      <div>
        <p className="text-sm text-blue-700 font-medium mb-2">Lorem ipsum dolor sit</p>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h2>
        <p className="text-gray-800 mb-6 max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. 
          Mi porttitor ut aliquam mattis maecenas eget integer in nam. 
          Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <img src="/images/user1.jpg" alt="feature 1" className="w-[70px] h-[70px] object-cover rounded" />
            <p>Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
          </li>
          <li className="flex items-start gap-4">
            <img src="/images/user2.jpg" alt="feature 2" className="w-[70px] h-[70px] object-cover rounded" />
            <p>Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.</p>
          </li>
          <li className="flex items-start gap-4">
            <img src="/images/user3.jpg" alt="feature 3" className="w-[70px] h-[70px] object-cover rounded" />
            <p>Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.</p>
          </li>
        </ul>

        {/* Button + Phone */}
        <div className="mt-6 flex items-center gap-6">
          <button
            onClick={handleNavigateToContact}
            className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-blue-800 transition"
          >
            Contact Us
          </button>
          <div className="flex items-center gap-2 text-blue-800 font-semibold">
            <PhoneCall size={18} />
            <span>123456789</span>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div>
        <img
          src="/images/bikes.jpg"
          alt="bikes"
          className="w-full h-auto object-cover rounded-xl shadow-lg border border-blue-500"
        />
      </div>
    </section>
  );
}
