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

export interface ProgramReviewEntry {
  rating: number;
  remark: string;
  submitted: boolean;
  error?: string;
}
