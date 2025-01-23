
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../images/logo.png";
// import {
//   CloseCircleOutlined,
//   CloseOutlined,
//   PlusOutlined,
// } from "@ant-design/icons";
// import axios from "axios";
// import AppRouts from "../../../constant/constant";
// import { Tooltip as ReactTooltip } from "react-tooltip";

// export default function Instructors() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [teachers, setTeachers] = useState([]);
//   const [filteredTeachers, setfilteredTeachers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const [loading, setLoading] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const obj = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//       role: "teacher",
//       userId: e.target.userid.value,
//       batch: e.target.batches.value,
//       course: e.target.courses.value,
//       courseId: e.target.courseid.value,
//       days: e.target.days.value,
//       sectionId: e.target.sectionid.value,
//     };

//     axios
//       .post(AppRouts.addTeacher, obj)
//       .then((res) => {
//         console.log(res);
//         closeModal();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get(AppRouts.getAllTeacher);
//         setTeachers(response.data.data); // Save fetched data in state
//         setfilteredTeachers(response.data.data); // Save all teacher in filter data to show all teacher initally        console.log(teachers);
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//       }
//     };

//     fetchTeachers();
//   }, []);

//   // search filter
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   useEffect(() => {
//     console.log("teacher info = ", teachers);

//     const filtereddata = teachers.filter((data) => {
//       // searching in all fields
//       return (
//         data.name.toLowerCase().includes(searchTerm) ||
//         data.userId.toLowerCase().includes(searchTerm) ||
//         data.batch.join("").toLowerCase().includes(searchTerm) ||
//         data.course.join("").toLowerCase().includes(searchTerm) ||
//         data.courseId.join("").toLowerCase().includes(searchTerm) ||
//         data.days.join("").toLowerCase().includes(searchTerm) ||
//         data.sectionId.join("").toLowerCase().includes(searchTerm)
//         // data.CNICno.includes(searchTerm)
//       );
//     });

//     setfilteredTeachers(filtereddata);
//   }, [searchTerm]);

//   return (
//     <div className="h-screen overflow-y-scroll p-2">
//       <div className=" bg-white border-t-4 border-navbarColor shadow-lg rounded-lg m-2 md:m-4 p-2 md:p-6">
//         <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-blue-50 border border-blue-300 rounded-lg p-2 my-2  ">
//           {/* Add New Student */}
//           <button
//             data-tooltip-id="addInstructor-tooltip"
//             onClick={openModal}
//             className=" w-full sm:w-1/4 flex items-center justify-center bg-navbarColor text-white font-serif font-bold text-base py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition duration-300"
//           >
//             <ReactTooltip
//               id="addInstructor-tooltip"
//               place="bottom"
//               content="Add Instructor"
//             />
//             <PlusOutlined className="text-lg" />
//             <span className="ml-2">Add New</span>
//           </button>

//           <div className="w-full sm:w-1/2 md:w-1/4  my-3 md:my-1 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-3">
//             <span className="text-sm md:text-xl font-serif text-center text-headingColor">
//               {teachers.length}
//               {"-"} Instructors
//             </span>
//           </div>
//         </div>

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6 ">
//               <form onSubmit={handleSubmit}>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Instructor name
//                     </label>
//                     <input
//                       type="name"
//                       id="name"
//                       placeholder="Enter Instructor name"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Instructor Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       placeholder="user@gmail.com"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Instructor Password
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       placeholder="- - - - - -"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="userid"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       User Id
//                     </label>
//                     <input
//                       type="userid"
//                       id="userid"
//                       placeholder="sir-user-000"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="batches"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Batches
//                     </label>
//                     <input
//                       type="batches"
//                       id="batches"
//                       placeholder="Batch-00"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="courses"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Courses
//                     </label>
//                     <input
//                       type="courses"
//                       id="courses"
//                       placeholder="Courses"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="courseid"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Course Id
//                     </label>
//                     <input
//                       type="courseid"
//                       id="courseid"
//                       placeholder="WMA-000"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="days"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Days
//                     </label>
//                     <input
//                       type="days"
//                       id="days"
//                       placeholder="TTS MWF Weekend Sunday"
//                       className="w-full border border-gray-300 uppercase rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="sectionid"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       SectionID
//                     </label>
//                     <input
//                       type="sectionid"
//                       id="sectionid"
//                       placeholder="0-to-0"
//                       className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2">
//                   <span className="flex w-11/12 justify-center">
//                     <button
//                       type="submit"
//                       className="w-1/2 lg:w-2/12 bg-navbarColor font-serif font-bold text-lg text-white py-2 px-4  rounded-lg hover:bg-blue-700 transition duration-300"
//                     >
//                       {loading ? "Loading..." : "Submit"}
//                     </button>
//                   </span>
//                   <span className="flex items-end w-1/12 sm:pl-10 md:pl-4 lg:pl-10">
//                     <CloseOutlined className="text-2xl" onClick={closeModal} />
//                   </span>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//         {/* search bar */}
//         <div className="w-full bg-blue-50 flex gap-2 md:gap-5 justify-between rounded-lg border border-blue-300 p-2 my-4">
//           <input
//             className="w-2/3 py-2 px-4 rounded-lg border border-blue-300 hover:outline-blue-500"
//             type="search"
//             name="searchFilter"
//             placeholder="search here"
//             value={searchTerm}
//             onChange={handleSearch}
//           />

//           {/* student stats */}
//           <div className="w-1/4 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-1 md:p-3">
//             <span className="text-xs sm:text-sm md:text-xl font-serif text-center text-headingColor">
//               {!searchTerm ? "No" : filteredTeachers.length} result found
//             </span>
//           </div>
//         </div>

//         {/* Filtered Student List */}
//         <div className="w-full  bg-gray-50 rounded-lg shadow-md">
//           {filteredTeachers.map((data, index) => (
//             <div
//               key={data._id}
//               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 text-center bg-blue-50 p-2 mb-4 rounded-lg hover:bg-blue-100 border border-blue-300"
//             >
//               <div className="flex items-center justify-center border border-navbarColor col-span-1 md:col-span-2 lg:col-span-2  p-2 rounded-lg">
//                 <p className="text-lg font-bold">
//                   {index + 1}. {data.name}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
//                 <p className="text-sm">
//                   {data.CNICno ? (
//                     data.CNICno
//                   ) : (
//                     <span className="text-gray-400"> C.N.I.C missing</span>
//                   )}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
//                 <p className="text-sm">
//                   {data.email ? (
//                     data.email
//                   ) : (
//                     <span className="text-gray-400"> email missing</span>
//                   )}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
//   <p className="text-sm">
//     {data.course && data.course.length > 0 ? (
//       data.course.join(", ") // Join the array values into a single string with a comma
//     ) : (
//       <span className="text-gray-400">course missing</span>
//     )}
//     <br />
//     {data.batch && data.batch.length > 0 ? (
//       data.batch.join(", ") // Join the array values into a single string with a comma
//     ) : (
//       <span className="text-gray-400">batch missing</span>
//     )}
//   </p>
// </div>
//               <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
//                 <p className="text-sm">
//                   {data.days ? (
//                     data.days
//                   ) : (
//                     <span className="text-gray-400"> days missing</span>
//                   )}
//                   <br />
//                   {data.sectionId ? (
//                     data.sectionId
//                   ) : (
//                     <span className="text-gray-400"> sectionId missing</span>
//                   )}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
//                 <p className="text-sm">
//                   {data.userId ? (
//                     data.userId
//                   ) : (
//                     <span className="text-gray-400"> teacherId missing</span>
//                   )}
//                   <br />
//                   {}
//                 </p>
//               </div>
//               <div className="flex items-center justify-center col-span-1">
//                 <button className="bg-navbarColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
//                   <Link
//                     to={`/addcourse/${data.courseId}`}
//                     className="text-md text-white hover:text-black hover:underline"
//                   >
//                     View details
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// -------------------------------


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import AppRouts from "../../../constant/constant";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Instructors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setfilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "teacher",
      userId: e.target.userid.value,
      batch: e.target.batches.value,
      course: e.target.courses.value,
      courseId: e.target.courseid.value,
      days: e.target.days.value,
      sectionId: e.target.sectionid.value,
    };

    axios
      .post(AppRouts.addTeacher, obj)
      .then((res) => {
        console.log(res);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(AppRouts.getAllTeacher);
        setTeachers(response.data.data); // Save fetched data in state
        setfilteredTeachers(response.data.data); // Save all teacher in filter data to show all teacher initally        console.log(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // search filter
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log("teacher info = ", teachers);

    const filtereddata = teachers.filter((data) => {
      // searching in all fields
      return (
        data.name.toLowerCase().includes(searchTerm) ||
        data.userId.toLowerCase().includes(searchTerm) ||
        data.batch.join("").toLowerCase().includes(searchTerm) ||
        data.course.join("").toLowerCase().includes(searchTerm) ||
        data.courseId.join("").toLowerCase().includes(searchTerm) ||
        data.days.join("").toLowerCase().includes(searchTerm) ||
        data.sectionId.join("").toLowerCase().includes(searchTerm)
        // data.CNICno.includes(searchTerm)
      );
    });

    setfilteredTeachers(filtereddata);
  }, [searchTerm]);

  return (
    <div className="h-screen overflow-y-scroll p-2">

      <div className="bg-white border-t-4 border-navbarColor rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row md:space-y-0 bg-white">
          <div className="shadow rounded font-semibold p-2 my-1">
            Total Instructors : {teachers.length}
          </div>

      <div className=" bg-white border-t-4 border-navbarColor shadow-lg rounded-lg m-2 md:m-4 p-2 md:p-6">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-blue-50 border border-blue-300 rounded-lg p-2 my-2  ">
          {/* Add New Student */}

          <button
            data-tooltip-id="addInstructor-tooltip"
            onClick={openModal}
            className=" w-full sm:w-1/4 flex items-center justify-center bg-navbarColor text-white font-serif font-bold text-base py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition duration-300"
          >
            <ReactTooltip
              id="addInstructor-tooltip"
              place="bottom"
              content="Add Instructor"
            />
            <PlusOutlined className="text-lg" />
            <span className="ml-2">Add New</span>
          </button>

          <div className="w-full sm:w-1/2 md:w-1/4  my-3 md:my-1 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-3">
            <span className="text-sm md:text-xl font-serif text-center text-headingColor">
              {teachers.length}
              {"-"} Instructors
            </span>
          </div>

          
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor name
                    </label>
                    <input
                      type="name"
                      id="name"
                      placeholder="Enter Instructor name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="user@gmail.com"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="- - - - - -"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="userid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User Id
                    </label>
                    <input
                      type="userid"
                      id="userid"
                      placeholder="sir-user-000"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="batches"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Batches
                    </label>
                    <input
                      type="batches"
                      id="batches"
                      placeholder="Batch-00"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courses"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Courses
                    </label>
                    <input
                      type="courses"
                      id="courses"
                      placeholder="Courses"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courseid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Id
                    </label>
                    <input
                      type="courseid"
                      id="courseid"
                      placeholder="WMA-000"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="days"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Days
                    </label>
                    <input
                      type="days"
                      id="days"
                      placeholder="TTS MWF Weekend Sunday"
                      className="w-full border border-gray-300 uppercase rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sectionid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      SectionID
                    </label>
                    <input
                      type="sectionid"
                      id="sectionid"
                      placeholder="0-to-0"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="flex w-11/12 justify-center">
                    <button
                      type="submit"
                      className="w-1/2 lg:w-2/12 bg-navbarColor font-serif font-bold text-lg text-white py-2 px-4  rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </span>
                  <span className="flex items-end w-1/12 sm:pl-10 md:pl-4 lg:pl-10">
                    <CloseOutlined className="text-2xl" onClick={closeModal} />
                  </span>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* search bar */}
        <div className="w-full bg-blue-50 flex gap-2 md:gap-5 justify-between rounded-lg border border-blue-300 p-2 my-4">
          <input
            className="w-1-4 py-2 px-4 rounded-lg border border-blue-300 hover:outline-blue-500"
            type="search"
            name="searchFilter"
            placeholder="search here"
            value={searchTerm}
            onChange={handleSearch}
          />

          {/* student stats */}
          <div className="w-1/4 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-1 md:p-3">
            <span className="text-xs sm:text-sm md:text-xl font-serif text-center text-headingColor">
              {!searchTerm ? "No" : filteredTeachers.length} result found
            </span>
          </div>
        </div>

        {/* Filtered Student List */}
        <div className="w-full  bg-gray-50 rounded-lg shadow-md">
          {filteredTeachers.map((data, index) => (
            <div
              key={data._id}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 text-center bg-blue-50 p-2 mb-4 rounded-lg hover:bg-blue-100 border border-blue-300"
            >
              <div className="flex items-center justify-center border border-navbarColor col-span-1 md:col-span-2 lg:col-span-2  p-2 rounded-lg">
                <p className="text-lg font-bold">
                  {index + 1}. {data.name}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.CNICno ? (
                    data.CNICno
                  ) : (
                    <span className="text-gray-400"> C.N.I.C missing</span>
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.email ? (
                    data.email
                  ) : (
                    <span className="text-gray-400"> email missing</span>
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
  <p className="text-sm">
    {data.course && data.course.length > 0 ? (
      data.course.join(", ") // Join the array values into a single string with a comma
    ) : (
      <span className="text-gray-400">course missing</span>
    )}
    <br />
    {data.batch && data.batch.length > 0 ? (
      data.batch.join(", ") // Join the array values into a single string with a comma
    ) : (
      <span className="text-gray-400">batch missing</span>
    )}
  </p>
</div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.days ? (
                    data.days
                  ) : (
                    <span className="text-gray-400"> days missing</span>
                  )}
                  <br />
                  {data.sectionId ? (
                    data.sectionId
                  ) : (
                    <span className="text-gray-400"> sectionId missing</span>
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.userId ? (
                    data.userId
                  ) : (
                    <span className="text-gray-400"> teacherId missing</span>
                  )}
                  <br />
                  {}
                </p>
              </div>
              <div className="flex items-center justify-center col-span-1">
                <button className="bg-navbarColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  <Link
                    to={`/addcourse/${data.courseId}`}
                    className="text-md text-white hover:text-black hover:underline"
                  >
                    View details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
       </div>
       </div>
       </div>
       </div>
  )}
