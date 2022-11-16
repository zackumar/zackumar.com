import { Link, NavLink } from '@remix-run/react';
import { Navigation } from '~/constants/navigation';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header
      ref={ref}
      className="flex flex-row justify-between pb-5"
      style={{
        transform: isInView ? 'translateY(0%)' : 'translateY(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Link className="flex flex-row items-center space-x-2" to="/">
        <span className="h-5 w-5 rounded-full bg-red-400"></span>
        <p className="text-lg font-semibold">ZU</p>
      </Link>
      <nav>
        <ul className="flex flex-row items-center space-x-8">
          {Navigation.map(({ name, to }) => (
            <li key={name}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? 'text-black' : 'text-gray-500 hover:text-gray-800'
                }
                end
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
