import React, { useState } from "react";

// Sample data for each testimonial
const cards = [
  {
    title: "Artist & Investor",
    body:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. " +
      "Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est.",
    more:
      " Aenean mattis nulla at posuere porta. Suspendisse in magna at erat pulvinar tincidunt. Vivamus pulvinar fermentum justo non convallis."
  },
  {
    title: "Startup Founder",
    body:
      "Faucibus vitae viverra morbi. Platea dictumst rutrum habitant. Quam fermentum nunc, " +
      "interdum nec porta magna sed, convallis pretium.",
    more:
      " Cras dapibus mauris sed neque luctus, non porta nisi sollicitudin. Sed a metus non lorem tristique sagittis."
  },
  {
    title: "UX Designer",
    body:
      "Arcu sed erat felis turpis. Integer posuere volutpat turpis, nec interdum leo aliquam " +
      "quis. In in ipsum non lorem rhoncus ullamcorper.",
    more:
      " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam nec sapien sit amet libero congue sollicitudin."
  },
  {
    title: "Nature Photographer",
    body:
      "Id consectetur velit feugiat. Suspendisse potenti dapibus tristique dui quis fermentum. " +
      "Sed in orci mauris, pulvinar a est.",
    more:
      " Ut vel ligula sit amet augue gravida porta. Pellentesque ac nisl at magna blandit cursus vel id metus."
  }
];

const Testimonial = () => {
  const [active, setActive] = useState(0);              // current card index
  const [expanded, setExpanded] = useState(false);      // show full content

  const current = cards[active];

  const handleReadMore = () => {
    setExpanded(true);
  };

  return (
    <div className="bg-white py-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0e1629] uppercase">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="mt-4 text-sm text-gray-700">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare
          faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est
          nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit
          et fringilla habitant ut facilisi.
        </p>
      </div>

      {/* Image and Card */}
      <div className="relative flex justify-left mt-10">
        <img
          src="/images/Bikers.jpg"
          alt="Bikers"
          className="w-[900px] max-w-full rounded-md select-none"
        />

        <div
          key={active}
          className="absolute right-40 bottom-[120px] w-[520px] bg-white rounded shadow-lg px-6 py-10 z-10"
        >
          <h4 className="text-lg font-bold text-[#27364a]">{current.title}</h4>

          <p className={`text-sm text-gray-700 mt-2 leading-relaxed ${expanded ? "" : "line-clamp-2"}`}>
            {current.body}
          </p>

          {/* Additional content shown when expanded */}
          {expanded && (
            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              {current.more}
            </p>
          )}

          {/* Show read more only if not expanded */}
          {!expanded && (
            <button
              onClick={handleReadMore}
              className="text-sm font-semibold text-blue-600 mt-3 inline-flex items-center gap-1"
            >
              Read Full Story <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-16 space-x-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setExpanded(false); // reset expansion when switching
            }}
            aria-label={`Show slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === active ? "w-4 h-2 bg-blue-600" : "w-2 h-2 bg-blue-200 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
