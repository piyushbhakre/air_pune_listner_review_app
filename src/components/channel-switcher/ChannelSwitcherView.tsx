"use client";

import type { ChannelSwitcherProps } from "./ChannelSwitcherModel";

export default function ChannelSwitcherView({
  channels,
  activeChannel,
  onSelectChannel,
}: ChannelSwitcherProps) {
  return (
    <div
      role="tablist"
      aria-label="Select Akashvani station channel"
      className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-slate-100/95 p-1 shadow-inner"
    >
      {channels.map((channel) => {
        const isActive = channel.id === activeChannel;
        return (
          <button
            key={channel.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectChannel(channel.id)}
            className={`h-9 whitespace-nowrap rounded-full px-3 text-xs font-semibold transition-all sm:h-10 sm:px-5 sm:text-sm ${
              isActive
                ? "text-white shadow-md shadow-blue-600/30"
                : "text-slate-700 hover:bg-white/70 hover:text-blue-700"
            }`}
            style={
              isActive
                ? { backgroundImage: "linear-gradient(90deg, #1d4ed8, #0ea5e9)" }
                : undefined
            }
          >
            {channel.label}
          </button>
        );
      })}
    </div>
  );
}
