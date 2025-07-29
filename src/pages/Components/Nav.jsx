import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {"{RuPeSh}."}
          </span>
        </Link>

        {/* Right Action Button */}
        <div className="flex items-center lg:order-2">
          <Link
            to="/create"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Create Blog
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/usestate"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:text-white"
              >
                useState Demo
              </Link>
            </li>
            <li>
              <Link
                to="/edit/blogs/1"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:text-white"
              >
                Edit Sample
              </Link>
            </li>
            <li>
              <Link
                to="/single/1"
                className="block py-2 pl-3 pr-4 text-gray-700 hover:text-purple-700 lg:p-0 dark:text-gray-400 dark:hover:text-white"
              >
                Single View
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
