type NavItem = {
  to: string;
  name: string;
  anchor?: boolean;
};

export const HOME_PATH = '/';
export const PROJECTS_PATH = '/projects';
export const RESUME_PATH = '/resume';

export const Navigation: NavItem[] = [
  { to: HOME_PATH, name: 'Home' },
  // { to: '/about', name: 'About' },
  { to: PROJECTS_PATH, name: 'Projects' },
  { to: RESUME_PATH, name: 'Resume' },
];
