"use client";

import type { StarRatingProps } from "./StarRatingModel";
import { getRatingLabel, useStarRating } from "./StarRatingController";

export default function StarRatingView({
  label = "Your Rating",
  subtitle,
  value,
  onChange,
  maxStars = 5,
  error,
}: StarRatingProps) {
  const { stars, hoveredStar, handleMouseEnter, handleMouseLeave } = useStarRating(maxStars);
  const displayRating = hoveredStar || value;
  const ratingLabel = getRatingLabel(displayRating);

  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border p-3.5 transition-colors ${
        error
          ? "border-red-200 bg-red-50/40"
          : value > 0
            ? "border-amber-200/80 bg-amber-50/25"
            : "border-slate-200/80 bg-slate-50/60"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-800">{label}</p>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500">{subtitle}</p>}
        </div>
        {displayRating > 0 && (
          <span className="shrink-0 rounded-full bg-amber-100/80 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
            {displayRating} / {maxStars} • {ratingLabel}
          </span>
        )}
      </div>

      <div
        className="flex items-center gap-1"
        role="radiogroup"
        aria-label={label}
        onMouseLeave={handleMouseLeave}
      >
        {stars.map((star) => {
          const filled = star <= displayRating;
          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={value === star}
              aria-label={`${label}: ${star} out of ${maxStars} stars`}
              onMouseEnter={() => handleMouseEnter(star)}
              onClick={() => onChange(star)}
              className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 transition-colors"
                fill={filled ? "#f59e0b" : "none"}
                stroke={filled ? "#f59e0b" : "#cbd5e1"}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
          );
        })}
      </div>

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
