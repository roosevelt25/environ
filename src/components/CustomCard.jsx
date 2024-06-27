import React from 'react';

const CustomCard = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="bg-[#d3eac8] text-[#13250e] rounded-lg hover:bg-[#4c8435] hover:text-white flex max-xl:grid-cols-2 md:grid-cols-2 md:py-5 lg:py-4 xl:py-5">
    <div className="flex flex-row md:flex-row items-start md:items-center">
      <div className="px-8">
        <h3 className="font-bold text-xl font-serif">{title}</h3>
        <p className="py-2 pt-2">{description}</p>
        <button className="h-10 bg-green-950 w-48 md:w-48 xl:w-[15rem] rounded-xl font-bold text-white">{buttonText}</button>
      </div>
    </div>
    <div className="flex items-end justify-center">
      <img src={imageSrc} alt="" className="  " />
    </div>
  </div>
  
  );
};

export default CustomCard;
