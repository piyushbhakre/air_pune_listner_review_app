"use client";

import { useState } from "react";
import type { StationChannelId } from "@/components/channel-switcher/ChannelSwitcherModel";
import rawProgramsData from "@/data/programs.json";
import type { ProgramReviewEntry, ProgramsDataFile } from "./DashboardModel";

const PROGRAMS_DATA = rawProgramsData as ProgramsDataFile;

export const EMPTY_PROGRAM_REVIEW: ProgramReviewEntry = {
  rating: 0,
  remark: "",
  submitted: false,
};

export function useDashboard() {
  const [activeChannel, setActiveChannel] = useState<StationChannelId>("pune-primary");
  const [reviewsByChannel, setReviewsByChannel] = useState<
    Partial<Record<StationChannelId, ProgramReviewEntry>>
  >({});

  const currentStation = PROGRAMS_DATA.stations[activeChannel];
  const currentReview = reviewsByChannel[activeChannel] ?? EMPTY_PROGRAM_REVIEW;

  const handleRatingChange = (rating: number) => {
    setReviewsByChannel((prev) => {
      const current = prev[activeChannel] ?? EMPTY_PROGRAM_REVIEW;
      return {
        ...prev,
        [activeChannel]: {
          ...current,
          rating,
          submitted: false,
          error: undefined,
        },
      };
    });
  };

  const handleRemarkChange = (remark: string) => {
    setReviewsByChannel((prev) => {
      const current = prev[activeChannel] ?? EMPTY_PROGRAM_REVIEW;
      return {
        ...prev,
        [activeChannel]: {
          ...current,
          remark,
          submitted: false,
        },
      };
    });
  };

  const handleSubmitReview = () => {
    if (currentReview.rating === 0) {
      setReviewsByChannel((prev) => ({
        ...prev,
        [activeChannel]: {
          ...currentReview,
          error: "Please select a 1 to 5 star rating before submitting.",
        },
      }));
      return;
    }

    setReviewsByChannel((prev) => ({
      ...prev,
      [activeChannel]: {
        ...currentReview,
        submitted: true,
        error: undefined,
      },
    }));
  };

  return {
    activeChannel,
    setActiveChannel,
    currentStation,
    currentReview,
    handleRatingChange,
    handleRemarkChange,
    handleSubmitReview,
  };
}
