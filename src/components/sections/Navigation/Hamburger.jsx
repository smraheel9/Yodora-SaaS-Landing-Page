import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Hamburger({ onClick }) {
  // State to track the rotation of the hamburger icon
  const [isRotated, setIsRotated] = useState(false);
  
  // Ref to track the hamburger button element
  const buttonRef = useRef(null);

  // Handle hamburger icon rotation on click
  const handleClick = () => {
    setIsRotated((prev) => !prev); // Toggle the rotation state
    onClick(); // Call the onClick prop passed to Hamburger component
  };

  // Reset rotation if clicked outside of the button
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsRotated(false); // Reset rotation when clicking outside
      }
    };

    // Add event listener for clicks outside the button
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      aria-label="Toggle mobile menu"
      className="lg:hidden p-2 text-primary500 hover:text-accent500 focus:text-accent500 transition-transform duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent500 rounded hamburger-button"
      style={{
        transform: isRotated ? "rotate(12deg)" : "rotate(0deg)", // Apply rotation based on the state
      }}
    >
      <RxHamburgerMenu className="w-6 h-6 pointer-events-none" />
    </button>
  );
}
