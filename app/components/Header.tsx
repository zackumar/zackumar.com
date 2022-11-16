import { Link, NavLink } from '@remix-run/react';
import { Navigation } from '~/constants/navigation';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SunSVG from '~/assets/SunSVG';

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDarkMode(
        typeof document !== 'undefined' &&
          localStorage.getItem('theme') === 'dark'
      );
    }
  }, [isDarkMode]);

  console.log(isDarkMode);

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
        <p className="text-lg font-semibold text-black dark:text-white">ZU</p>
      </Link>
      <nav>
        <ul className="flex flex-row items-center space-x-8">
          {Navigation.map(({ name, to }) => (
            <li key={name}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-black dark:text-white'
                    : 'text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100'
                }
                end
              >
                {name}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="flex items-center fill-sky-600 dark:fill-sky-400"
              onClick={() => {
                if (typeof document !== 'undefined') {
                  localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
                  document.documentElement.classList.toggle('dark');
                  setIsDarkMode(!isDarkMode);
                }
              }}
            >
              {isDarkMode ? (
                <svg
                  id="moon-svg"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    id="moon"
                    key="moon"
                    d="M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"
                  />
                </svg>
              ) : (
                <SunSVG className="h-6 w-6" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
