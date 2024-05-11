// import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../icons/facebook-f.svg";
import LinkedIn from "../icons/LinkedIn-1.png";

function Footer() {
  return (
    <div className="w-full bg-[#345427] flex flex-col items-center">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 p-6  text-[#f6faf3]">
        <div className="flex flex-col items-center pt-4 md:w-1/4">
          <div className="flex flex-col items-center justify-between">
            <div>
              <h4 className="font-[500] text-3xl">Environ&#174;</h4>
            </div>
            <div className="flex gap-3 pt-6">
              <button className="border border-[#345427] hover:bg-[#d3eac8] hover:text-white transition-colors duration-200">
                <img src={Facebook} alt="" className="h-10 bg-green" />
              </button>
              <button className="rounded-full h-15 border border-[#345427] w-10 text-center justify-between items-center hover:bg-[#d3eac8] hover:border-[#345427] hover:text-white transition-colors duration-200">
                <img src={LinkedIn} alt="" className="h-full text-white" />
              </button>
              <button className="hover:bg-[#d3eac8] border border-[#345427] hover:text-white transition-colors duration-200">
                <img src={Facebook} alt="" className="h-10 bg-green" />
              </button>
              <button className="hover:bg-[#d3eac8] border border-[#345427] hover:text-white transition-colors duration-200">
                <img src={Facebook} alt="" className="h-10 bg-green" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 md:w-1/4">
          <div className=" text-2xl">
            <h2 className=" font-serif">Information</h2>
          </div>
          <div className="pt-6 text-sm">
            <ul className="flex flex-col gap-2">
              <li>
                <Link>HOME</Link>
              </li>
              <li>
                <Link>SECTEURS</Link>
              </li>
              <li>
                <Link>PROJECTS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 md:w-1/4">
          <div className=" text-2xl">
            <h2 className=" font-serif">Information</h2>
          </div>
          <div className="pt-6 text-sm ">
            <ul className="flex flex-col gap-2">
              <li>
                <Link>HOME</Link>
              </li>
              <li>
                <Link>SECTEURS</Link>
              </li>
              <li>
                <Link>PROJECTS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 md:w-1/4">
          <div className=" text-2xl">
            <h2 className="font-serif">Newsletter</h2>
          </div>
          <div className="pt-6 text-sm">
            <ul className="flex flex-col gap-2">
              <li>
                <Link>HOME</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="items-center text-white text-xm pt-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2023 Nous. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
