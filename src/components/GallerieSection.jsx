import React from "react";
// Import Swiper React components

// import { Swiper, SwiperSlide } from "swiper/react";
// import Dantokpa from "../images/Dantokpa before.jpeg";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// import "../style/Style.css";

// // import required modules
// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function GallerieSection() {
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
    "https://cdn-s-www.ledauphine.com/images/66C642A9-3FFD-4E10-9FCE-924067AC8839/NW_detail/millepages-thomas-tessier-1673521267.jpg"
  );

  return (
    <>
      <div className="max-w-screen-xl  flex justify-center items-center text-center">
        <div className="mx-10 items-center md:ml-20 sm:text-center lg:max-w-2xl ">
          <h2 className="max-w-lg mb-6 font-sans w-full text-2xl font-bold leading-none tracking-tight text-[#14240f] sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute text-[#2c4621] top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
              <span className="relative">Des</span>
            </span>{" "}
            actions concrètes pour un avenir durable{" "}
          </h2>
        </div>
      </div>
      <div className="grid md:gap-1 mx-4 md:mx-10 ">
        <div className="flex justify-center">
          <img
            className=" w-[35rem] rounded-lg bg-cover md:w-[50rem] h-[12rem] bg-center md:h-[20rem]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-y-2">
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
    </>
  );
}
