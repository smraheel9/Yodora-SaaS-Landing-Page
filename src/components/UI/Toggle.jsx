import React from "react";

export default function Toggle({ handleToggle, toggleLabel, checked }) {
  return (
    <label
      className="relative block h-10 w-20 rounded-xl bg-primary800 hover:cursor-pointer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent500"
      role="switch"
      aria-checked={checked}
    >
      <input
        type="checkbox"
        className="peer absolute h-0 w-0 opacity-0"
        onChange={handleToggle}
        aria-label={toggleLabel}
        checked={checked}
      />
      <span
        className="
          before:absolute before:left-1 before:top-1 before:h-8 before:w-[36px] before:rounded-[9px] 
          before:bg-white before:transition-all before:duration-300
          peer-checked:before:translate-x-[36px]

          block w-full h-full rounded-xl
          bg-primary700 transition-colors duration-300
          peer-checked:bg-accent500
        "
      />
    </label>
  );
}
