// import React from "react";
// import ChairmanMessage from "../components/ChairmanNessage";
// import Banner from "../components/banner";
// import LoginFeild from "../components/loginFeild";
// import Announcement from "../components/Announcement";
// import SuccessStories from "../components/successStories";
// import AboutSMIT from "../components/AboutSMIT";


// function Home() {
//   return (
//     <div className=" bg-gray-100 flex flex-col items-center">
      
//       {/* Content Section */}
//       <div className="bg-white shadow-lg rounded-lg p-8 ">
        
//         {/* banner */}
//         <Banner />

//         {/* Body Content */}
//         <div className="text-textColor space-y-4">
//           <div className="text-textColor space-y-10 mt-6">
           
//             {/* Chairmen message */}
//             <ChairmanMessage />

//             {/* About SMIT */}
//             <AboutSMIT/>

//             {/* success storeies */}
//             <SuccessStories/>

//             {/*Login Field */}
//             <LoginFeild />

//             {/* Announcement */}
//             <Announcement />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
// _____________________________________________________

import React, { useState } from "react";
import ChairmanMessage from "../components/ChairmanMessage";
import Banner from "../components/banner";
import Announcement from "../components/Announcement";
import SuccessStories from "../components/successStories";
import AboutSMIT from "../components/AboutSMIT";

function Home() {
 
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        
        {/* banner */}
        <Banner />

        {/* Body Content */}
        <div className="text-textColor space-y-4">
          <div className="text-textColor space-y-10 mt-6">
            {/* Chairman Message */}
            <ChairmanMessage />

            {/* About SMIT */}
            <AboutSMIT />

            {/* Success Stories */}
            <SuccessStories />
           
            {/* Announcement */}
            <Announcement />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
