import React from 'react';

const CustomCard = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="bg-[#d3eac8] text-[#13250e] rounded-lg hover:bg-[#4c8435] hover:text-white flex flex-row justify-between">
    <div className="flex flex-col md:flex-row items-start md:items-center md:pr-10">
      <div className="px-8">
        <h3 className="font-bold text-xl font-serif">{title}</h3>
        <p className="py-2 pt-2">{description}</p>
        <button className="h-10 bg-green-950 w-48 md:w-48  rounded-xl font-bold text-white">{buttonText}</button>
      </div>
    </div>
    <div className="flex items-end pb-10">
      <img src={imageSrc} alt="" className="  " />
    </div>
  </div>
  
  );
};

export default CustomCard;
