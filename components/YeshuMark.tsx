import React from "react";

interface YeshuMarkProps {
  className?: string;
}

export function YeshuMark({ className = "h-5 w-6" }: YeshuMarkProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 12L44 26L57 49V88L46 53L6 12Z"
        fill="currentColor"
      />
      <path
        d="M114 12L76 26L63 49V88L74 53L114 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

