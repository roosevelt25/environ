
// eslint-disable-next-line react/prop-types
const CardComponent = ({ image, title, text, hashtags }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-[#13250e] w-[25rem] md:h-[23rem] bg-[#d3eac8] ">
      <img
        className="w-full h-auto bg-cover bg-center"
        src={image}
        alt={title}
      />
      <div className="px-6 md:py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className=" text-sm">{text}</p>
      </div>
      <div className="px-6 pt-2">
        {hashtags.map((hashtag, index) => (
          <span
            key={index}
            className="inline-block bg-[#345427] rounded-full px-3 py-1 text-sm text-[#f6faf3] mr-2 mb-2"
          >
            {hashtag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
