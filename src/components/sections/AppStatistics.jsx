import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { appStats, appStatsImgs } from "../../utils/constants";

export default function AppStatistics() {
  return (
    <section className="bg-primary500 -mt-[1px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-24 pt-12 sm:pt-16 pb-20 sm:pb-32 flex flex-col gap-y-12 sm:gap-y-28">
        {/* Heading */}
        <div className="text-center sm:text-left">
          <h2 className="bg-gradient-to-t from-accent500 to-accent200 bg-clip-text text-transparent font-bold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-tight sm:leading-[5.6rem]">
            Get direct
          </h2>
          <h2 className="text-white font-bold text-3xl sm:text-5xl lg:text-7xl tracking-tight leading-tight sm:leading-[5rem]">
            knowledge and insights.
          </h2>
        </div>

        {/* Images Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {appStatsImgs.map((img) => (
            <li
              key={img.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ minHeight: "280px" }}
            >
              {/* Overlay text on hover */}
              <p className="absolute inset-0 bg-primary800 bg-opacity-40 px-4 py-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base">
                {img.description}
              </p>

              <img
                src={img.image}
                alt={img.name || "Insight image"}
                className="w-full h-72 sm:h-80 lg:h-72 object-cover rounded-xl"
              />

              <p className="absolute bottom-4 left-4 rounded bg-white bg-opacity-20 px-2 py-1 text-white backdrop-blur-sm text-sm sm:text-base group-hover:opacity-0 transition-opacity duration-300">
                {img.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Stats and CTA container */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 lg:gap-0">
          {/* Stats */}
          <ul className="flex flex-col sm:flex-row gap-10 lg:gap-24 items-center lg:items-end">
            {appStats.map((stat) => (
              <li key={stat.id} className="text-center sm:text-left">
                <p className="text-accent500 font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white text-sm sm:text-lg lg:text-2xl mt-1 sm:mt-2">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>

{/* CTA */}
<div className="flex items-center gap-4 text-white text-lg sm:text-2xl lg:text-[2rem] leading-snug">
  {/* Mobile text */}
  <p className="block lg:hidden text-center">
    Explore the marketplace
  </p>

  {/* Desktop text */}
  <p className="hidden lg:block text-left">
    <span className="block">Explore the</span>
    <span className="block">marketplace</span>
  </p>

  <button
    aria-label="Explore marketplace"
    className="group flex justify-center items-center bg-gradient-to-t from-accent500 to-accent200 rounded-full w-12 h-12 sm:w-16 sm:h-16 transition-colors duration-200"
  >
    <RxCaretRight className="w-6 h-6 sm:w-12 sm:h-12 text-primary500 group-hover:text-white" />
  </button>
</div>

        </div>
      </div>
    </section>
  );
}
