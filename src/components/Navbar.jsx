import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#ffffff] text-[#3d692c] h-[5rem]  w-full">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 xl:px-0">
          <div>
          <h4 className="font-[500] text-3xl">Environ&#174;</h4>
        </div>

        <div className="flex justify-between font-semibold">
          <nav
            className={`flex gap-12 text-sm items-center justify-between ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <ul className="no-underline  flex  gap-5 justify-center">
              <li>
                <Link to={"../views/Home.jsx"}>HOME</Link>
              </li>
              <li>
                <Link to={"../views/Collective.jsx"}>SECTEURS</Link>
              </li>
              <li>
                <Link to={"../views/Projet.jsx"}>PROJECTS</Link>
              </li>
              <li>
                <Link to={"../views/AboutUs.jsx"}>ABOUT US</Link>
              </li>
              <li>
                <Link to={"../views/Bloc.jsx"}>BLOC</Link>
              </li>
              <li>
                <Link to={"../views/Contact.jsx"}>CONTACT</Link>
              </li>
            </ul>
            <div className="flex gap-5 text-sm">
              <button className="  hover:text-white transition-colors duration-200">
                SIGN UP
              </button>
              <div className="border-separate bg-black w-0.5 h-20"></div>
              <button className="  hover:text-white transition-colors duration-200">
                DONATE NOW
              </button>
            </div>
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
