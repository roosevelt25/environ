import "animate.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero1 from "../images/super hero.png";
import GallerieSection from "../components/GallerieSection";
import Logorec from "../images/Recyclage.png";
import { Blog } from "./Blog";
import { Step } from "../components/Step";
import AOS from "aos";
import "aos/dist/aos.css";
import Tri from "../components/Tri";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* section hero */}
      <Hero />
      <div className="px-8 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:mx-8 lg:py-20">
        <div className="grid row-gap-10 lg:grid-cols-2">
          <div className=" md:ml-14 xl:ml-14 lg:ml-14" data-aos="zoom-out-down">
            <img
              src={Hero1}
              alt="World"
              className="bg-cover bg-center md:h-[20rem] "
            />
          </div>
          <div className=" space-y-5 pt-10 text-center">
            <h3 className=" font-bold text-2xl text-[#3a260e] md:text-4xl max-w-screen-sm mx-auto  lg:mb-16">
              Les Super-Héros du Recyclage
            </h3>
            <p>
              Dans le monde d’Environ, les enfants sont les véritables
              super-héros ! Ils ont le pouvoir de changer le destin de notre
              planète, une poubelle à la fois. Notre mascotte, le Héros du
              Recyclage, les guide dans cette mission cruciale. Ensemble, ils
              trient, recyclent et préservent notre environnement.
              Rejoignez-nous pour former une équipe de super-héros du recyclage
              et sauver notre Terre !
            </p>
            <button className=" border border-[#75551e] hover:bg-[#8c6a1c] md:ml-10 flex justify-center ">
              <Link
                to="decoucrons-le-recyclage"
                className="px-5 p-3 text-sm font-bold text-center"
              >
                Je m&apos;engage
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* section  */}
      <section className=" py-10">
        <div id="card-area">
          <div className="wrapper text-[#355526] ">
            <div className="box-area ">
              <div className="box">
                <img
                  src="https://img.freepik.com/free-photo/close-up-environment-sign-collection_23-2148884839.jpg?t=st=1719308625~exp=1719312225~hmac=5a85328bee334d21df98f7fa115ed5a6bedf59b31c55292d58314fa50cf8d349&w=740"
                  alt=""
                  className="bg-cover bg-center"
                />
                <div className="overlay">
                  <h3 className="leading-6 font-bold">
                    Monde vert, monde sain
                  </h3>
                  <p className="text-[0.85rem]">
                    Le recyclage aide à garder notre planète propre et verte en
                    réduisant les déchets. En recyclant, on économise aussi des
                    ressources naturelles et on protège les habitats des
                    animaux, rendant notre monde plus sain et beau pour tout le
                    monde.
                  </p>
                </div>
              </div>
              <div className="box">
                <img
                  src="https://img.freepik.com/free-photo/close-up-woman-holding-earth-globe_23-2148884837.jpg?t=st=1719308055~exp=1719311655~hmac=637b349eb3457379a58d62673cf4609ada6423a76bd93ad406c973d0a40c480e&w=740"
                  alt=""
                />
                <div className="overlay">
                  <h3 className="leading-6 font-bold">
                    Écologie, chant de la Terre
                  </h3>
                  <p className=" text-[0.85rem] ">
                    L&apos;écologie, c&apos;est prendre soin de notre planète,
                    comme un jardinier qui prend soin de ses plantes. En
                    respectant la nature, nous aidons la Terre à rester belle et
                    pleine de vie, pour nous et pour les générations futures.
                  </p>
                </div>
              </div>
              <div className="box">
                <img
                  src="https://img.freepik.com/free-photo/digital-screen-with-environment-day_23-2148884835.jpg?t=st=1719308385~exp=1719311985~hmac=a7d8b41a6018860342e163da71f482ac1a7150366bc5c18591d7efa55f99cc72&w=740"
                  alt=""
                />
                <div className="overlay">
                  <h3 className="leading-6 font-bold">Éco Monde</h3>
                  <p className="text-[0.85rem]">
                    Éco Monde est un jour où nous nous unissons pour protéger et
                    prendre soin de notre planète. C&apos;est une journée pour
                    planter, recycler et apprendre à vivre en harmonie avec la
                    nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section infos */}
      <div className=" max-w-srceen-xl text-center md:w-full flex  justify-center relative bg-[url('/src/images/recyclage-dechets.jpg')] bg-cover bg-center h-44 md:h-80">
        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50 z-0"></div>
        <div className="max-w-xl  flex items-center mb-10 md:mx-auto sm:text-center mt-[2.5rem] lg:max-w-2xl z-10 text-white md:mb-12">
          <h2
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-"
            data-aos="flip-left"
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
              <span className="relative">Le</span>
            </span>{" "}
            monde de demain c&apos;est nous avec nos actes
          </h2>
        </div>
      </div>
      {/* section tri */}
      <Tri />
      {/* section step */}
      <Step />
      {/* section gallery */}
      <GallerieSection />
      {/* section blog */}
      <Blog />
      {/* section engagement */}
      <div className="flex flex-col  items-center md:h-48 pt-5 pb-5 px-5 md:px-10 h-full w-full bg-[#eaf5e3]">
        <div className="md:flex gap-5 text-[#4c8435] h-full">
          <div className="grid grid-flow-col justify-center items-center">
            <div className="flex items-center gap-4 font-serif">
              <img
                src={Logorec}
                alt="Recyclage"
                className="w-16 md:w-16 bg-cover bg-center h-16"
              />
              <p className="text-[1.2rem] md:text-3xl ">
                Prêt à devenir un héros de l&apos;environnement ?
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="text-[#2c4621] bg-[#f5f6cb] border rounded-lg p-4 border-[#64481f] w-full  font-bold md:px-10 md:text-[1rem] ">
              Participer
            </button>
          </div>
        </div>
      </div>
      {/* section témoignages */}
      <section className="text-neutral-700 dark:text-neutral-300 px-16 my-10">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">Témoignages</h3>
        </div>

        <div className="grid gap-8 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#af901f]"></div>
              <div className="mx-auto -mt-12 w-24  overflow-hidden rounded-full border-2 border-white bg-white">
                <img
                  src="https://img.freepik.com/free-photo/portrait-teenager-home_23-2149332928.jpg?t=st=1719368059~exp=1719371659~hmac=3801401a52772dff1d0bc6f7d8cbef05b17634292d6231e19662b0395b56b97a&w=740"
                  className="bg-cover bg-center h-[5.8rem] "
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Kimberly AHOUI</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  J&apos;ai donné une deuxième vie à un ancien jean en le
                  transformant en sac.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#4e8633]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img
                  src="https://img.freepik.com/free-photo/portrait-young-african-boy_23-2148852712.jpg?t=st=1719367550~exp=1719371150~hmac=c815f7d22b23938aeed0b74941901b8a9d2daf5902c7ccfa83f1411584b7648e&w=740"
                  className="bg-cover bg-center"
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Ange DOSSOU</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  J&apos;arrive à récycler aujourd&apos;hui grâce à ENVIRON.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#af901f]"></div>
              <div className="mx-auto -mt-12 w-24 h-24 overflow-hidden rounded-full border-2 border-white bg-black ">
                <img
                  src="https://img.freepik.com/free-photo/close-up-african-boy-portrait_23-2148860424.jpg?t=st=1719366908~exp=1719370508~hmac=f447e6ceb9e20dae8706286228b4534d4294eb9ff070d4f5542aa7664b5388ad&w=740"
                  className="bg-cover bg-center h-[5.79rem] "
                />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">John EDAH</h4>
                <hr />
                <p className="mt-4">
                  <span className="inline-block pe-2 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                  </span>
                  Merci ENVIRON pour les atelier sur la gestion des déchets. je
                  serai un écologiste pour sauver notre planète.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
