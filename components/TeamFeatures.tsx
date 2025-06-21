// components/TeamFeatures.tsx
'use client';

import Image from 'next/image';

export default function TeamFeatures() {
  return (
    <section className="w-full px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 items-center bg-white">
      {/* Left Section */}
      <div className="space-y-6">
        <h3 className="text-blue-600 font-semibold text-lg">
          Lorem ipsum dolor sit amet
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU <br /> ELIT.
        </h2>
        <p className="text-gray-700 text-base max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
          condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
          pharetra erat lacus suspendisse ornare.
        </p>

        {/* Feature List */}
        <ul className="space-y-6 mt-6">
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <Image
                src="/images/red.jpg"
                alt="icon"
                width={40}
                height={40}
                className="mt-1"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                  viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                  vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut
                  tortor.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
          <Image
            src="/images/team.jpg"
            alt="Team"
            width={700}
            height={600}
            className="rounded-md"
          />
      </div>
    </section>
  );
}
