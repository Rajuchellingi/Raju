import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 200 30"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Reinvent Logo"
  >
    <text
      x="0"
      y="22"
      fontFamily="'Poppins', sans-serif"
      fontSize="24"
      fontWeight="bold"
      letterSpacing="0.1em"
      fill="currentColor"
    >
      REINVENT
    </text>
  </svg>
);

export default Logo;
