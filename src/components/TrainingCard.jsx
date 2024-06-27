import React, { useState } from "react";
import anime from "animejs";
import card1Image from "../gif/world.gif";
import card2Image from "../icons/recycling.png";
import card3Image from "../gif/Animation - 1717491265771.gif";
import card4Image from "../gif/bricolage.gif";
import Imag1 from "../images/Recycla children.jpg"
import Imag2 from "../images/Recyclage children 2.jpg"
import Imag3 from "../images/Waste plastics.jpg"
// import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Monde vert, monde sain",
    content:
      "Nature luxuriante, air pur et chantant.Animaux heureux, rivières cristallines. Un havre de paix, pour petits et grands. Préservons ce trésor, fragile et précieux. Gestes éco-responsables, pour un avenir lumineux.Recyclage, tri, économies, Ensemble, créons un monde harmonieux.",
    image: card1Image,
  },
  {
    title: "Écologie, chant de la Terre",
    content:
      "Symbiose fragile, entre l'homme et la nature. Respecter, protéger, pour une vie future. Forêts, océans, montagnes, trésors à préserver. Biodiversité riche, à jamais chérir. Pollution, gaspillage, menaces grandissantes. Prise de conscience, actions urgentes. Réduire, recycler, alternatives à inventer. Ensemble, le monde, nous allons le réinventer. Écologie, responsabilité partagée. Planète bleue, à jamais préservée.",
    image: card2Image,
  },
  {
    title: "Trions, pour un monde propre et sain",
    content:
      "Gestes simples, pour un futur certain. Papier, carton, verre, métal, Chaque déchet, dans son canal. Plastique, bois, tissu, compost, Trions bien, évitons le gaspillage au plus haut coût. Protègeons la planète, notre bien commun, Le tri, un geste pour un avenir harmonieux.",
    image: card3Image,
  },
  {
    title: "Bricolage malin, planète propre !",
    content:
      "Donnez une seconde vie à vos chutes de bois, peinture, tuyaux... Meubles, déco, jeux : créez et inventez ! Réduisez, recyclez, offrez : gestes écologiques et solidaires. Bricolage malin : pour une planète plus belle et durable !",
    image: card4Image,
  },
];

const TrainingCard = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // const handleClick = () => {
  //   setIsAnimating(true);
  // };

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <div className="max-w-screen-xl mx-auto md:px-10 xl:py-16 lg:py-10 flex justify-center text-[#14240f] ">
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`from-green-400 to-green-500 rounded-lg p-6 animate__animated animate__backInRight text-center shadow-2xl md:w-[23rem] xl:w-[25rem] lg:w-[25rem] w-[22.5rem] ${
              isAnimating ? "animate " : ""
            }`}
          >
            <div className="hover:bg-[#5fa141] rounded-full p-3 inline-block mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="h-12 w-12 text-white"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-base">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCard;

// Create a CSS class named "animate" in your CSS file to define the animation styles
