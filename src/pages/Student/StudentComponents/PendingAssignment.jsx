
// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../context/context";
// import AppRouts from "../../../constant/constant";

// export default function PendingAssignments() {
//   const { user } = useContext(AuthContext);
//   const [currentUserCourseId] = useState(user); 
//   const [latestAssignment, setLatestAssignment] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isModal, setIsModal] = useState(false);

//   const { courseId, teacherId, studentId, sectionId, batch, days } =
//     currentUserCourseId || {};

//   useEffect(() => {
//     if (studentId) return;

//     const fetchLatestAssignment = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${AppRouts.getLeatestAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
//         );
//         setLatestAssignment(response.data?.data ? response.data : null);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchLatestAssignment();
//   }, [courseId, teacherId, sectionId, days, batch, studentId]);

//   const handleAssignmentSubmission = async (e) => {
//     e.preventDefault();
//     const codeLink = e.target.codeLink.value.trim();
//     const deploymentLink = e.target.deploymentLink.value.trim();

//     if (!codeLink || !deploymentLink) {
//       alert("Both Code Link and Deployment Link are required!");
//       return;
//     }

//     const submissionData = {
//       studentId: currentUserCourseId?.userId,
//       batch,
//       courseId,
//       days,
//       sectionId,
//       assignment: latestAssignment?.data.assignment,
//       assignmentId: latestAssignment?.data.assignmentId,
//       codeLink,
//       deploymentLink,
//     };

//     setLoading(true);
//     try {
//       await axios.post(AppRouts.submitAssignment, submissionData);
//       setLoading(false);
//       alert("Assignment Submitted Successfully");
//       e.target.reset();
//       setIsModal(false); // Close modal on successful submission
//     } catch (err) {
//       setLoading(false);
//       alert("Error during submission");
//     }
//   };

//   return (
//     <div className="w-full px-3">
//       {/* Button to Open Modal */}
//       <button
//         onClick={() => setIsModal(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//       >
//         New Assignment
//       </button>

//       {/* Modal */}
//       {isModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <h3 className="text-xl font-bold text-center mb-4">New Assignment</h3>

//             {latestAssignment?.data ? (
//               <div className="mb-4">
//                 <p><strong>Assignment ID:</strong> {latestAssignment.data.assignmentId}</p>
//                 <p><strong>Assignment:</strong> {latestAssignment.data.assignment}</p>
//               </div>
//             ) : (
//               <p>No latest assignment found.</p>
//             )}

//             <form onSubmit={handleAssignmentSubmission}>
//               <div className="mb-4">
//                 <label htmlFor="codeLink" className="block text-sm font-medium">
//                   Code Link
//                 </label>
//                 <input
//                   type="text"
//                   id="codeLink"
//                   placeholder="Enter your Code Link"
//                   className="w-full border p-2 rounded-lg mt-2"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="deploymentLink" className="block text-sm font-medium">
//                   Deployment Link
//                 </label>
//                 <input
//                   type="text"
//                   id="deploymentLink"
//                   placeholder="Enter your Deployment Link"
//                   className="w-full border p-2 rounded-lg mt-2"
//                 />
//               </div>

//               <div className="flex justify-between items-center">
//                 <button
//                   type="button"
//                   onClick={() => setIsModal(false)}
//                   className="bg-gray-300 px-4 py-2 rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ----------------

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

export default function PendingAssignments({ assignment, assignmentId }) {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { courseId, teacherId, studentId, sectionId, batch, days } =
    currentUserCourseId || {};

  // Logs for debugging
//   useEffect(() => {
//     console.log("Current User Data:", currentUserCourseId);
//   }, [currentUserCourseId]);

  const handleAssignmentSubmission = async (e) => {
    e.preventDefault();
    const codeLink = e.target.codeLink.value.trim();
    const deploymentLink = e.target.deploymentLink.value.trim();

    if (!codeLink || !deploymentLink) {
      alert("Both Code Link and Deployment Link are required!");
      return;
    }

    const submissionData = {
        studentId: currentUserCourseId?.userId,
      batch,
      courseId,
      days,
      sectionId,
      assignment,
      assignmentId,
      codeLink,
      deploymentLink,
    };

    setLoading(true);
    try {
        console.log("submission data", submissionData);
        
        await axios.post(AppRouts.submitAssignment, submissionData);
              setLoading(false);
              alert("Assignment Submitted Successfully");
              e.target.reset();
              setIsModal(false); // Close modal on successful submission
            } catch (err) {
              setLoading(false);
              alert("Error during submission");
            }
  };

  return (
    <div className="w-full px-3">
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Pending Assignment
      </button>

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {assignment && assignmentId ? (
              <div className="mb-4">
                <p><strong>Assignment ID:</strong> {assignmentId}</p>
                <p><strong>Assignment:</strong> {assignment}</p>
              </div>
            ) : (
              <p>No assignment found.</p>
            )}

            <form onSubmit={handleAssignmentSubmission}>
              <div className="mb-4">
                <label htmlFor="codeLink" className="block text-sm font-medium">
                  Code Link
                </label>
                <input
                  type="text"
                  id="codeLink"
                  name="codeLink"
                  placeholder="Enter your Code Link"
                  className="w-full border p-2 rounded-lg mt-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="deploymentLink" className="block text-sm font-medium">
                  Deployment Link
                </label>
                <input
                  type="text"
                  id="deploymentLink"
                  name="deploymentLink"
                  placeholder="Enter your Deployment Link"
                  className="w-full border p-2 rounded-lg mt-2"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

