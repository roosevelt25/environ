import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Saveworld from "../images/world.png"



export const Step = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl items-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#14240f] sm:text-4xl md:mx-auto">
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
            <span className="relative">7</span>
          </span>{" "}
          défis pour devenir un super-héros du tri !
        </h2>
        <p className="text-base text-[#14240f] md:text-lg">
          7 missions ultra-cool vous attendent pour devenir un pro du tri et
          protéger notre planète. A vos masques et capes, on y va !
        </p>
      </div>
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex" data-aos="fade-up">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-[#14240f] "
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-[#8c6a1c] ">Mission Minimisation</p>
              <p className="text-[#14240f]">
                Moins de choses, moins de déchets ! Achète malin, choisis
                durable, finis ton assiette !
              </p>
            </div>
          </div>
          <div className="flex" data-aos="fade-up">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-[#8c6a1c]">Tri Magique</p>
              <p className="text-[#14240f]">
                Chaque déchet dans sa maison ! Papier, carton, verre, plastique,
                métal... ne se mélangent pas !
              </p>
            </div>
          </div>
          <div className="flex" data-aos="fade-up">
            <div className="flex flex-col items-center mr-4 ">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-[#8c6a1c] ">Pouvoir Compostage</p>
              <p className="text-[#14240f]">
                Les déchets organiques, tels que les épluchures de fruits et
                légumes, les restes de repas et le marc de café, peuvent être
                compostés. Le compost est un excellent amendement pour le jardin
                qui permet de nourrir les sols et de réduire l&apos;utilisation
                d&apos;engrais chimiques.
              </p>
            </div>
          </div>
          <div className="flex" data-aos="fade-up">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-[#8c6a1c] ">Réutiliser et réparer</p>
              <p className="text-[#14240f]">
                Avant de jeter un objet, il faut toujours se demander s&apos;il
                peut être réutilisé ou réparé. Il existe de nombreuses astuces
                pour donner une seconde vie aux objets cassés ou abîmés. On peut
                par exemple:<p>Réparer un meuble cassé</p>{" "}
                <p>Transformer un vieux vêtement en sac à main</p>{" "}
                <p>Donner une nouvelle fonction à un objet.</p>
              </p>
            </div>
          </div>
          <div className="flex" data-aos="fade-up">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-xl font-bold text-[#3f6a2b] ">Success</p>
              <p className="text-[#14240f]" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src={Saveworld}
            alt=""
            data-aos="zoom-in-left"
          />
        </div>
      </div>
    </div>
  );
};
