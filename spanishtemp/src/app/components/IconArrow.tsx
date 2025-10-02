"use client";

import React from "react";

type IconProps = {
  className?: string;
  size?: string | number; // accepts '1em' or numeric px
  stroke?: string;
  strokeWidth?: number;
};

export default function IconArrow({
  className = "",
  size = "1em",
  stroke = "white",
  strokeWidth = 2,
}: IconProps) {
  const strokeW = strokeWidth;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      // Slight downward nudge so the arrow visually aligns with the text baseline
      style={{
        verticalAlign: "baseline",
        display: "inline-block",
        transform: "translateY(0.12em)",
      }}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
