import type { StationChannelId } from "@/components/channel-switcher/ChannelSwitcherModel";

export interface AppBarProps {
  activeChannel?: StationChannelId;
  onChannelChange?: (channel: StationChannelId) => void;
  userName?: string;
  userEmail?: string;
}
