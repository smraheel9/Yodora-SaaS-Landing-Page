import React from 'react';

export default function Header({ children }) {
  return (
    <header
      className="m-auto px-6 sm:px-12 md:px-24 pt-8 max-w-[90rem]"
      role="banner"
    >
      {children}
    </header>
  );
}
