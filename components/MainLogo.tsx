import React from 'react';

export const MainLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Reinvent Uniforms Logo"
    fill="currentColor"
  >
    <path
      d="M21.33,50 V14 H36.4 C41.4,14 45.1,15.2 47.5,17.6 C49.9,20 51.1,23.5 51.1,28 C51.1,31.5 50.1,34.4 48.1,36.7 C46.1,39 43.3,40.2 39.7,40.4 L49.3,50 H41.3 L32.6,40 H27.33 V50 H21.33 Z M27.33,34 H35.4 C38.3,34 40.4,33.3 41.7,31.9 C43,30.5 43.6,29 43.6,27 C43.6,25 43,23.5 41.7,22.1 C40.4,20.7 38.3,20 35.4,20 H27.33 V34 Z"
    />
  </svg>
);

export default MainLogo;
