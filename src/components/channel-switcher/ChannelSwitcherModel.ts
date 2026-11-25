export type StationChannelId = "pune-primary" | "pune-vbs";

export interface StationChannelOption {
  id: StationChannelId;
  label: string;
}

export interface ChannelSwitcherProps {
  channels: StationChannelOption[];
  activeChannel: StationChannelId;
  onSelectChannel: (channel: StationChannelId) => void;
}
