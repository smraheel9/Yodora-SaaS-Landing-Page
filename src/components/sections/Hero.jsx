import React from 'react';
import { reviewImgs } from '../../utils/constants';

export default function Hero() {
  return (
    <section className="px-4 sm:px-8 md:px-16 pt-16 pb-[32px] max-w-[90rem] mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-full lg:max-w-[55%]">
          <h1 className="text-[30px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[64px] lg:leading-[72px] font-bold tracking-tight text-primary500">
            Learn from your favorite creators about{' '}
            <span className="bg-gradient-to-t from-accent500 to-accent200 bg-clip-text text-transparent">
              fantasy reports
            </span>
          </h1>

          {/* Avatar Section */}
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <ul className="flex -space-x-4">
              {reviewImgs.map((headShot) => (
                <li key={headShot.id}>
                  <img
                    src={headShot.image}
                    alt={headShot.name || 'Reviewer'}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white object-cover"
                  />
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base font-medium text-primary500">
              <span className="font-bold text-accent500">5000+</span> satisfied clients in 2024
            </p>
          </div>
        </div>

        {/* Right Circle – Hidden on mobile */}
        <figure className="hidden lg:flex">
          <div className="rounded-full flex h-52 w-52 items-center justify-center outline outline-1 outline-primary500">
            <div className="flex flex-col h-44 w-44 items-center justify-center rounded-full bg-primary500">
              <p className="text-4xl font-bold text-white mb-4">1:1</p> {/* 16px gap */}
              <p className="text-lg font-bold text-white">Video calls</p>
            </div>
          </div>
          <figcaption className="sr-only">One-on-one video calls with creators</figcaption>
        </figure>
      </div>
    </section>
  );
}
