"use client";

import { useState } from "react";

const RATING_LABELS: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

export function getRatingLabel(rating: number): string {
  return RATING_LABELS[rating] ?? "";
}

export function useStarRating(maxStars = 5) {
  const [hoveredStar, setHoveredStar] = useState(0);

  const stars = Array.from({ length: maxStars }, (_, idx) => idx + 1);

  return {
    stars,
    hoveredStar,
    handleMouseEnter: (star: number) => setHoveredStar(star),
    handleMouseLeave: () => setHoveredStar(0),
  };
}
