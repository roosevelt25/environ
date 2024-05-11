// import React from 'react';
import { Link } from "react-router-dom";

const BlogCard = ({ imageUrl, title, excerpt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-[#13250e] bg-[#f6faf3] ">
      <img className="w-full h-32 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-[0.75rem] ">{excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-[0.75rem]  ">
        <Link className="inline-block  bg-[#2b4522]  h-8 border border-[#345427] text-white py-2 px-4 rounded">
          More reads
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
