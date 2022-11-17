import EmailSVG from '~/assets/EmailSVG';
import GithubSVG from '~/assets/GithubSVG';
import LinkedinSVG from '~/assets/LinkedinSVG';
import Header from '~/components/Header';
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '~/constants/links';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-5xl flex-col p-5 pb-16">
      <Header />
      <div className="space-y-5">
        <section className="grid w-full grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50.0 }}
            animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
            transition={{ duration: 1.0, delay: 1.5 }}
            className="col-span-2 flex h-full w-full flex-col rounded-3xl bg-[url('/assets/images/maincard.jpg')] bg-cover bg-center p-12 shadow-md"
          >
            <h1 className="text-4xl font-medium">
              Hi, I'm Zack Umar, computer science student and aspiring software
              engineer.
            </h1>
            <p className="my-8 text-gray-700">
              Aspiring software engineer with a passion for building and
              creating. Interested in anything everything in tech, especially
              anything that requires programming.
            </p>
            <div className="mt-auto flex flex-row items-center space-x-4">
              <a
                className="flex transform flex-row items-center space-x-1 rounded-full bg-zinc-900 px-5 py-3 text-white shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <span className="fill-white">
                  <EmailSVG className="h-auto w-5" />
                </span>
                <span>Contact Me</span>
              </a>
              <a
                className="transform rounded-full bg-white fill-black p-3 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-blue-500"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <GithubSVG className="h-auto w-5" />
              </a>
              <a
                className="transform rounded-full bg-white fill-black p-3 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-blue-500"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinSVG className="h-auto w-5" />
              </a>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 1.0 }}
            className="-order-1 col-span-1 h-[300px] w-full rounded-3xl object-cover object-center shadow-md sm:h-[450px] md:order-none"
            src="assets/images/zack.jpg"
          ></motion.img>
        </section>
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, scale: 0.9, y: 20.0 }}
          animate={{ opacity: 1, scale: 1.0, y: 0.0 }}
          transition={{ duration: 1.0, delay: 2.0 }}
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
                  Well-organised, problem solving, with high attention to
                  detail. Fan of tennis, outdoor activities, 3D printing and
                  sometimes reading (sometimes).
                </p>
              </div>
            </div>
          </section>
          {/* <section id="projects" className="grid w-full grid-cols-1 gap-5">
            <div className="w-full space-y-4 rounded-2xl bg-slate-100 p-12 shadow-md">
              <h2 className="text-3xl">Projects</h2>
            </div>
          </section> */}
        </motion.div>
      </div>
    </main>
  );
}
