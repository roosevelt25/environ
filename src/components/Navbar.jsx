import { useState } from "react";
import Logo from "../logos/Logo environ 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <nav className="w-full z-20 top-0 start-0 border-gray-200 bg-[#f1f9ec] text-xl">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-16" alt="Logo" />
    </Link>
    <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
      <button
        onClick={toggleNavbar}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="sr-only">
          {isOpen ? "Close main menu" : "Open main menu"}
        </span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={isOpen ? "M16 1L1 13M1 1L16 13" : "M1 1h15M1 7h15M1 13h15"}
          />
        </svg>
      </button>
    </div>
    <div
      className={`items-center justify-between ${
        isOpen ? "block bg-transparent" : "hidden"
      } w-full md:flex md:w-auto md:order-1`}
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
        <li>
          <Link
            to="/"
            className="block py-2 px-3 bg-[#7ebc5f] text-gray-900 md:hover:text-[#7ebc5f] rounded md:bg-transparent md:p-0"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="decoucrons-le-recyclage"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ebc5f] md:p-0"
          >
            Découvrons le recyclage
          </Link>
        </li>
        <li>
          <Link
            to="fabrique-éco"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ebc5f] md:p-0"
          >
            Fabrique Éco
          </Link>
        </li>
        <li>
          <Link
            to="aboutUs"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ebc5f] md:p-0"
          >
            Qui sommes nous
          </Link>
        </li>
        <li className="md:hidden">
          <Link
            type="button"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#7ebc5f] md:p-0"
          >
            Faire un don
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden md:flex md:order-2 space-x-3 rtl:space-x-reverse">
      <Link
        type="button"
        className="hover:bg-[#3d692c] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#3d692c] font-medium rounded-lg px-4 py-2 text-center dark:bg-[#3d692c] dark:hover:bg-[#3d692c] dark:focus:ring-blue-800"
      >
        Faire un don
      </Link>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
