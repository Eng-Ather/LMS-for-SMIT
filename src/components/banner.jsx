
const Banner = () => {
  return (
    <div
    //   className="w-full bg-gradient-to-r from-gray-500 to-green-500 rounded-lg py-1 text-white"
     
      className=" bg-subHeadingColor shadow-lg rounded-lg py-2 px-3"
     
      style={{
        animation: "fadeInSlide 2s ease-in-out",
      }}
    >
      <h4 className="font-serif text-center text-white text-2xl md:text-3xl lg:text-4xl  tracking-wide animate-pulse">
        LMS FOR GULSHAN CAMPUS
      </h4>
      <style>
        {`
          @keyframes fadeInSlide {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
