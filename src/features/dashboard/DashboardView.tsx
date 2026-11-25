"use client";

import AppBarView from "@/components/app-bar/AppBarView";
import StationBannerView from "@/features/dashboard/components/station-banner/StationBannerView";
import ProgramReviewCardView from "@/features/dashboard/components/program-review-card/ProgramReviewCardView";
import { useDashboard } from "./DashboardController";

export default function DashboardView() {
  const {
    activeChannel,
    setActiveChannel,
    currentStation,
    currentReview,
    handleRatingChange,
    handleRemarkChange,
    handleSubmitReview,
  } = useDashboard();

  return (
    <div
      className="flex min-h-dvh w-full flex-col"
      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
    >
      <AppBarView activeChannel={activeChannel} onChannelChange={setActiveChannel} />

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-4 px-3.5 py-4 sm:px-6 sm:py-7">
        <StationBannerView
          station={currentStation}
          isSubmitted={currentReview.submitted}
        />

        <ProgramReviewCardView
          stationName={currentStation.name}
          program={currentStation.program}
          review={currentReview}
          onRatingChange={handleRatingChange}
          onRemarkChange={handleRemarkChange}
          onSubmit={handleSubmitReview}
        />
      </main>
    </div>
  );
}
