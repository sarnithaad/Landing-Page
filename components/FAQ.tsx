// components/FAQ.tsx
import { useState } from 'react';

const questions = [
  'Lorem ipsum dolor sit amet consectetur?',
  'How does the system work?',
  'What payment methods are accepted?',
  'Can I track my request?',
  'Is support available 24/7?',
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold font-heading mb-8">Frequently Asked Questions (FAQs)</h2>
      <div className="divide-y">
        {questions.map((q, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-4 font-semibold flex justify-between items-center"
            >
              {q}
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p className="pb-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}