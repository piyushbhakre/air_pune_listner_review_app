import type { ProgramItem, ProgramReviewEntry } from "@/features/dashboard/DashboardModel";

export interface ProgramReviewCardProps {
  stationName: string;
  program: ProgramItem;
  review: ProgramReviewEntry;
  onRatingChange: (rating: number) => void;
  onRemarkChange: (remark: string) => void;
  onSubmit: () => void;
}
