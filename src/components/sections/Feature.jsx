import React from 'react';
import { features } from '../../utils/constants';

export default function Feature() {
  return (
    <section className="px-4 sm:px-8 lg:px-24 pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-y-20 lg:gap-x-24">
        
        {/* Left: Text Section */}
        <div className="w-full text-center lg:text-left">
          <h3 className="text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.2] font-bold tracking-tight text-primary500 mb-6">
            Become a creator?
          </h3>
          <p className="text-base sm:text-lg text-primary500 tracking-tight mb-10 max-w-md mx-auto lg:mx-0">
            Engage with your supporters and subscribers to sell your skills, knowledge, and passions.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-primary500 hover:bg-accent500 transition-all text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl text-base sm:text-lg font-medium">
              Become a creator
            </button>
          </div>
        </div>

        {/* Right: Feature Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-12 sm:gap-y-16 place-items-center">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="text-center max-w-xs flex flex-col items-center"
            >
              <img
                src={feature.icon}
                alt={feature.name || 'Feature icon'}
                className="mb-6 h-14 w-14 object-contain"
              />
              <h4 className="text-xl sm:text-2xl font-semibold text-primary500 leading-snug mb-2">
                {feature.name}
              </h4>
              <p className="text-sm sm:text-base text-primary500 tracking-tight leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
