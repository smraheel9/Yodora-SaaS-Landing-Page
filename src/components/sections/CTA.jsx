import React from "react";

export default function CTA({ setcurrentModal }) {
  return (
    <section className="mx-auto max-w-[90rem] px-4 sm:px-8 py-10 sm:py-16 overflow-x-hidden">
      <div className="relative flex flex-col items-center bg-primary500 rounded-2xl px-6 py-12 sm:py-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1.5 w-1/4 bg-accent500 rounded-full" />
        <div className="absolute left-[5%] h-16 sm:h-24 w-[25rem] sm:w-[40rem] -rotate-45 rounded-full bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />
        <div className="absolute left-[30%] sm:left-[35%] h-16 sm:h-24 w-[20rem] sm:w-[30rem] -rotate-45 rounded-full bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />

        <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-center text-white tracking-tight leading-snug">
          Engage without limits
        </h3>

        <p className="mb-6 text-center text-sm sm:text-base text-white tracking-tight max-w-xl">
          Join a growing community and talk with your favorite creators
        </p>

        <button
          onClick={() => setcurrentModal("more-information")}
          className="bg-gradient-to-t from-accent500 to-accent200 shadow-lg rounded-2xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-[#1e1b24] hover:brightness-110 transition duration-200"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
