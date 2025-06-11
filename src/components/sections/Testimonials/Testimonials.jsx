import React from 'react';
import { testimonials } from '../../../utils/constants';
import Testimonial from './Testimonial';

export default function Testimonials() {
  return (
    <section
      className="m-auto max-w-[90rem]"
      aria-label="Client testimonials"
    >
      <h2 className="px-6 sm:px-12 md:px-24 pb-12 sm:pb-16 text-3xl sm:text-[3.5rem]/[4rem] font-bold tracking-tight text-primary500">
        Listen to what our{' '}
        <span className="underline decoration-accent500 decoration-8 underline-offset-2">
          satisfied
        </span>
        <br className="block" />
        clients have to say
      </h2>

      <div className="relative px-4 sm:px-8">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-64 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-64 bg-gradient-to-l from-white to-transparent" />

        {/* Fast track */}
        <div className="mb-6 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((t, i) => (
              <Testimonial
                key={t.name + t.title + 'fast' + i}
                testimonial={t}
              />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((t, i) => (
              <Testimonial
                key={t.name + t.title + 'fast-copy' + i}
                testimonial={t}
              />
            ))}
          </div>
        </div>

        {/* Slower track */}
        <div className="mb-6 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((t, i) => (
              <Testimonial
                key={t.name + t.title + 'slow' + i}
                testimonial={t}
              />
            ))}
          </div>
          <div className="inline-block animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((t, i) => (
              <Testimonial
                key={t.name + t.title + 'slow-copy' + i}
                testimonial={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}