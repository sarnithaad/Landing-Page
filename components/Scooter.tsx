import React from "react";

const ScooterSection = () => {
  return (
    <section className="relative bg-[#f2f3f5] px-6 md:px-16 pt-16 pb-24">
      {/* MAIN CONTENT: Text + Image */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left - Text */}
        <div className="md:w-5/12">
          <h3 className="text-[28px] font-bold text-[#0c4e9b] leading-tight">
            LOREM IPSUM DOLOR SIT <br />
            AMET CONSECTETUR. <br />
            DIGNISSIM TELLUS.
          </h3>

          <p className="mt-4 text-[14px] text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet
            urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat
            mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero
            eget eu quisque bibendum platea. Tortor fames.
          </p>

          <button className="mt-5 bg-[#0c4e9b] hover:bg-[#0b4590] text-white text-sm font-semibold px-6 py-2 rounded">
            Loerum Ipsum →
          </button>
        </div>

        {/* Right - Image */}
        <div className="md:w-7/12 flex justify-end">
          <img
            src="/images/Scooter.jpg"
            alt="Scooter"
            className="w-[90%] md:w-[500px] rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* GREEN LINE behind card */}
      <div
        className="absolute left-0 w-full h-[10px] bg-gradient-to-r from-blue-900 via-green-600 to-indigo-900 z-10"
        style={{ top: 'calc(100% - 160px)' }} // ← moved up from 100px to 120px
      />

      {/* OVERLAPPING CARD */}
      <div className="relative z-20 mt- -10 max-w-xl bg-white rounded-md shadow-lg p-10">
        {/* Pushpin */}
        <img
          src="/images/pin.jpg"
          alt="Pin"
          className="absolute -top-3 right-4 w-5 h-5"
        />

        <h4 className="font-semibold text-sm text-gray-900">Lorem ipsum dolor sit</h4>
        <div className="mt-3 space-y-4 text-xs text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse
            semper.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae
            amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque
            scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScooterSection;
