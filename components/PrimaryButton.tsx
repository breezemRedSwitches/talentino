'use client';

import React from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<ButtonProps> = ({ bgColor, textColor, hoverColor, children }) => {
  return (
    <button
      className={`py-3 px-6 rounded-full font-medium transition-all duration-300`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: 'opacity 0.3s',
      }}
      onMouseEnter={(e) => (hoverColor ? (e.currentTarget.style.backgroundColor = hoverColor) : null)}
      onMouseLeave={(e) => (hoverColor ? (e.currentTarget.style.backgroundColor = bgColor) : null)}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
