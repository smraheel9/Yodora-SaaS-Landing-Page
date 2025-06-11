import React from 'react';
import { TfiQuoteLeft } from 'react-icons/tfi';

export default function Testimonial({ testimonial }) {
  return (
    <figure className="inline-block w-80 sm:w-96 rounded-xl bg-white-shade px-6 sm:px-8 py-8 mx-2 sm:mx-4">
      <blockquote className="text-wrap">
        <div className="mb-2 flex items-start justify-between">
          <TfiQuoteLeft className="h-12 w-12 sm:h-14 sm:w-14 text-primary500 stroke-[.04rem]" />
          <p className="rounded-md bg-gradient-to-t from-accent500 to-accent200 px-3 py-1 text-xs sm:text-sm font-medium tracking-tight text-primary500">
            {testimonial.program}
          </p>
        </div>

        <p className="mb-6 sm:mb-8 font-medium tracking-tight text-primary500 text-sm sm:text-base">
          {testimonial.description}
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-x-4">
        <img
          src={testimonial.image}
          alt={testimonial.name || 'Testimonial author'}
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full"
        />
        <div>
          <cite className="not-italic font-semibold tracking-tight">
            {testimonial.name}
          </cite>
          <p className="text-xs sm:text-sm text-primary50">{testimonial.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}