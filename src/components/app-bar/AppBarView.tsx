"use client";

import Image from "next/image";
import ChannelSwitcherView from "@/components/channel-switcher/ChannelSwitcherView";
import ProfileButtonView from "@/components/profile-button/ProfileButtonView";
import SideMenuView from "@/components/side-menu/SideMenuView";
import type { AppBarProps } from "./AppBarModel";
import { useAppBar } from "./AppBarController";

export default function AppBarView(props: AppBarProps) {
  const {
    channels,
    selectedChannel,
    isSideMenuOpen,
    handleSelectChannel,
    openSideMenu,
    closeSideMenu,
  } = useAppBar(props);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b border-slate-200/80 shadow-sm backdrop-blur-md"
        style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#0f172a" }}
      >
        {/* Subtle tricolour top strip */}
        <div className="flex h-1 w-full">
          <div className="flex-1" style={{ backgroundColor: "#ff9933" }} />
          <div className="flex-1" style={{ backgroundColor: "#ffffff" }} />
          <div className="flex-1" style={{ backgroundColor: "#138808" }} />
        </div>

        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2 px-3 sm:grid-cols-[11rem_1fr_11rem] sm:px-6">
          {/* Left: Akashvani Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo/aakashvani-logo.png"
              alt="Akashvani"
              width={36}
              height={36}
              quality={100}
              className="h-9 w-9 shrink-0 object-contain"
            />
            <span
              className="hidden truncate text-sm font-bold tracking-tight sm:inline"
              style={{ color: "#0b2a6f" }}
            >
              Akashvani Pune
            </span>
          </div>

          {/* Center: Pune Primary & Pune VBS buttons */}
          <div className="flex items-center justify-center">
            <ChannelSwitcherView
              channels={channels}
              activeChannel={selectedChannel}
              onSelectChannel={handleSelectChannel}
            />
          </div>

          {/* Right: Profile Icon Button */}
          <div className="flex items-center justify-end">
            <ProfileButtonView isOpen={isSideMenuOpen} onClick={openSideMenu} />
          </div>
        </div>
      </header>

      <SideMenuView
        isOpen={isSideMenuOpen}
        onClose={closeSideMenu}
        userName={props.userName}
        userEmail={props.userEmail}
      />
    </>
  );
}
