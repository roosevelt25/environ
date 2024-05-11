import React from 'react';

const TestimonialCard = ({ name, testimonial, imageUrl }) => {
  // Fonction pour tronquer le texte à 30 mots
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length <= 30) {
      return text;
    }
    return words.slice(0, 30).join(' ') + '...';
  };

  return (
    <div className=" shadow-lg rounded-lg p-6 border-2 border-solid text-[#13250e]  bg-[#e9f5e3]  ">
      <div className="flex flex-col items-center">
        <p className=" text-gray-600 font-bold">{truncateText(name)}</p>
        <p className="text-gray-500 text-[1rem] ">{truncateText(testimonial)}</p>
        <img className=" w-16 rounded-full mx-auto md:absolute md:ml-[1.8rem] md:mt-[10rem] " src={imageUrl} alt={name} />
      </div>
      <div className="">
      </div>
    </div>
  );
};

export default TestimonialCard;
