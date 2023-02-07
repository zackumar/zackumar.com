import Header from '~/components/Header';

import rainbow from '~/styles/global.css';
import type { LinksFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';
import ExternalSVG from '~/assets/ExternalSVG';
import GithubSVG from '~/assets/GithubSVG';
import { WebFrame } from '~/components/WebFrame';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: rainbow }];
};

export default function Projects() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col p-5 pb-16 text-black dark:text-white">
      <Header animate={false} />
      <div className="space-y-16 py-10">
        <section>
          <div className="flex flex-col items-center justify-center py-32">
            <h1 className="text-rainbow w-fit pb-4 text-6xl font-medium">
              gdscutsa.com
            </h1>
            <p className="text-lg">2022 • Designer/Developer</p>
          </div>
        </section>
        <section className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-5xl">The Why</h2>
          <p>
            As a founding officer of Google Developer Student Clubs (GDSC) at
            the University of Texas at San Antonio, we needed a website where
            new members can figure out who we are and what we stand for. We also
            needed a member portal to find out about our upcoming events and
            sign up for them. Wanting to also sharpen my skills in web design,
            that lead me to creating this website from scratch.
          </p>
        </section>
        <section className="mx-auto max-w-2xl space-y-4">
          <WebFrame title="gdscutsa.com" className="h-[500px]" hint>
            <img
              src="/assets/images/gdscutsa-noframe.webp"
              alt="gdscutsa.com"
            ></img>
          </WebFrame>
        </section>
        <section className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-5xl">The How</h2>
          <ul className="list-disc">
            <li>Remix - Fullstack framework for React</li>
            <li>Tailwind - A utility first CSS framework</li>
            <li>Contentful CMS - A headless CMS</li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-center">
          <a
            className="flex flex-row items-center text-lg font-semibold hover:scale-105"
            href="https://gdscutsa.com"
          >
            <span className="text-rainbow">Visit it here!</span>
            <ExternalSVG className="h-6 w-6 fill-white" />
          </a>
          <p>or</p>
          <a
            className="flex flex-row items-center space-x-2 text-lg font-semibold hover:scale-105"
            href="https://github.com/gdscutsa/gdscutsa.com"
          >
            <GithubSVG className="h-6 w-6 fill-white" />
            <span className="text-rainbow">Look at the code here!</span>
            <ExternalSVG className="h-6 w-6 fill-white" />
          </a>
        </section>
      </div>
      <Footer className="mx-auto max-w-2xl space-y-4" />
    </main>
  );
}
