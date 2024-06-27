import React, { useRef, useEffect } from "react";
import Carousel from "hero-carousel"; // Assurez-vous que 'hero-carousel' est bien installé
import Imag2 from "../images/hero 2.jpg";
import Imag3 from "../images/hero 3.jpg";
import "../style/Style.css"; // Assurez-vous que 'Style.css' est bien importé
import { Link } from "react-router-dom";

const Hero = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new Carousel(carouselRef.current, 5000);
    }
  }, []);
  const headingStyle = {
    fontFamily: "'Helvetica Now Text Medium', Helvetica, Arial, sans-serif",
  };

  return (
    <div ref={carouselRef} className="carousel">
      <div className="carousel__slides " tabIndex="0">
        <div className="carousel__slide">
          <div className="carousel__slide-content">
            <h2 className="carousel__slide-title font-sans text-4xl font-medium leading-[1.5] my-class" style={headingStyle}>
               Apprends à sauver la planète !
            </h2>
            <p className="carousel__slide-description font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-200">
              Apprends à devenir un super-héros de la planète ! Ce site te
              montre comment gérer tes déchets, réduire le gaspillage et
              protéger la nature.
            </p>
            <Link to='decoucrons-le-recyclage' className="carousel__slide-button text-sm ">
              Découvre le recyclage
            </Link>
          </div>
          <img src="https://img.freepik.com/free-photo/close-up-young-woman-activist-near-ecology-concept-collage_273609-37372.jpg?t=st=1719302222~exp=1719305822~hmac=449cfb29837401aaf5774d7dc71049f51a0dcc3f500c7d87d6bf2b4f58e71390&w=740" className="carousel__slide-image bgcover bg-center" alt="Image" />
        </div>
        <div className="carousel__slide">
          <div className="carousel__slide-content">
            <h2 className="carousel__slide-title font-sans text-4xl font-medium leading-[1.5]">
            La planète te remercie !            </h2>
            <p className="carousel__slide-description font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-200">
            Fais un geste pour l&apos;environnement.
            </p>
            <a href="#0" className="carousel__slide-button">
              Recycle !
            </a>
          </div>
          <img src={Imag2} className="carousel__slide-image" alt="Image" />
        </div>
        <div className="carousel__slide">
          <div className="carousel__slide-content ">
            <h2 className="carousel__slide-title font-sans text-4xl font-medium leading-[1.5]">
            Tri, c&apos;est fun !            </h2>
            <p className="carousel__slide-description font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-200">
            Des jeux et des astuces pour devenir un expert du tri.
            </p>
            <a href="#0" className="carousel__slide-button text-sm ">
              les secrets du tri
            </a>
          </div>
          <img src={Imag3} className="carousel__slide-image" alt="Image" />
        </div>
      </div>
      <div className="carousel__controls"></div>
    </div>
  );
};

export default Hero;
