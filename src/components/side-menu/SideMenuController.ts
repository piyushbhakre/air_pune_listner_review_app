"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { SideMenuNavItem } from "./SideMenuModel";

export const DEFAULT_SIDE_MENU_ITEMS: SideMenuNavItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
];

export function useSideMenu(isOpen: boolean, onClose: () => void) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleLogout = () => {
    onClose();
    router.push("/login");
  };

  return {
    pathname,
    menuItems: DEFAULT_SIDE_MENU_ITEMS,
    handleNavigate,
    handleLogout,
  };
}
