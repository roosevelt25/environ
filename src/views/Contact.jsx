// import React from "react";
import { Link } from "react-router-dom";
import Imag from "../images/map.jpeg";

function Contact() {
  return (
    <>
      <div className="w-full h-full">
        <div className="bg-[url('/src/images/Hero.jpg')] bg-cover bg-center bg-opacity-50 flex flex-col items-center justify-center h-52 w-full">
          <div className="flex justify-center items-center gap-5 text-sm">
            <div className="flex items-center bg-white bg-opacity-60 gap-2 h-8 w-40 justify-center font-semibold">
              <Link>Home</Link>
              <p>/</p>
              <Link className="hover:underline">Contact</Link>
            </div>
          </div>
          <div className="font-bold text-white p-4">
            <h3 className="text-5xl">CONTACT</h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-1 ml-4 w-full items-center">
            <div className="h-auto w-full md:w-3/4 lg:w-1/2 mx-auto text-center">
              <div className="pt-8 font-medium text-5xl items-center">
                <h3>Have any question?</h3>
                <p>Feel free to contact us</p>
              </div>
              <div className="container px-4 py-8 w-full">
                <form action="" method="post" className="pt-5">
                  <div className="mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      id=""
                      className="border rounded w-full bg-[#f2E3D5] bg-opacity-35 font-medium text-black h-20 pl-3"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Username"
                      type="text"
                      name="username"
                      id=""
                      className="border rounded w-full bg-[#f2E3D5] bg-opacity-35 font-medium text-black h-20 pl-3"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Mail"
                      type="email"
                      name="email"
                      id=""
                      className="border rounded w-full bg-[#f2E3D5] bg-opacity-35 font-medium text-black h-20 pl-3"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Message"
                      required
                      className="border rounded w-full bg-[#F2E3D5] bg-opacity-35 font-medium pl-3"
                    ></textarea>
                  </div>
                  <div>
                    <button className="border rounded w-full font-semibold bg-[#026773] text-[#F2E3D5] h-16 text-xl hover:bg-[#02E5D5] transition-colors duration-200">
                      Send now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 h-screen">
            <div className="">
              <img src={Imag} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
