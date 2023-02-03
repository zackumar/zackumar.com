export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-between space-y-1 pt-5 text-center text-xs text-gray-500 sm:space-y-0 md:flex-row lg:text-left ">
        <p>
          Made with ❤️ by Zack Umar with{' '}
          <a className="text-white" href="https://remix.run">
            <i>Remix</i>
          </a>
        </p>
      </div>
    </footer>
  );
}
