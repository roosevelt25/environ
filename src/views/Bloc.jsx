// import React from 'react'
import Imag1 from "../images/volunteering-activism-eco-aware-african-girl-is-cleaning-park-she-is-putting-trash-into-bag.jpg";

import { Link } from "react-router-dom";

function Bloc() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString("fr-FR", options);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div>
      <div className="bg-[url('/src/images/Hero.jpg')] bg-cover bg-center bg-opacity-50 flex flex-col items-center justify-center h-52 w-full">
        <div className="flex justify-center items-center gap-5 text-sm">
          <div className="flex items-center bg-white bg-opacity-60 gap-2 h-8 w-40 justify-center font-semibold">
            <Link>Home</Link>
            <p>/</p>
            <Link className="hover:underline">Bloc</Link>
          </div>
        </div>
        <div className="font-bold text-white p-4">
          <h3 className="text-5xl">Bloc</h3>
        </div>
      </div>

      <div className="pt-10 py-5  grid-cols-2 flex justify-center items-center">
        <div className="text-[#13250e] md:w-[35rem] ">
          <div>
            <img src={Imag1} alt="" className="h-72" />
          </div>
          <div className="text-[0.75rem] pt-2 ">
            {formattedDate} à : {formattedTime}
          </div>
          <div className=" w-[28rem] text-[0.70rem] ">
            <h1 className="text-[1rem] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.!
            </h1>
            <hr className=" bg-[#13250e] h-[0.10rem] " />
            <p className="pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus vero excepturi sapiente sed dolores vitae ad similique
              minus eaque. Quibusdam possimus illo excepturi perspiciatis
              numquam qui nulla, beatae cupiditate consequuntur rerum impedit
              rem id iusto doloribus quasi ipsum itaque repudiandae odit unde
              vero ad tempore et animi cumque? Hic, non?
            </p>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              itaque ad voluptates corporis mollitia voluptatum nisi quisquam
              est quidem veritatis dolores cumque asperiores eveniet autem sit
              nesciunt perferendis voluptate quasi explicabo necessitatibus?
              Illo quod id excepturi odio repudiandae alias repellat ab eos
              numquam qui rem deleniti error a dignissimos nesciunt laudantium
              est animi asperiores eius consequuntur, provident nemo omnis
              delectus non! Optio quod aut quisquam labore officia illo quos
              vero officiis, dicta necessitatibus dolore magni modi quaerat
              deserunt autem repellendus.
            </p>
            <div className="grid grid-cols-2 pt-5 px-5 gap-5 ">
              <img src={Imag1} alt="" />
              <img src={Imag1} alt="" />
            </div>
            <p className="pt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quos delectus similique illo consequuntur, aliquid repudiandae
              iusto labore architecto voluptates, maxime debitis explicabo
              doloremque vel ullam quisquam quae! Rerum quia, alias maiores et
              quas quam vero ullam ipsa architecto praesentium commodi! Rem,
              cupiditate deleniti dignissimos excepturi iusto inventore dolores
              repellendus ipsum, veniam aliquid nisi! Reprehenderit impedit
              magni perferendis ipsa dolore delectus porro consequatur. Ex, rem!
            </p>
          </div>
        </div>
        <div className="text-[#13250e] md:w-[15rem] h-[50rem] ">
          <form className="max-w-md mx-auto mt-5 md:w-[80%] ">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-[#13250e] border  rounded-lg bg-[#d3eac8]  dark:text-white"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-[#13250e] absolute end-2.5 bottom-2.5  border border-[#13250e] bg-[#3d692c]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bloc;
