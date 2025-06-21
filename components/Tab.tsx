// TabContent.js
import React, { useState } from "react";

const TabContent = () => {
  const [active, setActive] = useState("Research");

  const tabs = ["Research", "Plan", "Design"];

  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-white">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-800">LOREM IPSUM DOLOR SIT AMET</h1>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`py-2 px-4 border rounded $`}
            >
              {tab}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600">
Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.        </p>
        <a href="#" className="text-blue-600 text-sm font-medium">
          Check tools →
        </a>
      </div>
      <img
        src="/images/Handshake.jpg"
        alt="Handshake"
        className="md:w-0.9/2 mt-6 md:mt-0 shadow-lg"
      />
    </div>
  );
};

export default TabContent;
