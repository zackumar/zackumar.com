export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-between space-y-1 pt-5 text-center text-xs text-gray-500 sm:space-y-0 md:flex-row lg:text-left ">
        <p>
          Made with ❤️ by Zack Umar with{' '}
          <a href="https://remix.run" className="hover:text-gray-600">
            <u>
              <i>Remix</i>
            </u>
          </a>
        </p>
      </div>
    </footer>
  );
}
