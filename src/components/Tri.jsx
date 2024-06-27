import React from "react";
import "../style/Style.css"

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, content }) => {
  return (
    <div
      className="card relative  ease-in-out  overflow-hidden  h-[8rem] md:h-[10rem] lg:h-[500px] bg-cover bg-center shadow-md transition-all duration-500 hover:scale-105"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-0 flex items-center justify-center flex-col p-6 text-white transition-opacity duration-500 hover:opacity-100">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

const Tri = () => {
  const cardData = [
    {
      image: "https://img.freepik.com/free-photo/young-woman-with-afro-haircut-holding-bag-with-plastic-waste_273609-21207.jpg?t=st=1719301850~exp=1719305450~hmac=3d5ee50aa8baf9614dec57824f1a90d213f19ddd0ca3731d05ee8f85f03c121a&w=740",
      title: "Carte 1",
      content: "Contenu de la carte 1",
    },
    {
      image: "https://img.freepik.com/free-photo/embarrassed-female-volunteer-cleans-area-from-garbage_273609-30112.jpg?t=st=1719301159~exp=1719304759~hmac=14bc00a59d61b8416abafc9d322d70dd027c88f081982850c851d36464e7833d&w=740",
      title: "Carte 2",
      content: "Contenu de la carte 2",
    },
    {
      image: "https://img.freepik.com/free-photo/unhappy-dissatisfied-ethnic-woman-with-dreadlocks-wears-sweatshirt-holds-trash-bag_273609-50233.jpg?t=st=1719301322~exp=1719304922~hmac=2c0228fc3cae42c5223e1220f266a4a4edb410126b396045aa90fd9a00635d4c&w=740",
      title: "Carte 3",
      content: "Contenu de la carte 3",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3 mx-10 pt-10">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Tri;