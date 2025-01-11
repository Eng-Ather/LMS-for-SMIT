// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../context/context";
// import AppRouts from "../../../constant/constant";

// export default function Assignments() {
//   const { user } = useContext(AuthContext);
//   const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
//   const [assignments, setAssignments] = useState([]); // State for assignments
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // console.log(currentUserCourseId);

//   const id = currentUserCourseId?.courseId;
//   const courseId = currentUserCourseId?.courseId;
//   const teacherId = currentUserCourseId?.teacherId;
//   const sectionId = currentUserCourseId?.sectionId;
//   const days = currentUserCourseId?.days;
//   const batch = currentUserCourseId?.batch;

//   console.log("batcj-->" , batch);

//   useEffect(() => {
//     if (!id) return;

//     const fetchSpecificCourseAssignment = async () => {
//       try {
//           const assignment = await axios.get(AppRouts.getSpecificCourseAssignment +
//           courseId + "/" + teacherId + "/" + sectionId + "/" + days + "/" + batch);

//         console.log(assignment.data.data);

//         setAssignments(response.data.data || []); // Set assignments
//         setLoading(false);

//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchSpecificCourseAssignment();
//   }, [courseId, teacherId, sectionId, days, batch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className=" h-screen overflow-auto">

//       <div className="w-full px-3">
//         {/* New Assigment */}
//         <div className="my-8 bg-white border-t-4 border-green-300 shadow-lg rounded-lg p-4 md:p-6">
//           <h3 className="font-serif text-subHeadingColor text-2xl md:text-4xl text-center border-b pb-2 border-subHeadingColor mb-6">
//             New Assigment
//           </h3>
//         </div>

//         {/* All Assignment */}
//         <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
//             <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
//               All Assignment
//             </h3>
//             {/* *************  */}
//             <div>
//               {assignments.length > 0 ? (
//               assignments.map((assignment, index) => (
//                 <div
//                   key={index}
//                   className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition mb-2"
//                 >
//                   <strong>{index + 1}:</strong> {assignment.topicName || "No Topic Name"}
//                   </div>
//                   ))
//                 )
//                   : (
//                   <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
//                     ------ x ------
//                   </div>

//   );
// }
// ----------------------

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

import AssignmentsStatus from "./AssignmentStatus";
import NewAssignments from "./NewAssignment";

export default function Assignments() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);

  return (
    <div>
      <NewAssignments />

      <AssignmentsStatus />
    </div>
  );
}
