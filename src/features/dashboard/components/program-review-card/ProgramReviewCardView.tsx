"use client";

import StarRatingView from "@/components/star-rating/StarRatingView";
import RemarkBoxView from "@/features/dashboard/components/remark-box/RemarkBoxView";
import type { ProgramReviewCardProps } from "./ProgramReviewCardModel";

export default function ProgramReviewCardView({
  stationName,
  program,
  review,
  onRatingChange,
  onRemarkChange,
  onSubmit,
}: ProgramReviewCardProps) {
  return (
    <article
      className={`flex w-full flex-col gap-4 rounded-2xl border p-4 shadow-sm transition-colors sm:p-6 ${
        review.submitted ? "border-emerald-200" : "border-blue-100"
      }`}
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
    >
      {/* Program Name, Category & Broadcast Time */}
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {program.category}
          </span>
          <h2
            className="mt-0.5 text-xl font-bold tracking-tight sm:text-2xl"
            style={{ color: "#0b2a6f" }}
          >
            {program.name}
          </h2>

          {/* Single Anchor Info */}
          <div className="mt-2 inline-flex items-center gap-2 rounded-xl bg-slate-100/90 px-3 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
            </svg>
            <span>Anchor: {program.anchor}</span>
          </div>
        </div>

        {/* Program Time Slot */}
        <div className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/80 px-3.5 py-2 text-xs font-semibold text-blue-800 sm:text-sm">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{program.time}</span>
        </div>
      </div>

      {/* 5-Star Rating */}
      <StarRatingView
        value={review.rating}
        onChange={onRatingChange}
        error={review.error}
      />

      {/* Listener Remark Box */}
      <RemarkBoxView
        id={`remark-${program.id}`}
        value={review.remark}
        onChange={onRemarkChange}
      />

      {/* Confirmation Banner */}
      {review.submitted && (
        <p className="rounded-xl bg-emerald-50 px-3.5 py-2.5 text-xs font-semibold text-emerald-700 sm:text-sm">
          Thank you! Your review for {program.name} ({stationName}) has been submitted.
        </p>
      )}

      {/* Section Submit Button */}
      <button
        type="button"
        onClick={onSubmit}
        className="h-12 w-full rounded-xl px-5 text-base font-semibold text-white shadow-md shadow-blue-600/25 transition-all hover:brightness-110 active:scale-[0.99]"
        style={{
          backgroundImage: review.submitted
            ? "linear-gradient(90deg, #059669, #10b981)"
            : "linear-gradient(90deg, #1d4ed8, #0ea5e9)",
        }}
      >
        {review.submitted ? "Review Submitted ✓" : "Submit Review"}
      </button>
    </article>
  );
}
