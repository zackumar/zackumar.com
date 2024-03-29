import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useEffect, useState } from 'react';

import tailwindStylesheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Zack Umar',
  viewport: 'width=device-width,initial-scale=1',
  description:
    "Hi, I'm Zackarya (Zack) Umar, computer science student and aspiring software engineer",
});

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(
      (typeof document !== 'undefined' &&
        localStorage.getItem('theme') === 'dark') ||
        (!('theme' in localStorage) &&
          matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, []);

  return (
    <html
      lang="en"
      className={`${isDarkMode ? 'dark' : ''} h-full scroll-smooth`}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white font-sans dark:bg-zinc-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
