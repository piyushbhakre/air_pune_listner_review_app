"use client";

import { useState } from "react";
import type { StationChannelId } from "@/components/channel-switcher/ChannelSwitcherModel";
import rawProgramsData from "@/data/programs.json";
import type {
  ProgramReviewEntry,
  ProgramsDataFile,
  RatingCategoryKey,
  ReviewValidationErrors,
} from "./DashboardModel";

const PROGRAMS_DATA = rawProgramsData as ProgramsDataFile;

export const EMPTY_PROGRAM_REVIEW: ProgramReviewEntry = {
  programRating: 0,
  announcerRating: 0,
  overallRating: 0,
  overallDescription: "",
  submitted: false,
  errors: {},
};

export function validateReviewRatings(review: ProgramReviewEntry): ReviewValidationErrors {
  const errors: ReviewValidationErrors = {};
  if (review.programRating === 0) {
    errors.programRating = "Please rate the program (1–5 stars).";
  }
  if (review.announcerRating === 0) {
    errors.announcerRating = "Please rate the announcer (1–5 stars).";
  }
  if (review.overallRating === 0) {
    errors.overallRating = "Please give an overall radio rating (1–5 stars).";
  }
  return errors;
}

export function useDashboard() {
  const [activeChannel, setActiveChannel] = useState<StationChannelId>("pune-primary");
  const [reviewsByChannel, setReviewsByChannel] = useState<
    Partial<Record<StationChannelId, ProgramReviewEntry>>
  >({});

  const currentStation = PROGRAMS_DATA.stations[activeChannel];
  const currentReview = reviewsByChannel[activeChannel] ?? EMPTY_PROGRAM_REVIEW;

  const handleRatingChange = (key: RatingCategoryKey, rating: number) => {
    setReviewsByChannel((prev) => {
      const current = prev[activeChannel] ?? EMPTY_PROGRAM_REVIEW;
      const nextErrors = { ...current.errors };
      delete nextErrors[key];

      return {
        ...prev,
        [activeChannel]: {
          ...current,
          [key]: rating,
          submitted: false,
          errors: nextErrors,
        },
      };
    });
  };

  const handleDescriptionChange = (overallDescription: string) => {
    setReviewsByChannel((prev) => {
      const current = prev[activeChannel] ?? EMPTY_PROGRAM_REVIEW;
      return {
        ...prev,
        [activeChannel]: {
          ...current,
          overallDescription,
          submitted: false,
        },
      };
    });
  };

  const handleSubmitReview = () => {
    const foundErrors = validateReviewRatings(currentReview);
    if (Object.keys(foundErrors).length > 0) {
      setReviewsByChannel((prev) => ({
        ...prev,
        [activeChannel]: {
          ...currentReview,
          submitted: false,
          errors: foundErrors,
        },
      }));
      return;
    }

    setReviewsByChannel((prev) => ({
      ...prev,
      [activeChannel]: {
        ...currentReview,
        submitted: true,
        errors: {},
      },
    }));
  };

  return {
    activeChannel,
    setActiveChannel,
    currentStation,
    currentReview,
    handleRatingChange,
    handleDescriptionChange,
    handleSubmitReview,
  };
}
