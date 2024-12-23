import Chairmenimage from "../images/Chairmenimage.jpg";

const ChairmanMessage = () => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-3 md:flex md:items-center">
      {/* Text Content */}
      <div className="md:w-2/3 md:pr-6">
        <h4 className="font-serif text-headingColor text-3xl md:text-4xl text-center">
          Maulana Bashir Farooqi
        </h4>

        <h3 className="font-serif text-center text-subHeadingColor text-lg md:text-2xl mb-2">
          Chairman S.M.I.T
        </h3>

        <p className="text-md text-v leading-relaxed">
          Alhamdollilah, Allah has accorded Saylani Welfare with the highest
          favor by sending those people our way who follow the teachings of the
          Holy Quran and Hadith, give zakat, fidyah, fitrah, khairat and other
          donations to help us help those in need. The purpose of sending this
          message to you is so that you not only spread this message to others
          but also play your part in helping us to continue serving and helping
          the needy till the Day of Judgment.
        </p>
      </div>
      {/* Image */}
      <div className="mt-6 md:mt-0 md:w-1/3">
        <img
          src={Chairmenimage}
          alt="Institute"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ChairmanMessage;
