"use client";

import type { ProfileButtonProps } from "./ProfileButtonModel";

export default function ProfileButtonView({ isOpen, onClick }: ProfileButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open profile menu"
      aria-expanded={isOpen}
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-200 text-white shadow-md shadow-blue-600/20 transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/25 sm:h-11 sm:w-11"
      style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="8" r="4" />
      </svg>
    </button>
  );
}
