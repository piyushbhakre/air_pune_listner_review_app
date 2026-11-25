"use client";

import Image from "next/image";
import type { SideMenuProps } from "./SideMenuModel";
import { useSideMenu } from "./SideMenuController";

export default function SideMenuView({
  isOpen,
  onClose,
  userName = "AIR Listener",
  userEmail = "listener@akashvani.in",
}: SideMenuProps) {
  const { pathname, menuItems, handleNavigate, handleLogout } = useSideMenu(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Profile side menu">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close side menu"
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/45 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer panel (mobile-compatible width: max 85vw / 320px) */}
      <aside
        className="relative z-10 flex h-dvh w-[84vw] max-w-xs flex-col justify-between shadow-2xl"
        style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
      >
        <div>
          {/* Tricolour accent bar */}
          <div className="flex h-1.5 w-full">
            <div className="flex-1" style={{ backgroundColor: "#ff9933" }} />
            <div className="flex-1" style={{ backgroundColor: "#ffffff" }} />
            <div className="flex-1" style={{ backgroundColor: "#138808" }} />
          </div>

          {/* Top header with close button */}
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo/aakashvani-logo.png"
                alt="Akashvani logo"
                width={32}
                height={32}
                quality={100}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-bold tracking-tight" style={{ color: "#0b2a6f" }}>
                Akashvani Pune
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Signed-in profile card */}
          <div className="mx-4 mt-4 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-3.5">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-sm"
              style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8, #0ea5e9)" }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900">{userName}</p>
              <p className="truncate text-xs text-slate-600">{userEmail}</p>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="mt-4 flex flex-col gap-1 px-3" aria-label="Side navigation">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className={`flex h-12 w-full items-center gap-3 rounded-xl px-3.5 text-left text-sm font-semibold transition-colors ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom logout section */}
        <div className="border-t border-slate-200 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 active:scale-[0.99]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
