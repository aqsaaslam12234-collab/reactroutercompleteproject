export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
            TechStack
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            About
          </a>
          <div className="relative group">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
            >
              Pricing
            </a>
          </div>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-2.5 px-5 focus:outline-none hover:bg-gray-200 rounded-lg text-base font-medium text-gray-700 transition-all duration-200 hover:shadow-md">
            Sign In
          </button>
          <button className="inline-flex items-center bg-linear-to-r from-indigo-500 to-purple-600 text-white border-0 py-2.5 px-5 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
