/* ── FooterSection.js ─────────────────────────────────────────── */
import React from "react";
const FooterSection = () => (
  <footer className="bg-[#0d131f] text-white py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-20">
      {/* Logo */}
      <div className="mb-12 md:mb-0">
        <div className="bg-[#d7d7d7] w-[120px] h-[44px] flex items-center justify-center">
          <span className="font-extrabold text-xl tracking-wide text-[#121212]">LOGO</span>
        </div>
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-14 gap-x-14 flex-1">
        {Array.from({ length: 4 }).map((_, col) => (
          <div key={col}>
            <h5 className="font-semibold mb-6">Lorem Ipsum</h5>
            <ul className="space-y-4 text-[15px] text-[#d4d7dc]">
              {Array.from({ length: 5 }).map((_, row) => (
                <li key={row}>Lorem Ipsum</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
export default FooterSection;