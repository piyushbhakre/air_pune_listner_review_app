export interface SideMenuNavItem {
  id: string;
  label: string;
  href: string;
}

export interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userEmail?: string;
}
