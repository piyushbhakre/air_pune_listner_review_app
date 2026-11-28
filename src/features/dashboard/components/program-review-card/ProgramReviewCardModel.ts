import type {
  ProgramItem,
  ProgramReviewEntry,
  RatingCategoryKey,
} from "@/features/dashboard/DashboardModel";

export interface ProgramReviewCardProps {
  stationName: string;
  program: ProgramItem;
  review: ProgramReviewEntry;
  onRatingChange: (key: RatingCategoryKey, rating: number) => void;
  onDescriptionChange: (description: string) => void;
  onSubmit: () => void;
}
