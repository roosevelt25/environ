// import React from 'react';

// eslint-disable-next-line react/prop-types
const CustomTextSection = ({ text }) => {
  return (
    <div className="md:h-[3.5rem] flex justify-center text-[#345427]  bg-[#e9f5e3] ">
      <p className="m-2 ml-4">{text}</p>
    </div>
  );
};

export default CustomTextSection;
