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

// import React, { useState, useEffect } from "react";
// import ChairmanMessage from "../components/ChairmanMessage";
// import Banner from "../components/banner";
// import Announcement from "../components/Announcement";
// import SuccessStories from "../components/successStories";
// import AboutSMIT from "../components/AboutSMIT";
// import { useContext } from "react";
// import { AuthContext } from "../context/context.jsx";
// import { useNavigate } from "react-router";
// // import RoleBasedNavigation from "../components/RoleBasedNavigation.jsx";
// import RoleBasedNavigation from "../components/RoleBasedNavigation.jsx"

// function Home() {

//   // Access user and token from AuthContext
// const navigate = useNavigate()
//   const { user, token } = useContext(AuthContext);
//   const jump = user;
//   console.log(user);
//   // console.log(token);
  
//   useEffect(() => {
//     // if (jump) {
//     //   switch (jump.role) {
//     //     case "teacher":
//     //       navigate("/teacher");
//     //       break;
//     //     case "student":
//     //       navigate("/student");
//     //       break;
//     //     case "admin":
//     //       navigate("/admin");
//     //       break;
//     //       default:
//     //         console.log("Redirecting to main page.");
//     //   }
//     // } 
//     <RoleBasedNavigation/>
//   }, [user]);

//    //navigate the main page if user get logout
//   //  if (!user) {
//   //   navigate("/");
//   // } else if (user) {
//   //   // Navigate based on user role
//   //   switch (user.role) {
//   //     case "teacher":
//   //       navigate("/teacher"); // Redirect to teacher page
//   //       break;
//   //     case "student":
//   //       navigate("/student"); // Redirect to student page
//   //       break;
//   //     case "admin":
//   //       navigate("/admin"); // Redirect to admin page
//   //       break;
//   //     default:
//   //       alert("Unknown role, please contact support.");
//   //       break;
//   //   }
//   // }

//   return (
//     <div className="bg-gray-100 flex flex-col items-center">
//       {/* Content Section */}
//       <div className="bg-white shadow-lg rounded-lg p-8">
//         {/* banner */}
//         <Banner />

//         {/* Body Content */}
//         <div className="text-textColor space-y-4">
//           <div className="text-textColor space-y-10 mt-6">
//             {/* Chairman Message */}
//             <ChairmanMessage />

//             {/* About SMIT */}
//             <AboutSMIT />

//             {/* Success Stories */}
//             <SuccessStories />

//             {/* Announcement */}
//             <Announcement />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
// -------------------

import React, { useContext, useEffect } from "react";
import ChairmanMessage from "../components/ChairmanMessage";
import Banner from "../components/banner";
import Announcement from "../components/Announcement";
import SuccessStories from "../components/successStories";
import AboutSMIT from "../components/AboutSMIT";
import { AuthContext } from "../context/context.jsx";
import { useNavigate } from "react-router";
// import RoleBasedNavigation from "../components/RoleBasedNavigation.jsx";
import RoleBasedNavigation from "../components/RoleBasedNavigation.jsx";

function Home() {
  // Access user and token from AuthContext
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Render Role-Based Navigation to handle redirection */}
      {user && <RoleBasedNavigation />}
      

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

