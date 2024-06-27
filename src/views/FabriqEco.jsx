import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";

const FabriqEco = () => {
  const [videos, setVideos] = useState([
    {
      videoId: "8V2CctBgfYo?t=140", // ID de la vidéo YouTube
      //   title: 'Recycler du papier avec les enfants',
    },
    {
      videoId: "VV-wnq4yyE4",
    },
    {
      videoId: "aHvDaTSfaAM",
    },
    {
      videoId: "A7UV4mRmEYE",
    },
    {
      videoId: "HEW9S_Q4KA4",
    },
    {
      videoId: "SNKb7HZUROw",
    },
    {
      videoId: "q1-qL-EtEjA",
    },
    {
      videoId: "nVGoMrjX_Sw",
    },
    {
      videoId: "xhk96ge8qVk",
    },
    {
      videoId: "FGScChvHkr0",
    },
    {
      videoId: "IZfuLwlNonM",
    },
    {
      videoId: "rj8tyaG720c",
    },
    {
      videoId: "rj8tyaG720c",
    },
    {
      videoId: "j4LnwjgTrJs",
    },
    {
      videoId: "SWR2BR-Ouf0",
    },
    {
      videoId: "-WPRaZ_SO9E",
    },
  ]);

  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Références pour les lecteurs YouTube
  const youtubePlayers = useRef([]);

  useEffect(() => {
    // Fonction pour gérer l'autoplay
    const handlePlay = (index) => {
      if (youtubePlayers.current[index]) {
        youtubePlayers.current[index].playVideo();
      }
    };

    // Fonction pour gérer la pause
    const handlePause = (index) => {
      if (youtubePlayers.current[index]) {
        youtubePlayers.current[index].pauseVideo();
      }
    };

    // Ajoutez des écouteurs d'événements pour les survols
    const videoElements = document.querySelectorAll(".youtube-player");
    videoElements.forEach((video, index) => {
      video.addEventListener("mouseenter", () => handlePlay(index));
      video.addEventListener("mouseleave", () => handlePause(index));
    });

    return () => {
      videoElements.forEach((video, index) => {
        video.removeEventListener("mouseenter", () => handlePlay(index));
        video.removeEventListener("mouseleave", () => handlePause(index));
      });
    };
  }, []);

  return (
    // ... rest of your code ...
    <>
      <div className="max-w-screen-xl flex justify-center pt-[2rem] md:pt-20 py-5 ">
        <div className="max-w-xl   mx-5 text-center lg:max-w-2xl  ">
          <h2
            className="max-w-lg mb-5 font-sans text-[1.2rem] md:text-4xl  font-bold leading-none tracking-tight text-green-700 sm:text-4xl md:mx-auto"
          >
            La Fabrique écologie
          </h2>
          <p className="text-[1rem] text-gray-700 md:text-lg">
            La Fabrique Écologie donne une seconde vie aux vêtements et à tous
            les objets recyclés, contribuant ainsi à réduire les déchets et à
            préserver notre planète.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 pt-20 py-28">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md overflow-hidden youtube-player"
            onMouseEnter={() => setHoveredVideo(index)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <YouTube
              videoId={video.videoId}
              className="w-full h-48 bg-cover bg-center"
              opts={{
                playerVars: {
                  autoplay: hoveredVideo === index ? 1 : 0, // Autoplay uniquement au survol
                },
              }}
              ref={(player) => {
                youtubePlayers.current[index] = player;
              }}
            />
            <h3 className="p-4 text-lg font-semibold text-center text-[#3d692c]">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </>

    // ... rest of your code ...
  );
};

export default FabriqEco;
