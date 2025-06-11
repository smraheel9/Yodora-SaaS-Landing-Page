import React, { useState, useEffect, useRef } from "react";
import YadoraLogo from "../../../assets/logo.svg";
import { links } from "../../../utils/constants";
import Hamburger from "./Hamburger";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref for mobile menu

  // Toggle mobile menu state
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current && // Ensure the mobile menu exists
        !mobileMenuRef.current.contains(event.target) && // Clicked outside the menu
        !event.target.closest(".hamburger-button") // Clicked outside the hamburger button
      ) {
        setIsMobileMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="px-4 py-6 relative z-50">
      {/* Desktop Navigation */}
      <section className="hidden lg:flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo + Links */}
        <nav className="flex items-center">
          <a href="#" aria-label="Homepage">
            <img src={YadoraLogo} alt="Logo" className="xs300:h-5 xlMobile:h-7" />
          </a>
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-lg text-white hover:text-accent500 transition duration-150 tracking-tight"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#"
            className="text-lg text-primary500 hover:text-accent500 transition duration-150 tracking-tight"
          >
            Sign in
          </a>
          <button className="bg-primary500 px-6 py-3 rounded-2xl text-white hover:bg-accent500 transition duration-150 text-base tracking-tight">
            Get Started
          </button>
        </div>
      </section>

      {/* Mobile Top Bar */}
      <section className="flex justify-between items-center lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <a href="#" aria-label="Homepage">
          <img src={YadoraLogo} alt="Logo" className="h-5" />
        </a>
        <div style={{ marginLeft: "96px" }} /> {/* Spacer for 96px gap */}
        <Hamburger
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        />
      </section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          ref={mobileMenuRef} // Reference for the mobile menu
          id="mobile-menu"
          className="absolute top-20 left-0 w-full bg-white shadow-md rounded-b-xl px-6 py-5 flex flex-col gap-5 lg:hidden animate-slide-down"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-accent500 text-base text-primary500 border-b pb-2 tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)} // Close the menu when clicked
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="hover:text-accent500 text-base text-primary500 tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu when "Sign In" is clicked
          >
            Sign in
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(false)} // Close the menu when "Get Started" is clicked
            className="bg-primary500 py-3 rounded-xl text-white hover:bg-accent500 transition text-base tracking-tight"
          >
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
}
