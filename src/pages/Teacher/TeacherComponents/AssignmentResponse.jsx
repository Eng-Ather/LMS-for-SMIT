
// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../context/context";
// import AppRouts from "../../../constant/constant";
// // import PendingAssignments from "./PendingAssignment";

// export default function AssignmentsResponse() {
//   const { user } = useContext(AuthContext);
//   const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
//   const [assignments, setAssignments] = useState([]); // State for assignments
//   const [submitedAssignment, setsubmitedAssignment] = useState([]); // State for Submited assignments
//   const [passignment, setpassignment] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   // let submitedAssignment;
//   const id = currentUserCourseId?.courseId;
//   const courseId = currentUserCourseId?.courseId;
//   const teacherId = currentUserCourseId?.userId ;
//   const sectionId = currentUserCourseId?.sectionId;
//   const days = currentUserCourseId?.days;
//   const batch = currentUserCourseId?.batch;
// //   const studentId = currentUserCourseId?.userId;


//   console.log("current user", user);
  

//   // to get All assignment of user assign by teacher
//   useEffect(() => {
//     if (!sectionId) return;
  
//     const fetchSpecificCourseAssignment = async () => {
//       try {
//         // Create an array of Promises for all sectionId values
//         const assignmentResponses = sectionId.map((sectionId, i) =>
//           axios.get(
//             `${AppRouts.getSpecificCourseAssignment}${courseId[i]}/${teacherId}/${sectionId}/${days[i]}/${batch[i]}`
//           )
//         );
  
//         // Wait for all Promises to resolve
//         const responses = await Promise.all(assignmentResponses);
  
//         // Extract data from each response and combine them
//         const allAssignments = responses.map((response) => response.data.data);
  
//         console.log("Latest response:", allAssignments);
  
//         setAssignments(allAssignments ); // Set combined assignments
//         console.log("All Assignment=>",assignments);
        
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };
  
//     fetchSpecificCourseAssignment();
//   }, [courseId, teacherId, sectionId, days, batch]);
  

//   //to get user Submited Assignment
// //   useEffect(() => {
// //     if (!id) return;

// //     const fetchStudentSubmitedAssignment = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${AppRouts.getStudentSubmitedAssigment}${batch}/${courseId}/${sectionId}/${days}/${studentId}`
// //         );
// //         console.log(res.data.data);

// //         setsubmitedAssignment(res.data.data); // Set assignments

// //         console.log("submitedAssignment", submitedAssignment);

// //         setLoading(false);
// //       } catch (error) {
// //         setError(error.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchStudentSubmitedAssignment();
// //   }, [courseId, teacherId, sectionId, days, batch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="w-full px-3">
//       {/* Submited Assignments Record */}
//       <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
//         <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
//           Assignments Status
//         </h3>

//         <div>
//           {assignments.length > 0 ? (
//             assignments.map((as, index) => {

//               {
//                 as.length>0?(as.map((a,i)=>{
//                   <strong>
//                     {a.assignment}
//                   </strong>
//                 })):("xxxxx")
//               }
              
//               // <div className="w-full lg:w-1/2">
//               //       <span>{index + 1}. </span>

//               //       <strong>{assignment || "No Topic Name"} </strong>
                    
//               // </div>
//             }))
//             :(
//               <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
//                  ------ x ------
//               </div>
//             )
//           }
//             </div>

        
//       </div>
//     </div>

    
//   );
// }

// ------------------------

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

export default function AssignmentsResponse() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
  const [assignments, setAssignments] = useState([]); // State for assignments
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const courseId = currentUserCourseId?.courseId;
  const teacherId = currentUserCourseId?.userId;
  const sectionId = currentUserCourseId?.sectionId;
  const days = currentUserCourseId?.days;
  const batch = currentUserCourseId?.batch;

  useEffect(() => {
    if (!sectionId) return;

    const fetchSpecificCourseAssignment = async () => {
      try {
        const assignmentResponses = sectionId.map((sectionId, i) =>
          axios.get(
            `${AppRouts.getSpecificCourseAssignment}${courseId[i]}/${teacherId}/${sectionId}/${days[i]}/${batch[i]}`
          )
        );

        const responses = await Promise.all(assignmentResponses);
        const allAssignments = responses.map((response) => response.data.data);

        setAssignments(allAssignments); // Set combined assignments
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSpecificCourseAssignment();
  }, [courseId, teacherId, sectionId, days, batch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // return (
  //   <div className="w-full px-3">
  //     <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
  //       <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
  //         Assignments Status
  //       </h3>
  //       <div>
  //         {assignments.length > 0 ? (
  //           assignments.map((assignmentGroup, groupIndex) => (
  //             <div key={groupIndex} className="mb-4">
  //               {assignmentGroup.length > 0 ? (
  //                 assignmentGroup.map((assignment, index) => (
  //                   <div
  //                     key={assignment._id}
  //                     className="p-4 mb-2 bg-blue-100 border border-blue-300 rounded-lg shadow"
  //                   >
  //                     <p>
  //                       <strong>{index + 1}.</strong> {assignment.assignment}
  //                     </p>
  //                     <p>
  //                       <strong>Batch:</strong> {assignment.batch}
  //                     </p>
  //                     <p>
  //                       <strong>Course ID:</strong> {assignment.courseId}
  //                     </p>
  //                   </div>
  //                 ))
  //               ) : (
  //                 <p>No assignments in this group.</p>
  //               )}
  //             </div>
  //           ))
  //         ) : (
  //           <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
  //             ------ x ------
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );


  return (
    <div className="w-full px-3">
      {/* Submited Assignments Record */}
      <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
          Assignments Status
        </h3>
  
        {/* Dynamically Render All Arrays */}
        {assignments && assignments.length > 0 ? (
          assignments.map((array, arrayIndex) => (
            <div key={arrayIndex} className="mb-8">
              {/* Title for Each Array */}
              <h4 className="text-xl font-bold mb-4">
                Array {arrayIndex + 1}: Assignments
              </h4>
  
              {/* Check if the Array Has Data */}
              {array.length > 0 ? (
                array.map((assignment, index) => (
                  <div
                    key={assignment._id || index} // Use unique ID or fallback to index
                    className="p-4 bg-gray-100 border rounded mb-2"
                  >
                    <p>
                      <strong>{index + 1}.</strong> {assignment.assignment || "No Assignment Name"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
                  No assignments found in Array {arrayIndex + 1}.
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
            No assignments available.
          </div>
        )}
      </div>
    </div>
  );
  
}
