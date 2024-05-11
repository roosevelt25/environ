import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="">
        <div className="bg-[#026773] text-white px-5 sm:px-8 md:px-10 lg:px-14 h-[5rem] flex items-center justify-between w-full">
          <div>
            <h4 className="font-[500] text-3xl">Environ&#174;</h4>
          </div>

          <div className="flex justify-between font-semibold">
            <nav className="flex gap-12 text-sm">
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/Home.jsx"}>HOME</Link>
                </li>
              </ul>
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/Collective.jsx"}>SECTEURS</Link>
                </li>
              </ul>
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/Projet.jsx"}>PROJECTS</Link>
                </li>
              </ul>
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/AboutUs.jsx"}>ABOUT US</Link>
                </li>
              </ul>
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/Bloc.jsx"}>BLOC</Link>
                </li>
              </ul>
              <ul className="no-underline hover:underline">
                <li>
                  <Link to={"../views/Contact.jsx"}>CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="font-semibold">
            <div className="flex gap-5 text-sm">
              <button className="bg-[#02E5D5] hover:bg-[#02E5D5] hover:text-white transition-colors duration-200">
                SIGN UP
              </button>
              <div className="border-separate bg-white w-0.5 h-20"></div>
              <button className="bg-[#02E5D5] hover:bg-[#02E5D5] hover:text-white transition-colors duration-200">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
