"use client";

import { useState } from "react";
import type {
  StationChannelId,
  StationChannelOption,
} from "@/components/channel-switcher/ChannelSwitcherModel";
import type { AppBarProps } from "./AppBarModel";

export const STATION_CHANNELS: StationChannelOption[] = [
  { id: "pune-primary", label: "Pune Primary" },
  { id: "pune-vbs", label: "Pune VBS" },
];

export function useAppBar({ activeChannel, onChannelChange }: AppBarProps) {
  const [internalChannel, setInternalChannel] = useState<StationChannelId>("pune-primary");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const selectedChannel = activeChannel ?? internalChannel;

  const handleSelectChannel = (channel: StationChannelId) => {
    setInternalChannel(channel);
    onChannelChange?.(channel);
  };

  const openSideMenu = () => setIsSideMenuOpen(true);
  const closeSideMenu = () => setIsSideMenuOpen(false);

  return {
    channels: STATION_CHANNELS,
    selectedChannel,
    isSideMenuOpen,
    handleSelectChannel,
    openSideMenu,
    closeSideMenu,
  };
}
