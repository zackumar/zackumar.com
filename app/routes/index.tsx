import EmailSVG from '~/assets/EmailSVG';
import GithubSVG from '~/assets/GithubSVG';
import LinkedinSVG from '~/assets/LinkedinSVG';
import Header from '~/components/Header';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '~/constants/links';
import { motion } from 'framer-motion';
import ExternalSVG from '~/assets/ExternalSVG';
import Footer from '~/components/Footer';

export default function Index() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col p-5 pb-16">
      <Header />
      <div className="space-y-5">
        <section className="grid w-full grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-5">
          <motion.div
            // initial={
            //   typeof document !== 'undefined'
            //     ? { opacity: 0, scale: 0.95, y: 50.0 }
            //     : undefined
            // }
            // animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
            // transition={{ duration: 1.0, delay: 1.5 }}
            className="col-span-2 flex h-full w-full flex-col rounded-3xl bg-[url('/assets/images/maincard.webp')] bg-cover bg-center p-12 shadow-md"
          >
            <h1 className="text-3xl font-medium md:text-4xl">
              Hi, I'm Zack Umar, computer science student and aspiring software
              engineer.
            </h1>
            <p className="my-8 text-gray-700">
              Computer science student with a passion for building and creating.
              Interested in everything in tech, especially anything that
              requires programming.
            </p>
            <div className="mt-auto grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:gap-0 sm:space-x-4">
              <a
                className="col-span-2 flex transform flex-row items-center justify-center space-x-1 rounded-full bg-zinc-900 px-5 py-3 text-white shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="fill-white">
                  <EmailSVG className="h-auto w-5" />
                </span>
                <span>Contact Me</span>
              </a>
              <a
                className="flex transform flex-row items-center justify-center space-x-2 rounded-full bg-white fill-black p-3 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-sky-400"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG className="h-auto w-5" />
                <span className="sm:sr-only">GitHub</span>
              </a>
              <a
                className="flex transform flex-row items-center justify-center space-x-2 rounded-full bg-white fill-black p-3 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-sky-400"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinSVG className="h-auto w-5" />
                <span className="sm:sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
          <motion.img
            alt="Zack Umar"
            // initial={
            //   typeof document !== 'undefined'
            //     ? { opacity: 0, scale: 0.8 }
            //     : undefined
            // }
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1.0, delay: 1.0 }}
            className="-order-1 col-span-1 h-[300px] w-full rounded-3xl object-cover object-center shadow-md sm:h-[450px] md:order-none"
            src="/assets/images/zack.webp"
          ></motion.img>
        </section>
        <motion.div
          className="space-y-5"
          // initial={
          //   typeof document !== 'undefined'
          //     ? { opacity: 0, scale: 0.9, y: 20.0 }
          //     : undefined
          // }
          // animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
          // transition={{ duration: 1.0, delay: 2.0 }}
        >
          <section
            id="aboutme"
            className="grid w-full grid-cols-1 gap-5 md:grid-cols-4"
          >
            <div className="col-span-1 hidden w-full rounded-2xl bg-zinc-100 p-10 text-black shadow-md dark:bg-zinc-700 dark:text-white md:block">
              <h2 className="text-3xl">About Me</h2>
            </div>
            <div className="col-span-3 w-full rounded-2xl bg-zinc-50 p-10 text-black shadow-md dark:bg-zinc-800 dark:text-white">
              <h2 className="mb-8 text-4xl md:hidden">About Me</h2>
              <div className="space-y-5">
                <p>
                  I'm a current computer science student at the University of
                  Texas at San Antonio. I have a serious passion for software
                  engineering and any project that requires it. I'm currently
                  interested in full-stack web development, but I'm always open
                  to learning new things.
                </p>
                <p>
                  Well-organized, problem solver, with high attention to detail.
                  Fan of tennis, outdoor activities, 3D printing, amateur film
                  photography, and sometimes (sometimes) reading. Oh. And music.
                  Currently in love with{' '}
                  <a
                    href="https://open.spotify.com/artist/6zpptMjiapn5PB0Y5k3xWN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 hover:text-sky-400 dark:text-zinc-200 dark:hover:text-sky-400"
                  >
                    <u>
                      <i>Durry</i>
                    </u>
                  </a>
                  .
                </p>
                <a
                  className="block w-fit rounded-full bg-black px-5 py-2 text-white shadow transition duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 dark:bg-white dark:text-black"
                  href="/resume.pdf"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
          <section id="work" className="pt-8">
            <h2 className="pb-4 text-3xl dark:text-white">Work</h2>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              <a className="group" href="https://heb.com">
                <div className="relative min-h-[450px] w-full space-y-2 overflow-hidden rounded-2xl bg-red-500 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-white">H-E-B</h2>
                      <h3 className="text-slate-100">
                        Software Engineering Intern at H-E-B (Texas' largest
                        grocery chain)
                      </h3>
                      <p className="pt-4 text-slate-100">
                        Front-end engineer on heb.com!
                      </p>
                    </div>

                    <ExternalSVG className="h-6 w-6 fill-slate-100 group-hover:fill-sky-400" />
                  </div>
                  <img
                    alt="heb.com"
                    className="absolute left-5 shadow-md md:left-10"
                    src="/assets/images/heb.webp"
                  ></img>
                </div>
              </a>
              <a className="group" href="https://usaa.com">
                <div className="relative h-[450px] w-full space-y-2 overflow-hidden rounded-2xl bg-blue-700 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-white">USAA</h2>
                      <h3 className="text-slate-100">
                        Software Engineering Intern at USAA
                      </h3>
                      <p className="pt-4 text-slate-100">
                        Working with the fraud management team to prevent fraud
                        for over 13 million members.
                      </p>
                    </div>

                    <ExternalSVG className="h-6 w-6 fill-slate-100 group-hover:fill-sky-400" />
                  </div>

                  <svg
                    className="m-auto w-full"
                    height="240"
                    width="240"
                    viewBox="0 0 40 40"
                    aria-label="USAA Home"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M31.38 27.9s.99.66 1.94.66c.97 0 1.81-.69 1.81-.69v-3.36s-.85.6-1.8.6c-.95 0-1.95-.65-1.95-.65l-9.87-5.81.92 3.98 8.95 5.27zM4.75 17.53s-.95-.66-1.95-.66c-.99 0-1.8.7-1.8.7v3.35s.81-.6 1.8-.6c1 0 1.95.66 1.95.66l8.15 4.8.7-3.04-8.85-5.2zm26.63 5.98s.99.66 1.94.66c.97 0 1.81-.7 1.81-.7v-3.35s-.85.6-1.8.6c-.95 0-1.95-.65-1.95-.65l-11.03-6.5.91 3.98 10.12 5.96zM4.75 13.14s-.95-.66-1.95-.66c-.99 0-1.8.69-1.8.69v3.36s.81-.6 1.8-.6c1 0 1.95.65 1.95.65l9.04 5.32.7-3.03-9.74-5.73zm26.63 5.98s.99.65 1.94.65c.97 0 1.81-.68 1.81-.68v-3.36s-.85.6-1.8.6c-.95 0-1.95-.65-1.95-.65l-12.2-7.2.92 4 11.28 6.64zM4.75 8.75s-.95-.66-1.95-.66c-.99 0-1.8.69-1.8.69v3.35s.81-.6 1.8-.6c1 0 1.95.66 1.95.66l9.92 5.84.7-3.03L4.75 8.75zm14.18-1.36l12.45 7.33s.99.66 1.94.66c.97 0 1.81-.69 1.81-.69v-3.36s-.85.61-1.8.61c-.95 0-1.95-.66-1.95-.66l-9.63-5.67-.66-2.54c0-.11.1-.16.13-.17l1.63-.51c.22 0 .34.19.34.35l.1.18c.05.03.31-.05.31-.1v-1c.01-.67-.52-1.26-1.23-1.26h-1.64S20.5 0 19.8 0h-3.1c-.8 0-1 .78-1 .78l-2.16 8.76-8.79-5.18S3.8 3.7 2.8 3.7c-.99 0-1.8.68-1.8.68v3.36s.81-.6 1.8-.6c1 0 1.95.66 1.95.66l10.81 6.36 2.46-10.73.91 3.96zm-1.96 29.44c0 1.82-1.49 3.15-3.55 3.15-2.17 0-2.89-.37-2.89-.37l-.18-2.02s1.2.8 2.97.8c.5 0 1.6-.34 1.6-1.34 0-.95-.87-1.25-1.08-1.36-.43-.23-.95-.46-1.37-.67-.8-.4-1.98-1.15-1.98-2.74 0-2.3 2.07-3.14 3.7-3.14 1.32 0 2.48.58 2.48.58v1.88c-.37-.21-.98-.89-2.48-.89-1.02 0-1.71.54-1.71 1.3 0 .7.58 1.17 1.14 1.43.56.26.93.43 1.58.75.81.4 1.77 1.23 1.77 2.64zm-9.7-.87c0 .84-.28 2.42-2.2 2.39C3.33 38.3 3 36.7 3 35.68v-6.34H1v6.44C1 39.4 3.22 40 5.07 40c2.75 0 4.02-1.8 4.02-4.26v-6.4H7.27v6.62zm27.86 3.8h-2.18l-.63-1.82H28.6l-.63 1.83h-3.72l-.63-1.83H19.9l-.63 1.83H17.3l3.6-9.62-.35-.81h2.18l3.5 9.83 3.37-9.02-.34-.81h2.17l3.7 10.43zm-12-3.28l-1.3-4.11-1.45 4.1h2.75zm8.7 0l-1.3-4.11-1.44 4.1h2.74zm3.82-6.66a2.27 2.27 0 00-.84 3.06 2.27 2.27 0 003.06.83 2.27 2.27 0 00.83-3.07 2.3 2.3 0 00-1.94-1.12c-.38 0-.75.1-1.1.3zm2.03.32a1.89 1.89 0 01.7 2.56 1.89 1.89 0 01-2.55.7 1.87 1.87 0 111.85-3.25zm-1.52 2.87v-1.03h.23a.5.5 0 01.31.09c.1.07.24.26.41.56l.22.38h.47l-.3-.48a2.79 2.79 0 00-.35-.47.67.67 0 00-.2-.13c.2-.02.37-.09.5-.22a.64.64 0 00.07-.81.6.6 0 00-.3-.24 2.03 2.03 0 00-.62-.06h-.83V33h.4zm0-2.09h.45c.19 0 .32.02.39.04.07.03.12.07.16.13.04.06.06.12.06.2 0 .1-.04.2-.12.26-.08.07-.24.1-.46.1h-.48v-.73z"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </section>
          <section id="projects" className="pt-8">
            <h2 className="pb-4 text-3xl dark:text-white">Projects</h2>
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
              <a className="group" href="/projects/gdscutsa.com">
                <div className="relative min-h-[450px] w-full space-y-2 overflow-hidden rounded-2xl bg-zinc-100 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-black">gdscutsa.com</h2>
                      <h3 className="text-gray-600">
                        Google Developer Student Clubs UTSA
                      </h3>
                    </div>

                    <ExternalSVG className="h-6 w-6 fill-slate-800 group-hover:fill-sky-400" />
                  </div>
                  <img
                    alt="gdscutsa.com"
                    className="absolute left-5 shadow-md md:left-10"
                    src="/assets/images/gdscutsa.webp"
                  ></img>
                </div>
              </a>
              <a
                className="group row-span-2 h-full"
                href="https://github.com/zackumar/newspaper-snippets-js"
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-indigo-600 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-white">
                        @newspaper_snippets
                      </h2>
                      <h3 className="text-slate-300">
                        Instagram bot that posts snippets of newspapers from 100
                        years ago!
                      </h3>
                    </div>
                    <ExternalSVG className="h-[24px] w-[24px] fill-slate-300 group-hover:fill-sky-400" />
                  </div>
                  <img
                    alt="newspaper_snippets"
                    className="max-h-[800px] w-full object-contain p-5 md:py-8"
                    src="/assets/images/ns.webp"
                  ></img>
                </div>
              </a>
              <a
                className="group"
                href="https://github.com/zackumar/utsa-cs-bot"
              >
                <div className="relative min-h-[450px] w-full space-y-2 overflow-hidden rounded-2xl bg-zinc-700 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-white">UTSA CS Slack Bot</h2>
                      <h3 className="text-slate-100">
                        A bot to make tutoring a little bit easier for UTSA
                      </h3>
                    </div>

                    <ExternalSVG className="h-6 w-6 fill-slate-100 group-hover:fill-sky-400" />
                  </div>
                  <img
                    alt="slack utsa cs bot"
                    className="absolute left-5 shadow-md md:left-10"
                    src="/assets/images/slack.webp"
                  ></img>
                </div>
              </a>
              <a
                className="group md:col-span-2"
                href="https://github.com/zackumar/FilmMuncher"
              >
                <div className="relative min-h-[450px] w-full space-y-2 overflow-hidden rounded-2xl bg-violet-500 shadow-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-[1.01]">
                  <div className="flex flex-row justify-between p-4">
                    <div>
                      <h2 className="text-2xl text-white">
                        <span>Film Muncher</span>
                      </h2>
                      <h3 className="font-bold text-slate-100">
                        An automatic 35mm/APS (and possibly 120mm) film holder +
                        software for DSLR scanning for MacOS/Linux
                      </h3>
                      <p className="text-sm text-slate-100">
                        Because why spend hours doing something tedious, when
                        you can spend weeks building something to do it for you?
                      </p>
                    </div>

                    <ExternalSVG className="h-6 w-6 fill-slate-100 group-hover:fill-sky-400" />
                  </div>
                  <img
                    alt="film muncher UI"
                    className="absolute left-5 shadow-md md:left-0 md:px-10"
                    src="/assets/images/filmscanner.webp"
                  ></img>
                </div>
              </a>
            </div>
          </section>
          <Footer />
        </motion.div>
      </div>
    </main>
  );
}
