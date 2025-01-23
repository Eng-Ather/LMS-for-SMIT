import React from "react";
import AvailableCourses from "../components/AvailableCourses";
import CampusActivities from "../components/CampusActivities";
import Gallery from "../components/Gallery";

const About = () => {
  return (
    <div className=" bg-gray-100 min-h-screen"><br />
      {/* <h1 className="text-2xl font-bold text-center">
        Welcome to the ABOUT Page!
      </h1> */}
      {/* <p className="text-center  mt-4">
        Explore the features of our application.
      </p> */}

      <br /><hr />



      <div className="bg-gray-50 shadow-lg rounded-lg p-3 md:flex md:items-center">
        {/* Text Content */}
        <div className="md:w-2/3 md:pr-4">
          <div className="mx-7">
            <h4 className="font-serif text-headingColor text-3xl md:text-4xl m-3 p-2 ">
              SMIT GULSHAN CAMPUS
            </h4>


            <p className="text-md text-v leading-relaxed m-4 p-1 ">
              Saylani Mass IT Training (SMIT) is an initiative by the Saylani
              Welfare International Trust <br /> in Karachi to equip youth with skills in various IT fields.
              The Gulshan Campus is one of <br /> their major centers, offering a range of courses
              designed to empower students with practical <br /> and industry-relevant knowledge.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="mt-6 md:mt-0 md:w-1.5/3">
          <img
            src="src/images/smit.png"
            alt="Institute"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <br />
      <hr />

      <div className="bg-gray-50 shadow-lg rounded-lg p-3 md:items-center ">
        <h4 className="font-serif  text-headingColor text-3xl md:text-4xl m-3 p-2 text-center">
          Professional Training and Certification Programs:
        </h4>


        <div className="w-100 h-50 bg-color-black ">
          <AvailableCourses />
        </div>
        <hr /><hr /><hr />

        <br />
        <div className="w-100 h-50 bg-color-black ">
          <CampusActivities />
        </div>
        
        {/* Gallery section */}
        <div className="w-100 h-50 bg-color-black ">
          <Gallery />
        </div>















      </div>
</div>



      );
};

      export default About;
