"use client";

import type { StarRatingProps } from "./StarRatingModel";
import { getRatingLabel, useStarRating } from "./StarRatingController";

export default function StarRatingView({
  value,
  onChange,
  maxStars = 5,
  error,
}: StarRatingProps) {
  const { stars, hoveredStar, handleMouseEnter, handleMouseLeave } = useStarRating(maxStars);
  const displayRating = hoveredStar || value;
  const ratingLabel = getRatingLabel(displayRating);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Your Rating
        </span>
        {displayRating > 0 && (
          <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
            {displayRating} / {maxStars} • {ratingLabel}
          </span>
        )}
      </div>

      <div
        className="flex items-center gap-1"
        role="radiogroup"
        aria-label="5 star rating"
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
              aria-label={`Rate ${star} out of ${maxStars} stars`}
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
