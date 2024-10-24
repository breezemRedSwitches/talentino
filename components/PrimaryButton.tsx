'use client'; // This ensures it's treated as a Client Component

import React from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const PrimaryButton = (props: ButtonProps) => {
  const { bgColor, textColor, hoverColor, children } = props;

  return (
    <button
      className="py-3 px-6 rounded-full font-medium transition-all duration-300"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: '10px 40px 10px 10px',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => {
        if (hoverColor) {
          e.currentTarget.style.backgroundColor = hoverColor;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverColor) {
          e.currentTarget.style.backgroundColor = bgColor;
        }
      }}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
