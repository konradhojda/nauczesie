import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export enum userRole {
  USER = "user",
  LOGGED_USER = "logged_user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}

export const rolePermissions: Record<userRole, string[]> = {
  [userRole.USER]: ["read"],
  [userRole.LOGGED_USER]: ["read", "create", "update"],
  [userRole.MODERATOR]: ["read", "create", "update", "delete"],
  [userRole.ADMIN]: ["read", "create", "update", "delete", "manage"],
};

export interface HeaderLinkProps {
  name: string;
  href: string;
  requiredRank?: userRole;
  icon?: FontAwesomeIconProps["icon"];
}

export const clientRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/", icon: "facebook" },
  { name: "About", href: "/about" },
  { name: "Categories", href: "/categories" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin/dashboard", requiredRank: userRole.ADMIN },
];

export const adminRoutingData: HeaderLinkProps[] = [
  { name: "Home", href: "/admin/dashboard" },
  { name: "Products", href: "/admin/products" },
  { name: "Categories", href: "/admin/orders" },
  { name: "Settings", href: "/admin/settings/" },
  { name: "Back to page", href: "/" },
];
