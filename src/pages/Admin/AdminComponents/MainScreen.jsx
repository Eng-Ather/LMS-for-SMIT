// import React, { useEffect, useState } from "react";
// import { RxAvatar } from "react-icons/rx";
// import { FaLaptopCode } from "react-icons/fa";
// import axios from "axios";
// import AppRouts from "../../../constant/constant";
// import { Link } from "react-router";

// export default function MainScreen() {
//   const [Courses, setCourses] = useState([]);
//   const [Teachers, setTeachers] = useState([]);
//   const [Students, setStudents] = useState([]);
//   const [Announcement, setAnnouncement] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllCourses);
//         setCourses(response.data.data); // Save fetched data in state
//       } catch (error) {
//         console.error("Error fetching Courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllTeacher);
//         setTeachers(response.data.data); // Save fetched data in state
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllStudents);
//         setStudents(response.data.data); // Save fetched data in state
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllAnnouncements);
//         setAnnouncement(response.data.data);
//       } catch (error) {
//         console.error("Error fetching Courses:", error);
//       }
//     };
//     fetchAnnouncements();
//   }, []);

//   const bestTeachers = Teachers.slice(0, 4);
//   const bestCourses = Courses.slice(2, 6);
//   const mainAnnouncements = Announcement.slice(0, 4);

//   return (
//     <div className="h-screen overflow-y-scroll">
//       {/* main block  */}
//       <div>
//         <div className="grid grid-cols-3">
//           <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
//             Number of Instructors : {Teachers.length}
//           </div>
//           <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
//             Number of Courses : {Courses.length}
//           </div>
//           <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
//             Number of Students : {Students.length}
//           </div>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="w-9/12">
//           <div>
//             <div className="mx-2">
//               <img
//                 className="h-72 w-full rounded-lg"
//                 src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="LMS"
//               />
//             </div>
//           </div>
//         </div>
//         {/* side block  */}
//         <div className="w-3/12">
//           <div className="p-2 border-navbarColor font-bold ">
//             {/* insructors  */}
//             <h2 className="text-xl text-center">Best Instructors</h2>
//             {bestTeachers.map((data, index) => (
//               <div
//                 key={index}
//                 className="flex py-1 my-1 shadow-lg bg-blue-50 rounded"
//               >
//                 <span className="text-4xl my-2 mx-2">
//                   {data.image ? (
//                     <img
//                       className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
//                       src={data.image}
//                       alt="LMS"
//                     />
//                   ) : (
//                     <RxAvatar className="text-cyan-900 rounded-full" />
//                   )}
//                 </span>
//                 <span>
//                   <h3 className="font-bold">{data.name}</h3>
//                   {data.course.map((data, index) => (
//                     <span key={index} className="text-xs">
//                       {data}{" "}
//                     </span>
//                   ))}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex">
//         <div className="w-1/2">
//           <div className="flex p-4 justify-between">
//             <h2 className="font-bold text-2xl">Popular Courses</h2>
//             <Link className="text-cyan-800" to={"/addcourse"}>
//               All Courses
//             </Link>
//           </div>
//           {bestCourses.map((data, index) => (
//             <div
//               key={index}
//               className="flex bg-blue-50 justify-between items-center m-2 p-4 shadow-lg rounded"
//             >
//               <div className="flex">
//                 <span className="flex text-3xl h-10 items-center justify-center rounded p-2 my-1">
//                   <FaLaptopCode className="text-cyan-800" />
//                 </span>
//                 <h3 className="font-bold truncate  text-lg m-2">
//                   {data.courseTitle}
//                 </h3>
//               </div>
//               <Link
//                 to={`/addcourse/${data.courseId}`}
//                 className="text-cyan-800 text-xs"
//               >
//                 view
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="w-1/2">
//           <div className="flex p-4 justify-between">
//             <h2 className="text-2xl text-center font-bold">Announcements</h2>
//             <Link className="text-cyan-800" to={"/newannouncement"}>
//               View All
//             </Link>
//           </div>
//           {mainAnnouncements.map((data, index) => (
//             <div key={index} className="flex my-2 shadow-lg rounded">
//               <span className="m-2 p-2">
//                 <h3 className="font-semibold">{data.title}</h3>
//                 <p>{data.description}</p>
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// -----------------------------

// import React, { useEffect, useState } from "react";
// import { RxAvatar } from "react-icons/rx";
// import { FaLaptopCode } from "react-icons/fa";
// import axios from "axios";
// import AppRouts from "../../../constant/constant";
// import AdminToolKit from "./AdimnToolKit";
// import { Link } from "react-router";

// export default function MainScreen() {
//   const [Courses, setCourses] = useState([]);
//   const [Teachers, setTeachers] = useState([]);
//   const [Students, setStudents] = useState([]);
//   const [Announcement, setAnnouncement] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllCourses);
//         setCourses(response.data.data);
//       } catch (error) {
//         console.error("Error fetching Courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllTeacher);
//         setTeachers(response.data.data);
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllStudents);
//         setStudents(response.data.data);
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllAnnouncements);
//         setAnnouncement(response.data.data);
//       } catch (error) {
//         console.error("Error fetching announcements:", error);
//       }
//     };
//     fetchAnnouncements();
//   }, []);

//   const bestTeachers = Teachers.slice(0, 4);
//   const bestCourses = Courses.slice(2, 6);
//   const mainAnnouncements = Announcement.slice(0, 4);

//   return (
//     <div className="h-screen overflow-y-scroll bg-gray-100 p-4 md:p-6">
//       <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
//         {/* Statistics Section */}
//         <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
//           <div className="bg-blue-50 text-center text-lg text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
//             <span className="text-3xl ">{Courses.length}</span>
//             <h3 className="font-serif font-bold"> Courses</h3>
//           </div>

//           <div className="bg-blue-50 text-center text-lg text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
//             <span className="text-3xl ">{Teachers.length}</span>
//             <h3 className="font-serif font-bold"> Instructors</h3>
//           </div>

//           <div className="bg-blue-50 text-center text-lg text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
//             <span className="text-3xl ">{Students.length}</span>
//             <h3 className="font-serif font-bold"> Students</h3>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row mt-6 gap-4">
         
//           {/* Left Content */}
//           <div className="lg:w-1/2 flex flex-col">
           
//            {/* center image */}
//             <div className="overflow-hidden rounded-lg shadow-md mb-4">
//               <img
//                 className="h-64 w-full object-cover"
//                 src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="LMS"
//               />
//             </div>

//             {/* avilable courrses */}
//             {/* <div> */}
//             <div className=" w-full h-96 p-6 overflow-y-auto bg-blue-50 border border-blue-300 rounded-lg">

//               {/* <h2 className="text-2xl font-bold mb-2"> */}
//               <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">

//                 Avilable Courses</h2>
//               {bestCourses.map((data, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center bg-blue-100 rounded-lg shadow-md p-4 mb-4"
//                 >
//                   <div className="flex items-center">
//                     <FaLaptopCode className="text-blue-500 text-3xl mr-4" />
//                     {/* <h3 className="font-bold text-lg truncate"> */}
//                     <h3 className=" font-serif text-headingColor text-lg ">

//                       {data.courseTitle}
//                     </h3>
//                   </div>
//                   <Link
//                     to={`/addcourse/${data.courseId}`}
//                     className="text-md text-gray-500 hover:text-black hover:underline"
//                   >
//                     View details
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="lg:w-1/2 flex flex-col gap-6">
//             {/* tool kit for admins */}
//             <div>
//               <AdminToolKit />
//             </div>

//             {/* Announcements */}
//             <div className=" w-full h-72 p-6 overflow-y-auto bg-blue-50 border border-blue-300 rounded-lg">
//               <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
//                 Announcements
//               </h2>
//               {mainAnnouncements.map((data, index) => (
//                 <div
//                   key={index}
//                   className="  bg-blue-100 rounded-lg p-2 md:p-4 mb-2"
//                 >
//                   <div className=" flex flex-col md:flex-row justify-between">
//                     <h3 className="font-serif text-headingColor text-md ">
//                       {data.title}
//                     </h3>
//                     <p className="text-sm">
//                      On {data.date} , at {data.time}
//                     </p>
//                   </div>

//                   <p className="text-sm">Held at {data.location}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// -------------------------------------------

import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaLaptopCode } from "react-icons/fa";
import axios from "axios";
import AppRouts from "../../../constant/constant";
import AdminToolKit from "./AdimnToolKit";
import { Link } from "react-router-dom";

export default function MainScreen() {
  const [Courses, setCourses] = useState([]);
  const [Teachers, setTeachers] = useState([]);
  const [Students, setStudents] = useState([]);
  const [Announcement, setAnnouncement] = useState([]);

  // Fetch Courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(AppRouts.getAllCourses);
        setCourses(response.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };
    fetchCourses();
  }, []);

  // Fetch Teachers
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(AppRouts.getAllTeacher);
        setTeachers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching teachers:", error.message);
      }
    };
    fetchTeachers();
  }, []);

  // Fetch Students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(AppRouts.getAllStudents);
        setStudents(response.data.data || []);
      } catch (error) {
        console.error("Error fetching students:", error.message);
      }
    };
    fetchStudents();
  }, []);

  // Fetch Announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(AppRouts.getAllAnnouncements);
        setAnnouncement(response.data.data || []);
      } catch (error) {
        console.error("Error fetching announcements:", error.message);
      }
    };
    fetchAnnouncements();
  }, []);

  const bestTeachers = Teachers.slice(0, 4);
  const bestCourses = Courses.slice(0, 4);
  const mainAnnouncements = Announcement.slice(0, 4);

  return (
    <div className="h-screen overflow-y-scroll bg-gray-100 p-4 md:p-6">
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
       
        {/* Stats Section */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 text-center text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
            <span className="text-3xl">{Courses.length}</span>
            <h3  className="text-md md:text-2xl font-serif text-center text-headingColor ">
            Courses</h3>
          </div>
          <div className="bg-blue-50 text-center text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
            <span className="text-3xl">{Teachers.length}</span>
            <h3  className="text-md md:text-2xl font-serif text-center text-headingColor">
            Instructors</h3>
          </div>
          <div className="bg-blue-50 text-center  text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
            <span className="text-3xl">{Students.length}</span>
            <h3  className="text-md md:text-2xl font-serif text-center text-headingColor">
            Students</h3>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mt-6 gap-4">
         
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col">
         
            {/* Center Image */}
            <div className="overflow-hidden rounded-lg shadow-md mb-4">
              <img
                className="h-64 w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="LMS"
              />
            </div>

            {/* Available Courses */}
            <div className="w-full h-96 p-6 overflow-y-auto bg-blue-50 border border-blue-300 rounded-lg">
              <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
                Available Courses
              </h2>
              {bestCourses.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-blue-100 rounded-lg shadow-md p-4 mb-4"
                >
                  <div className="flex items-center">
                    <FaLaptopCode className="text-blue-500 text-3xl mr-4" />
                    <h3 className="font-serif text-headingColor text-lg">
                      {data.courseTitle || "Untitled Course"}
                    </h3>
                  </div>
                  <Link
                    to={`/addcourse/${data.courseId}`}
                    className="text-md text-gray-500 hover:text-black hover:underline"
                  >
                    View details
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Admin Toolkit */}
            <div>
              <AdminToolKit />
            </div>

            {/* Announcements */}
            <div className="w-full h-72 p-6 overflow-y-auto bg-blue-50 border border-blue-300 rounded-lg">
              <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
                Announcements
              </h2>
              {mainAnnouncements.map((data, index) => (
                <div
                  key={index}
                  className="bg-blue-100 rounded-lg p-2 md:p-4 mb-2"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <h3 className="font-serif text-headingColor text-md">
                      {data.title || "No Title"}
                    </h3>
                    <p className="text-sm">
                      On {data.date || "N/A"} at {data.time || "N/A"}
                    </p>
                  </div>
                  <p className="text-sm">Held at {data.location || "N/A"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
