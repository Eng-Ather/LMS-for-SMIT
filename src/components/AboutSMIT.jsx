import React from "react";
import { useNavigate } from "react-router-dom";
import AboutSectionImage from "../images/AboutSectionImage.jpg"

const AboutSMIT = () => {
  const navigate = useNavigate(); // Create navigate function

  const AboutPage = () => {
    navigate("/About"); // Navigate to the About page
  };

  return (
    <div className="bg-gray-50 p-1 shadow-lg rounded-lg">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left Section - Image */}
        <div className="relative">
          <img
            src={AboutSectionImage} // Replace with an actual image URL
            alt="SMIT Program"
            className="w-full h-fit rounded-lg shadow-xl"
          />
        </div>

        {/* Right Section - About Text */}
        <div className="flex flex-col justify-center p-4  w-full" 
           // style={{backgroundImage: `url(${AboutSectionBackgroundImage})`}}
        >
          <h2 className="font-serif text-headingColor text-3xl md:text-4xl mb-4">
            About Saylani Mass IT Training Program (SMIT)
          </h2>
          <p className="text-md mb-6">
            The Saylani Mass IT Training Program (SMIT) is a pioneering
            initiative to empower individuals through high-quality, free-of-cost
            IT education. SMIT provides technical training in a variety of
            fields such as Web and App development, Data science, Cybersecurity,CCNA,
             graphic desiging, Fluter, 3D Animation, UI/UX Designing Laptop Reparing, Mobile Reparing 
             Vocational Trainings and software engineering. The goal of SMIT is to equip students with the
            skills and knowledge they need to excel in the rapidly growing tech
            industry. With a team of experienced trainers, SMIT offers an engaging
            curriculum that prepares students for real-world challenges. The
            program aims to foster a new generation of IT professionals,
            equipped to take on roles in the global digital economy.
          </p>
          {/* <p className="text-md text-gray-600 mb-6 hidden md:block">
            With a team of experienced trainers, SMIT offers an engaging
            curriculum that prepares students for real-world challenges. The
            program aims to foster a new generation of IT professionals,
            equipped to take on roles in the global digital economy.
          </p> */}
         
          {/* button to  navigate on about page */}
          <button
            onClick={AboutPage}
            className="bg-subHeadingColor font-serif font-bold text-white px-6 py-2 rounded-lg hover:bg-green-700"
          > Read More
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutSMIT;
