import type { MetaFunction, LinksFunction } from '@remix-run/cloudflare';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useEffect, useState } from 'react';

import stylesheet from '~/tailwind.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Zack Umar' },
    {
      name: 'description',
      content:
        "Hi, I'm Zackarya (Zack) Umar, computer science student and aspiring software engineer",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-white font-sans dark:bg-zinc-900">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
