type NavItem = {
  to: string;
  name: string;
  anchor?: boolean;
};

export const Navigation: NavItem[] = [
  { to: '/', name: 'Home' },
  // { to: '/about', name: 'About' },
  { to: '#work', name: 'Work' },
  { to: '#projects', name: 'Projects' },
  { to: '/resume.pdf', name: 'Resume', anchor: true },
];
