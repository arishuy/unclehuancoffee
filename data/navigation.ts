export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/stores", label: "Stores" },
  { href: "/story", label: "Story" },
  { href: "/workshop", label: "Workshop" },
  { href: "/contact", label: "Contact" },
];
