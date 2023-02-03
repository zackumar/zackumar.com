import Header from '~/components/Header';

import rainbow from '~/styles/global.css';
import type { LinksFunction } from '@remix-run/cloudflare';
import Footer from '~/components/Footer';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: rainbow }];
};

export default function Projects() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col p-5 pb-16">
      <Header animate={false} />
      <div className="space-y-5 py-10">
        <section>
          <div className="flex flex-col items-center justify-center py-32">
            <h1 className="text-rainbow w-fit pb-4 text-6xl font-medium">
              gdscutsa.com
            </h1>
            <p className="text-lg text-white">2022 • Designer/Developer</p>
          </div>
        </section>
        <section className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-5xl text-white">The Why</h2>
          <p className="text-white">
            No matter how you travel, it's still you going. Checkmate... So you
            two dig up, dig up dinosaurs? Remind me to thank John for a lovely
            weekend. I travel for work, but recently, friends said I should take
            major trips. So you two dig up, dig up dinosaurs? No matter.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
