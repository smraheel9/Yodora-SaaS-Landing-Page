import { useState } from "react";
import Toggle from "../../UI/Toggle";
import PricingCard from "./PricingCard";
import { pricingCards } from "../../../utils/constants";
import React from "react";

export default function Pricing() {
  const [paymentPlan, setPaymentPlan] = useState("monthly");

  function handlePaymentPlanChange() {
    setPaymentPlan((plan) => (plan === "monthly" ? "annual" : "monthly"));
  }

  return (
    <section className="m-auto max-w-[90rem] px-6 sm:px-8 md:px-16 lg:px-24 py-8">
      <div className="flex flex-col items-center">
        <h2 className="mb-6 text-[2.5rem] sm:text-[2rem] text-center font-bold tracking-tight text-primary500">
          Start creating today<span className="text-accent500">.</span>
        </h2>
        <div className="flex items-center gap-x-4">
          <p className="text-lg tracking-tight text-primary500">Monthly</p>
          <Toggle
            handleToggle={handlePaymentPlanChange}
            toggleLable="Toggle between monthly and annual plans"
          />
          <p className="text-lg tracking-tight text-primary500">Annual</p>
        </div>

        <ul className="my-10 grid w-full gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingCards.map((card) => (
            <PricingCard
              card={card}
              key={card.program}
              paymentPlan={paymentPlan}
              showDollar={card.program.toLowerCase() !== "free"} // ✅ Only show $ for non-free plans
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
