import React from "react";
import Link from "next/link";

const HeroSection = () => (
  <section className="bg-white py-28 flex flex-col items-center text-center">
    <div className="bg-[#d7d7d7] w-[120px] h-[44px] flex items-center justify-center mb-8">
      <span className="font-bold text-xl tracking-wide text-[#121212]">LOGO</span>
    </div>

    <h1 className="max-w-3xl text-[28px] md:text-[34px] lg:text-[40px] leading-tight font-extrabold uppercase text-[#0e1629]">
      lorem ipsum dolor sit amet consectetur. dui.
    </h1>

    <p className="max-w-md mt-6 text-sm md:text-[15px] text-[#444]">
      Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra
      tempor quis arcu. Ipsum nullam.
    </p>
    <Link href="/queryForm">
    <button
      type="button"
      className="
        mt-8 inline-flex items-center gap-2
        bg-[#0b5ed7] hover:bg-[#084db6] text-white text-[13px] font-semibold
        px-6 py-2 rounded shadow-md transition
      "
    >
      Submit you Query
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </button>
    </Link>
  </section>
);
export default HeroSection;