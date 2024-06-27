import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className=" min-h-screen py-8">
      <div className=" mx-10 px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-[#3d692c] mb-2">
            À propos de nous
          </h1>
          <img src="" alt="" />
          <p className="text-lg text-gray-600 text-center max-w-xl">
            Bienvenue sur notre plateforme éducative dédiée à la gestion des
            déchets ! Notre mission est de sensibiliser et d'informer le public
            sur l'importance du recyclage, de la réduction et de la
            réutilisation des déchets. Nous croyons que chacun peut contribuer à
            créer un environnement plus propre et plus durable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              Notre équipe
            </h2>
            <p className="text-gray-600 mb-4">
              Notre équipe est composée de passionnés de l'environnement,
              d'experts en gestion des déchets et de pédagogues dévoués. Nous
              travaillons ensemble pour développer des ressources éducatives
              attractives et accessibles à tous.
            </p>
            {/* Affichez des photos de l'équipe si nécessaire */}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">
              Nos valeurs
            </h2>
            <ul className="list-disc text-gray-600">
              <li>Respect de l'environnement</li>
              <li>Responsabilité envers la planète</li>
              <li>Innovation pédagogique</li>
              <li>Accès à l'information pour tous</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Rejoignez-nous !
          </h2>
          <p className="text-gray-600 mb-4">
            Vous souhaitez participer à la mission de sensibilisation à la
            gestion des déchets ? Rejoignez notre communauté en vous
            abonnant à notre newsletter, en partageant nos ressources et en
            nous contactant pour toute question ou suggestion.
          </p>
          {/* Affichez un formulaire d'inscription à la newsletter */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;