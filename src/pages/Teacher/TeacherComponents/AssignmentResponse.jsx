

// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../../../context/context";
// import AppRouts from "../../../constant/constant";

// export default function AssignmentsResponse() {
//   const { user } = useContext(AuthContext);
//   const [assignments, setAssignments] = useState([]);
//   const [submittedAssignments, setSubmittedAssignments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [isModal, setIsModal] = useState(false);
//   const [modalData, setModalData] = useState([]);

  

//   const courseId = user?.courseId;
//   const teacherId = user?.userId;
//   const sectionId = user?.sectionId;
//   const days = user?.days;
//   const batch = user?.batch;

//   useEffect(() => {
//     const fetchAssignments = async () => {
//       if (!sectionId || sectionId.length === 0) return;

//       setLoading(true);
//       try {
//         const requests = sectionId.map((id, index) =>
//           axios.get(
//             `${AppRouts.getSpecificCourseAssignment}${courseId[index]}/${teacherId}/${id}/${days[index]}/${batch[index]}`
//           )
//         );
//         const responses = await Promise.all(requests);
//         setAssignments(responses.map((res) => res.data.data));
//       } catch (err) {
//         setError(err.message || "Failed to fetch assignments.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAssignments();
//   }, [courseId, teacherId, sectionId, days, batch]);

//   // const fetchSubmittedAssignments = async (searchAggaisntAssignemnt) => {
//   //   setLoading(true);
//   //   try {

//   //     console.log("pass data = ", searchAggaisntAssignemnt);
//   //     const {
//   //       batch,
//   //       courseId,
//   //       sectionId,
//   //       days,
//   //       assignmentId}=searchAggaisntAssignemnt

//   //       console.log("batch", batch);
//   //       console.log("courseId", courseId);
//   //       console.log("sectionId", sectionId);
//   //       console.log("days", days);
//   //       console.log("assignmentId", assignmentId);

//   //       const submitedResponse = axios.get(
//   //         `${AppRouts.getSubmitedAssignmentForTeacher}${batch}/${courseId}/${sectionId}/${days}/${assignmentId}`
//   //       )

//   //       const res = await Promise.all(submitedResponse);
//   //       const submittedData = res.map((res) => res.data.data);
//   //       setSubmittedAssignments(submittedData);
//   //       console.log("submittedAssignments=", submittedAssignments );

//   //       console.log("submitedResponse", submitedResponse);
//   //     setLoading(false);

//   //   } catch (err) {
//   //     setError(err.message || "Failed to fetch submitted assignments.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };



//   const fetchSubmittedAssignments = async (assignment) => {
//     setLoading(true);
//     try {
//       const { batch, courseId, sectionId, days, assignmentId } = assignment;
  
//       console.log("batch", batch);
//       console.log("courseId", courseId);
//       console.log("sectionId", sectionId);
//       console.log("days", days);
//       console.log("assignmentId", assignmentId);
  
//       // Use a single axios call to get submitted assignments
//       const submittedResponse = await axios.get(
//         `${AppRouts.getSubmitedAssignmentForTeacher}${batch}/${courseId}/${sectionId}/${days}/${assignmentId}`
//       );
  
//       setSubmittedAssignments(submittedResponse.data.data);  // Update state with the response data
//       console.log("submittedAssignments=", submittedResponse.data.data);
//       setLoading(false);

//       setModalData(submittedResponse.data.data)
//       setIsModal(true)


  
//     } catch (err) {
//       setError(err.message || "Failed to fetch submitted assignments.");
//       setLoading(false);

//     } finally {
//       setLoading(false);
//     }
//   };
  

//   // if (loading) return <div>Loading...</div>;
//   if (error)
//     return (
//       <div>
//         <div>Error: {error}</div>
//         <button onClick={() => window.location.reload()}>Retry</button>
//       </div>
//     );

//   return (
//     <div className="w-full px-3">
//       <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
//         <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
//           Assignments Status
//         </h3>
//         {assignments.length > 0 ? (
//           assignments.map((group, index) => (
//             <div key={index} className="mb-8">
//               <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 border border-blue-300 rounded-lg my-4">
//                 <h4 className="w-full sm:w-1/2 text-xl md:text-2xl flex items-center justify-center font-serif text-headingColor p-2 rounded-lg">
//                   Course ID: {courseId[index] || "Unknown Course"}
//                 </h4>

//                 <h4 className="w-full sm:w-1/2 text-xl md:text-2xl flex items-center justify-center font-serif text-headingColor p-2 rounded-lg">
//                   <span className="text-lg py-4">Total Assignments:</span>
//                   <span className="font-bold text-xl">{group.length || "0"}</span>
//                 </h4>
//               </div>
//               {group.length > 0 ? (
//                 group.map((assignment) => (
//                   <div
//                     key={assignment._id}
//                     className="flex flex-col md:flex-row justify-between p-4 bg-blue-50 border border-blue-300 rounded mb-2"
//                   > 
//                     <p>
//                       <strong>{assignment.assignment || "Unnamed Assignment"}</strong> (
//                       {assignment.assignmentId})
//                     </p>
//                     <button
//                       className="mt-2 p-2 bg-blue-200 hover:bg-blue-300 rounded"
//                       onClick={() => fetchSubmittedAssignments(assignment)}
//                     >
//                       View Submitted Assignments
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
//                   No assignments found.
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
//             No assignments available.
//           </div>
//         )}
//       </div>


//           {/* Modal */}
//       {isModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white w-full lg:w-1/2 rounded-xl p-6 mx-6 ">
//             {assignment && assignmentId ? (
//               <div className="mb-4 border-b pb-2 border-blue-500 font-serif text-center text-headingColor text-md md:text-lg ">
//                 <p>
//                   <strong>Assignment ID:</strong> {assignmentId}
//                 </p>
//                 <p> {assignment}</p>
//               </div>
//             ) : (
//               <p>No assignment found.</p>
//             )}

           

//             {/* modal close button */}
//             <div className="flex justify-center mt-4">
//               <button
//                 type="button"
//                 onClick={() => setIsModal(false)}
//                 className="w-full font-serif font-bold bg-subHeadingColor text-lg text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//     </div>
//   );
// }

// ------------------------------

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

export default function AssignmentsResponse() {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const courseId = user?.courseId;
  const teacherId = user?.userId;
  const sectionId = user?.sectionId;
  const days = user?.days;
  const batch = user?.batch;

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!sectionId || sectionId.length === 0) return;

      setLoading(true);
      try {
        const requests = sectionId.map((id, index) =>
          axios.get(
            `${AppRouts.getSpecificCourseAssignment}${courseId[index]}/${teacherId}/${id}/${days[index]}/${batch[index]}`
          )
        );
        const responses = await Promise.all(requests);
        setAssignments(responses.map((res) => res.data.data));
      } catch (err) {
        setError(err.message || "Failed to fetch assignments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, [courseId, teacherId, sectionId, days, batch]);

  const fetchSubmittedAssignments = async (assignment) => {
    setLoading(true);
    try {
      const { batch, courseId, sectionId, days, assignmentId } = assignment;

      // Use a single axios call to get submitted assignments
      const submittedResponse = await axios.get(
        `${AppRouts.getSubmitedAssignmentForTeacher}${batch}/${courseId}/${sectionId}/${days}/${assignmentId}`
      );

      setSubmittedAssignments(submittedResponse.data.data); // Update state with the response data
      setModalData(submittedResponse.data.data);
      setIsModal(true);

    } catch (err) {
      setError(err.message || "Failed to fetch submitted assignments.");
    } finally {
      setLoading(false);
    }
  };

  if (error)
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  return (
    <div className="w-full px-3">
      <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
          Assignments Status
        </h3>
        {assignments.length > 0 ? (
          assignments.map((group, index) => (
            <div key={index} className="mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center bg-blue-100 border border-blue-300 rounded-lg my-4">
                <h4 className="w-full sm:w-1/2 text-xl md:text-2xl flex items-center justify-center font-serif text-headingColor p-2 rounded-lg">
                  Course ID: {courseId && courseId[index] ? courseId[index] : "Unknown Course"}
                </h4>

                <h4 className="w-full sm:w-1/2 text-xl md:text-2xl flex items-center justify-center font-serif text-headingColor p-2 rounded-lg">
                  <span className="text-lg py-4">Total Assignments:</span>
                  <span className="font-bold text-xl">{group.length || "0"}</span>
                </h4>
              </div>
              {group.length > 0 ? (
                group.map((assignment) => (
                  <div
                    key={assignment._id}
                    className="flex flex-col md:flex-row justify-between p-4 bg-blue-50 border border-blue-300 rounded mb-2"
                  >
                    <p>
                      <strong>{assignment.assignment || "Unnamed Assignment"}</strong> (
                      {assignment.assignmentId})
                    </p>
                    <button
                      className="mt-2 p-2 bg-blue-200 hover:bg-blue-300 rounded"
                      onClick={() => fetchSubmittedAssignments(assignment)}
                    >
                      View Submitted Assignments
                    </button>
                  </div>
                ))
              ) : (
                <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
                  No assignments found.
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

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full lg:w-1/2 rounded-xl p-6 mx-6 ">
            {modalData && modalData.length > 0 ? (
              <div className="mb-4 border-b pb-2 border-blue-500 font-serif text-center text-headingColor text-md md:text-lg ">
                <p>
                  <strong>Submitted Assignments:</strong>
                </p>
                {modalData.map((submission, index) => (
                  <div key={index} className="mb-2">
                    
                    <p className="bg-blue-100 py-3 my-3"><strong>Student details:</strong> 
                    {submission.studentId}{", "}
                    {submission.batch}{", "}
                    {submission.days}{", "}
                    {submission.sectionId}{", "}
                    </p>
                    
                    <p><strong>Submitted Code Link:</strong> <a href={submission.codeLink} target="_blank" rel="noopener noreferrer">{submission.codeLink}</a></p>
                    <p><strong>Deployment Link:</strong> <a href={submission.deploymentLink} target="_blank" rel="noopener noreferrer">{submission.deploymentLink}</a></p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No submissions available.</p>
            )}

            {/* Modal close button */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={() => setIsModal(false)}
                className="w-full font-serif font-bold bg-navbarColor text-lg text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
