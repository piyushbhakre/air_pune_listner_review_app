import type { StationChannelId } from "@/components/channel-switcher/ChannelSwitcherModel";

export interface ProgramItem {
  id: string;
  name: string;
  anchor: string;
  time: string;
  category: string;
}

export interface StationMetadata {
  id: StationChannelId;
  name: string;
  tagline: string;
  frequency: string;
  description: string;
  program: ProgramItem;
}

export interface ProgramsDataFile {
  stations: Record<StationChannelId, StationMetadata>;
}

export type RatingCategoryKey = "programRating" | "announcerRating" | "overallRating";

export type ReviewValidationErrors = Partial<Record<RatingCategoryKey, string>>;

export interface ProgramReviewEntry {
  programRating: number;
  announcerRating: number;
  overallRating: number;
  overallDescription: string;
  submitted: boolean;
  errors: ReviewValidationErrors;
}
