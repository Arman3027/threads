export interface SidebarBtnProps {
  isActive: boolean;
  icon: React.ReactHTMLElement;
  href: string;
  onClick?: () => void;
}
