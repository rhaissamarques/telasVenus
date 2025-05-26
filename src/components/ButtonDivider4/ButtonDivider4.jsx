/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ButtonDivider4 = ({ color = "black", className }) => {
  return (
    <svg
      className={`button-divider-4 ${className}`}
      fill="none"
      height="10"
      viewBox="0 0 6 10"
      width="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1 1L5 5L1 9"
        stroke={color}
        strokeOpacity="0.2"
      />
    </svg>
  );
};
