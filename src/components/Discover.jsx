import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import HowRecycl from "../images/HowRecycl.png";
import Vert from "../images/Vert-removebg-preview.png";
import Jaune from "../images/Jaune-removebg-preview.png";
import Rouge from "../images/Rouge-removebg-preview.png";
import Blue from "../images/Bleu-removebg-preview.png";
import QuizRecyclage from "./QuizRecyclage";
import "../style/Style.css";
import Slidepage from "../views/Slidepage";

export default function Discover() {
  useEffect(() => {
    AOS.init(); // Initialisation de AOS
  }, []);

  return (
    <>
      <div className=" md:mx-20 ">
        <div className=" flex justify-center px-5">
          <div className="flex justify-center flex-wrap items-center  ">
            <div className="md:flex-1 md:mx-20 animate__animated   animate__fadeInLeft">
              <img
                src="https://img.freepik.com/free-vector/speech-bubble-with-interrogation-sign-layout_24877-82509.jpg?t=st=1719399499~exp=1719403099~hmac=9befa2359a3a59809bde4de83d49995a938f5374665caf091b2fba189558bccc&w=740"
                alt="why recycle"
                className="bg-cover bg-center"
              />
            </div>
            <div className=" mx-1 md:flex-1 animate__animated animate__fadeInRight ">
              <h3 className="md:text-3xl text-[1.2rem] font-bold text-center text-[#ccb726] ">
                Pourquoi on recycle ? (Protéger la planète, économiser les
                ressources, réduire les déchets)
              </h3>
              <p className=" py-5 text-[1rem] md:text-[1.5rem] ">
                Pour protéger la planète et préserver les ressources naturelles,
                en évitant de gaspiller de l&apos;énergie et des matières
                premières.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex justify-center px-5 md:ml-16 py-10">
          <div
            className="flex justify-center flex-wrap items-center "
            data-aos="zoom-out-down"
          >
            <div className=" mx-1 md:flex-1 ">
              <h3 className="md:text-3xl text-[1.2rem] font-bold text-center text-[#ccb726]">
                Comment le recyclage fonctionne-t-il ?
              </h3>
              <p className="py-5 text-[1rem] md:text-[1.5rem] ">
                On trie les déchets dans différentes poubelles, puis ils sont
                collectés et transformés en nouveaux produits.
              </p>
            </div>
            <div className="md:flex-1">
              <img
                src={HowRecycl}
                alt="why recycle"
                className="bg-cover bg-center h-[25rem] md:ml-10 "
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="max-w-xl  md:mx-auto px-5 text-center lg:max-w-2xl  ">
            <h2
              className="max-w-lg mb-5 text-[1.2rem] md:text-3xl indent-8 font-bold leading-none tracking-tight text-green-700 sm:text-4xl md:mx-auto"
              data-aos="fade-right"
            >
              Les différentes poubelles
            </h2>
            <p className="mx-1 text-gray-700 md:text-lg">
              Si tu penses que oui, regarde si le déchet a un logo de recyclage
              sur l&apos;emballage. Si c&apos;est le cas, et qu&apos;il est vide
              et propre, alors il peut aller dans la poubelle de recyclage.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 mx-20 md:grid-cols-4 ">
              <div className=" ">
                <div className="relative flex justify-center md:overflow-hidden  bg-no-repeat">
                  <img
                    src={Vert}
                    className="md:max-w-xl max-w-[20rem] right-5 bg-cover bg-center "
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="relative max-w-xs flex justify-center  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={Jaune}
                    className="md:max-w-xl max-w-[20rem] right-5 bg-cover bg-center"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="relative max-w-xs flex justify-center  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={Rouge}
                    className="md:max-w-xl max-w-[20rem] right-5 bg-cover bg-center"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <div className="relative max-w-xs  flex justify-center overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src={Blue}
                    className="md:max-w-xl max-w-[20rem] right-5 bg-cover bg-center"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <QuizRecyclage />
        </div>

        <div className="max-w-screen-xl flex justify-center pt-[2rem] md:pt-20 py-5 ">
          <div className="max-w-xl   mx-5 text-center lg:max-w-2xl  ">
            <h2
              className="max-w-lg mb-5 font-sans text-[1.2rem] md:text-3xl  font-bold leading-none tracking-tight text-green-700 sm:text-4xl md:mx-auto"
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
                <span className="relative">Quelques</span>
              </span>{" "}
              impactes des déchets sur l&apos;envrironnement
            </h2>
            <p className="text-[1rem] text-gray-700 md:text-lg">
              Les déchets, lorsqu&apos;ils ne sont pas gérés correctement,
              peuvent avoir des conséquences dévastatrices sur notre planète,
              affectant la biodiversité, la qualité de l&apos;air et de
              l&apos;eau, ainsi que notre santé.
            </p>
          </div>
        </div>

        <div className="mx-10 py-12">
          <Slidepage />
        </div>
      </div>
    </>
  );
}
