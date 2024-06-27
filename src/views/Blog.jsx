import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Recycl_Book from "../images/LeRecycl.png";
import DechetRecycl from "../images/DechetRecycl.png";
import EcoRecycl from "../images/EcoRecycl.png";

export const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:mx-10 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          data-aos="fade-right"
        >
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Re</span>
          </span>
          trouve quelques livre sur la gestion des déchets.
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow  rounded shadow-sm">
          <img
            src={Recycl_Book}
            className="bg-cover bg-center w-full "
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p
              className="md:inline-block mb-3 text-xl md:text-2xl font-bold leading-5  duration-200 "
            >
              LeRecycl_BOOK 2019_2020
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              to={
                "https://smd3.fr/wp-content/uploads/2019/10/SMD3_LeRecycl_BOOK_2019_2020_BD.pdf"
              }
              aria-label=""
              className="inline-flex items-center hover:text-white p-3 justify-center bg-gradient-to-r text-black border text-center border-[#75561e] hover:from-[#3f6a2b] hover:to-[#8c6b1c] md:p-4 rounded-lg font-bold transition-colors duration-200 md:text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Télécharge maintenant
            </Link>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow  rounded shadow-sm">
          <img
            src={DechetRecycl}
            className="bg-cover bg-center w-full "
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p
              aria-label="Category"
              title="Simple is better"
              className="md:inline-block mb-3 text-xl md:text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Gestion et prévention des déchets{" "}
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              to={
                "https://paysduneubourg.fr/wp-content/uploads/2017/12/Livret-p%C3%A9dagogique-d%C3%A9chets_2017.pdf"
              }
              aria-label=""
              className="inline-flex items-center p-3 hover:text-white justify-center bg-gradient-to-r text-black border text-center border-[#75561e] hover:from-[#3f6a2b] hover:to-[#8c6b1c] md:p-4 rounded-lg font-bold transition-colors duration-200 md:text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Télécharge maintenant
            </Link>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow  rounded shadow-sm">
          <img src={EcoRecycl} className="bg-cover bg-center w-full " alt="" />
          <div className="p-5 border border-t-0">
            <p
              className="md:inline-block mb-3 text-xl md:text-2xl font-bold leading-5 "
            >
              L&apos;écologie un monde vert
            </p>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <Link
              to={
                "https://www.amisdelaterre.be/wp-content/uploads/2016/08/ebookecologie240516finalfinal.pdf"
              }
              aria-label=""
              className="inline-flex items-center p-3 hover:text-white justify-center bg-gradient-to-r text-black border text-center border-[#75561e] hover:from-[#3f6a2b] hover:to-[#8c6b1c] md:p-4 rounded-lg font-bold transition-colors duration-200 md:text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Télécharge maintenant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
