type NavItem = {
  to: string;
  name: string;
  anchor?: boolean;
};

export const Navigation: NavItem[] = [
  { to: '/', name: 'Home' },
  // { to: '/about', name: 'About' },
  { to: '/projects', name: 'Projects' },
  { to: '/resume', name: 'Resume' },
];
