// import React from "react";
import { Link } from "react-router-dom";
import World from "../images/world.png";
import CardComponent from "../components/CardComponent";
import Depot from "../images/depot.jpg";
import Logorec from "../images/logo recyclage.png";
import Plante from "../images/plante.jpg";
import Oiseau from "../images/oiseaux.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="w-ful h-full text-[#13250e] ">
        <div className="bg-[url('/src/images/Hero.jpg')] bg-cover bg-center bg-opacity-50 flex flex-col items-center justify-center h-52 w-full">
          <div className="flex justify-center items-center gap-5 text-sm">
            <div className="flex items-center bg-white bg-opacity-60 gap-2 text-[#13250e] h-8 w-40 justify-center font-semibold">
              <Link>Accueil</Link>
              <p>/</p>
              <Link className="hover:underline">A propos </Link>
            </div>
          </div>
          <div className="font-bold text-white p-4">
            <h3 className="text-5xl">A propos</h3>
          </div>
        </div>

        <div className="bg-cover bg-center bg-opacity-5 h-92 justify-center items-center flex  ">
          <div className="flex flex-col md:flex-row  gap-5 p-6  py-5 pt-10 w-full md:w-[70rem] justify-between items-center ">
            <div className="flex-1 rounded md:pr-16  flex items-end justify-end  ">
              <img
                src={World}
                alt="World"
                className="rounded-full h-60 md:h-72 "
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="px-5 bg-[#f6faf3] shadow-xl w-full text-[#13250e] border-lime-600	text-center md:w-auto">
                <h3 className="font-bold text-2xl font-serif pl-5">
                  Environ : Pour un Futur Durable
                </h3>
                <p className="text-[0.72rem] pt-4">
                  Bienvenue sur Environ, une plateforme dédiée à la préservation
                  de notre planète et à la sensibilisation à l'environnement.
                  Chez Environ, nous croyons en l'importance de chacun dans la
                  protection de notre précieux écosystème. Notre mission est
                  d'éduquer, inspirer et mobiliser les individus de tous âges
                  pour adopter des comportements respectueux de l'environnement.
                </p>
                <p className="text-[0.72rem]  pt-2">
                  Fondé par des passionnés de durabilité, Environ offre une
                  variété de ressources, d'articles informatifs et de conseils
                  pratiques pour aider chacun à réduire son empreinte écologique
                  et à vivre de manière plus durable. Que vous soyez un parent
                  souhaitant transmettre de bonnes habitudes à vos enfants, un
                  éducateur cherchant des ressources pédagogiques ou simplement
                  quelqu'un désirant agir, Environ est là pour vous accompagner.
                </p>
                <p className="text-[0.72rem] pt-2 py-5">
                  Joignez-vous à notre communauté engagée dans la préservation
                  de notre environnement. Explorez nos contenus, participez à
                  nos événements et engagez-vous à faire une différence. Environ
                  vous invite à agir aujourd'hui pour préserver notre planète
                  pour les générations futures. Parce que chaque geste compte,
                  Environ est là pour vous aider à faire le vôtre.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#345427] flex flex-col items-center justify-center h-full md:h-72 w-full">
          <div className="flex justify-center items-center gap-5 text-sm pt-5 md:w-[60%] w-[85%] text-center  ">
            <div className="flex items-center  text-white bg-opacity-60 gap-2  p-6 rounded justify-center font-bold text-2xl">
              <p className=" font">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque aliquid earum dolores repudiandae amet, perspiciatis
                quaerat !
              </p>
            </div>
          </div>
          <div className="font-bold  p-4">
            <button className="text-[#61a146] border border-[#61a146] rounded-xl text-bold text-xl hover:underline bg-[#f6faf3] w-60 h-10 ">
             Je m'engage
            </button>
          </div>
        </div>

        <div className="flex md:grid-col-3 items-center md:gap-5 md:ml-[4.5rem] p-6 md:py-10 mt-[3rem] w-full md:w-[60rem]">
          <CardComponent
            image={Depot}
            title="The Coldest Sunset"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla Maiores et perferendis eaque, exercitationem praesentium nihil."
            hashtags={["#photography", "#travel", "#winter"]}
          />

          <CardComponent
            image={Oiseau}
            title="The Coldest Sunset"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla Maiores et perferendis eaque, exercitationem praesentium nihil."
            hashtags={["#photography", "#travel", "#winter"]}
          />

          <CardComponent
            image={Plante}
            title="The Coldest Sunset"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla Maiores et perferendis eaque, exercitationem praesentium nihil."
            hashtags={["#photography", "#travel", "#winter"]}
          />
        </div>

        <div className="flex flex-col justify-between items-center md:h-48 pt-5 h-full w-full py-5 p-10 bg-opacity-70">
          <div className="container flex flex-col md:flex-row justify-center gap-5 w-full md:w-3/3 h-full">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 md:w-[60%] text-[#13250e] font-semibold">
                <img
                  src={Logorec}
                  alt="Recyclage"
                  className="w-16 md:w-16 bg-cover bg-center h-16"
                />
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, fugit?
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="bg-[#f6faf3] border border-[#2b4522] w-48 md:w-36 h-14 text-[#13250e] font-medium">
                jugnzgnuj
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
