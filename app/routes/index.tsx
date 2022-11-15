import GithubSVG from '~/assets/GithubSVG';
import LinkedinSVG from '~/assets/LinkedinSVG';

export default function Index() {
  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-5">
      <header className="flex flex-row justify-between pb-5">
        <div className="flex flex-row items-center space-x-2">
          <span className="h-5 w-5 rounded-full bg-yellow-500"></span>
          <p className="text-lg font-medium">ZU</p>
        </div>
        <nav>
          <ul className="flex flex-row items-center space-x-8">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <div className="space-y-5">
        <section className="grid w-full gap-4 md:grid-cols-3">
          <div className="col-span-2 flex h-full w-full flex-col rounded-2xl bg-slate-100 bg-opacity-50 p-10 drop-shadow-lg backdrop-blur-xl">
            <h1 className="text-4xl font-medium">
              Hi, I'm Zack. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Expedita, consequuntur.
            </h1>
            <p className="my-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              corporis numquam eius optio, modi pariatur cum nemo hic
              necessitatibus omnis.
            </p>
            <div className="mt-auto flex flex-row items-center space-x-4">
              <a
                className="transform rounded-full bg-black px-4 py-2 text-white shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105"
                href="mailto:email@example.com"
              >
                Contact Me
              </a>
              <a
                className="transform rounded-full bg-white fill-black p-2 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-blue-500"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <GithubSVG className="h-auto w-5" />
              </a>
              <a
                className="transform rounded-full bg-white fill-black p-2 shadow duration-100 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:fill-blue-500"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Linkedin</span>
                <LinkedinSVG className="h-auto w-5" />
              </a>
            </div>
          </div>
          <img
            className="col-span-1 h-[450px] w-full rounded-2xl object-cover object-center drop-shadow-lg"
            src="assets/images/zack.jpg"
          ></img>
        </section>
        <section className="grid w-full grid-cols-2 gap-4">
          <div className="h-[300px] w-full rounded-2xl bg-blue-500 opacity-70">
            Test
          </div>
          <div className="h-[300px] w-full rounded-2xl bg-green-500 opacity-70">
            Test
          </div>
        </section>
      </div>
    </main>
  );
}
