import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStylesheetUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Zack Umar',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en" className="dark h-full">
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
