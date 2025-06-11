import { CiCircleCheck } from "react-icons/ci";
import React from "react";

export default function PricingCard({ card, paymentPlan }) {
  const pclass = {
    container: card.primary ? "pb-14" : "pb-12 my-2",
    bulletColor: card.primary ? "stroke-accent500" : "stroke-white",
    cta: card.primary
      ? "bg-gradient-to-t from-accent500 to-accent200"
      : "bg-white",
    ctawrapper: card.primary
      ? "bg-gradient-to-b from-accent500 to-accent200 p-[.125rem] rounded-2xl drop-shadow-[0_0px_35px_rgba(255,184,76,0.20)] hover:drop-shadow-[0_0px_35px_rgba(255,184,76,0.35)]"
      : "",
  };

  const paymentPlanText =
    card.price[paymentPlan] === "Free"
      ? ""
      : paymentPlan === "monthly"
      ? "Per month"
      : "Per year";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-primary500 p-8 ${pclass.container}`}
    >
      {card.primary && (
        <>
          <div className="absolute top-0 right-0 bg-gradient-to-b from-accent500 to-accent200 py-[.125rem] rounded-bl-2xl rounded-tr-2xl z-10">
            <p className="bg-accent500 bg-gradient-to-t to-accent200 px-4 py-2 rounded-tr-xl rounded-bl-2xl text-xs text-white">
              most popular
            </p>
          </div>
          <div className="absolute left-[-20%] h-28 w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />
          <div className="absolute left-[30%] top-[30%] h-28 w-[30rem] -rotate-45 rounded-[50%] bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl" />
        </>
      )}

      <p className="opacity-80 mb-12 px-6 py-2 border rounded-2xl max-w-min text-sm text-white">
        {card.program}
      </p>

      <div className="flex items-end gap-x-2 mb-2">
        <p className="font-bold text-[3.5rem]/[4rem] text-white tracking-tight">
          {card.price[paymentPlan]}
        </p>
        <span className="opacity-50 mb-2 text-white tracking-tight">
          {paymentPlanText}
        </span>
      </div>

      <p className="text-white">{card.subheading}</p>

      <ul className="flex flex-col gap-y-4 my-10">
        {card.bullets.map((bullet, i) => (
          <li key={i} className="flex items-center gap-x-2">
            <CiCircleCheck
              className={`h-6 w-6 stroke-1 text-white ${pclass.bulletColor}`}
            />
            <p className="text-white">{bullet}</p>
          </li>
        ))}
      </ul>

      <div className={pclass.ctawrapper}>
        <button
          className={`w-full rounded-2xl py-4 text-primary500 transition-all duration-200 hover:bg-accent500 hover:text-white ${pclass.cta}`}
        >
          {card.cta}
        </button>
      </div>
    </div>
  );
}
