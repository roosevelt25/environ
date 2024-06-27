/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import Imag from "../images/map.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Contact() {
  const data = [
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/1B40E2F3-0228-493F-B31F-2067EC023756/NW_detail/illustration-thomas-tessier-millepages-1670336628.jpg",
    },
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/37E86522-28FE-4878-83A9-796DBCE365A1/NW_detail/illustration-thomas-tessier-millepages-1670336628.jpg",
    },
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/7E0EEEE5-ADF8-43C5-BEA5-440C8C17883F/NW_detail/illustration-thomas-tessier-millepages-1670336628.jpg",
    },
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/66C642A9-3FFD-4E10-9FCE-924067AC8839/NW_detail/millepages-thomas-tessier-1673521267.jpg",
    },
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/7A58B42D-E115-491E-BAE4-E0540E2195B4/NW_detail/millepages-thomas-tessier-1673521268.jpg",
    },
    {
      imgelink:
        "https://cdn-s-www.ledauphine.com/images/66C642A9-3FFD-4E10-9FCE-924067AC8839/NW_detail/millepages-thomas-tessier-1673521267.jpg",
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
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

        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="Louvre"
          />
        </div>

        {/* new */}

        <div className="grid  mx-4 md:mx-10 pt-10">
          <div className="flex justify-center">
            <img
              className=" w-[35rem] rounded-lg bg-cover h-[12rem] bg-center md:h-[460px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6  gap-y-2">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => setActive(imgelink)}
                  src={imgelink}
                  className="md:h-32 max-w-full cursor-pointer rounded-lg object-cover object-center"
                  alt="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        <section className="text-neutral-700 dark:text-neutral-300 px-10 my-10">
          <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
            <p className="mb-6 pb-2 md:mb-12 md:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>

          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
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
                    Lorem ipsum dolor sit amet eos adipisci, consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
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
                    Neque cupiditate assumenda in maiores repudi mollitia
                    architecto.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
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
                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                    ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div id="card-area">
            <div className="wrapper text-[#8c6a1c] ">
              <div className="box-area ">
                <div className="box">
                  <img
                    src="https://img.freepik.com/free-photo/close-up-environment-sign-collection_23-2148884839.jpg?t=st=1719308625~exp=1719312225~hmac=5a85328bee334d21df98f7fa115ed5a6bedf59b31c55292d58314fa50cf8d349&w=740"
                    alt=""
                    className="bg-cover bgcen"
                  />
                  <div className="overlay">
                    <h3 className="leading-6 font-bold">
                      Monde vert, monde sain
                    </h3>
                    <p>
                      Nature luxuriante, air pur et chantant.Animaux heureux,
                      rivières cristallines. Un havre de paix, pour petits et
                      grands. Préservons ce trésor, fragile et précieux. Gestes
                      éco-responsables, pour un avenir lumineux.Recyclage, tri,
                      économies, Ensemble, créons un monde harmonieux.
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
                    <p>
                      {" "}
                      Symbiose fragile, entre l&apos;homme et la nature.
                      Respecter, protéger, pour une vie future. Forêts, océans,
                      montagnes, trésors à préserver. Biodiversité riche, à
                      jamais chérir. Pollution, gaspillage, menaces
                      grandissantes. Prise de conscience, actions urgentes.
                      Réduire, recycler, alternatives à inventer. Ensemble, le
                      monde, nous allons le réinventer. Écologie, responsabilité
                      partagée. Planète bleue, à jamais préservée.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <img
                    src="https://img.freepik.com/free-photo/digital-screen-with-environment-day_23-2148884835.jpg?t=st=1719308385~exp=1719311985~hmac=a7d8b41a6018860342e163da71f482ac1a7150366bc5c18591d7efa55f99cc72&w=740"
                    alt=""
                  />
                  <div className="overlay">
                    <h3 className="leading-6 font-bold">Rider</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Similique unde ab amet laborum at eius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 mx-10 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/7f/6b/b5/7f6bb5cde142df4a3486a4e274712339.jpg"
            alt=""
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/236x/ad/cd/53/adcd535851f6487d845d7ec287a0b1a0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Contact;
