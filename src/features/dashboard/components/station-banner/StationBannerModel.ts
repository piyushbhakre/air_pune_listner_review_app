import type { StationMetadata } from "@/features/dashboard/DashboardModel";

export interface StationBannerProps {
  station: StationMetadata;
  isSubmitted: boolean;
}
