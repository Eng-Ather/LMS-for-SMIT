import React from "react";
import ChairmanMessage from "../components/ChairmanNessage";
import Banner from "../components/banner";
import LoginFeild from "../components/loginFeild";
import Announcement from "../components/Announcement";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 ">
        
        {/* banner */}
        <Banner />

        {/* Body Content */}
        <div className="text-textColor space-y-4">
          <div className="text-textColor space-y-10 mt-6">
           
            {/* Chairmen message */}
            <ChairmanMessage />

            {/*Login Field */}
            <LoginFeild />

            {/* Announcement */}
            <Announcement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
