
// import axios from "axios";
// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../../../context/context";
// import AppRouts from "../../../constant/constant";

// export default function NewAssignments() {
//   const { user } = useContext(AuthContext);
//   const [currentUserCourseId] = useState(user); // Assuming `user` has all required properties
//   const [latestAssignment, setLatestAssignment] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Destructure safely with fallback to an empty object
//   const { courseId, teacherId, studentId, sectionId, batch, days } =
//     currentUserCourseId || {};

//   console.log("current user data", currentUserCourseId);
//   console.log(days);

//   // to get the latest Assignment of user assigned by teacher
//   useEffect(() => {
//     if (studentId) return;

//     const fetchLatestAssignment = async () => {
//       try {
//         setLoading(true); // Start loading
//         const response = await axios.get(
//           `${AppRouts.getLeatestAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
//         );
//         console.log(response.data);

//         if (response.data.data) {
//           setLatestAssignment(response.data); // Set latest assignment
//         } else {
//           setLatestAssignment(null); // No data found
//         }
//         setLoading(false); // Stop loading
//       } catch (error) {
//         setError(error.message); // Set error message
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchLatestAssignment();
//   }, [courseId, teacherId, sectionId, days, batch, studentId]);

//   // function to submit the assigment
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
//       batch: currentUserCourseId?.batch,
//       courseId: currentUserCourseId?.courseId,
//       days,
//       sectionId: currentUserCourseId?.sectionId,
//       assignment: latestAssignment?.data.assignment,
//       assignmentId: latestAssignment.data.assignmentId,
//       codeLink,
//       deploymentLink,
//     };
//     setLoading(true);
//     console.log("submissionData", submissionData);

//     //calling api to updte Leatest Assignment in mongoDB
//     axios
//       .post(AppRouts.submitAssignment, submissionData)
//       .then((res) => {
//         console.log(res);
//         setLoading(false);
//         alert("Assignment Submited Successfully");

//         // Reset the form fields after success operation
//       e.target.reset();  // This will clear the input fields

//       })
//       .catch((error) => {
//         console.log("error: ", error.message);
//         setLoading(false);
//         alert("Error during submission ");
//       });
//   };

//   return (
//     // <div className="w-full px-3">
//     //   {/* New Assignment */}
//     //   <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
//     //     <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
//     //       New Assignment
//     //     </h3>

//     //     <div>
//     //       {latestAssignment?.data ? (
//     //         <div className="font-serif font-semibold py-2 mb-6">
//     //           <p>Assignment ID: {latestAssignment.data.assignmentId}</p>
//     //           <p> Assignment: {latestAssignment.data.assignment}</p>
//     //         </div>
//     //       ) : (
//     //         <p>No latest assignment found.</p>
//     //       )}
//     //     </div>

//     //     {/* New Feeds Form */}
//     //     <form onSubmit={handleAssignmentSubmission}>
//     //       <div className="flex flex-col md:flex-row gap-4">
//     //         {/* Code Link */}
//     //         <div className="mb-4 w-full md:w-1/2">
//     //           <label
//     //             htmlFor="codeLink"
//     //             className="block text-sm font-medium text-gray-700"
//     //           >
//     //             Code Link
//     //           </label>
//     //           <input
//     //             type="text"
//     //             id="codeLink"
//     //             placeholder="Enter your Code Link"
//     //             className="w-full border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     //           />
//     //         </div>

//     //         {/* Deployment Link */}
//     //         <div className="mb-4 w-full md:w-1/2">
//     //           <label
//     //             htmlFor="deploymentLink"
//     //             className="block text-sm font-medium text-gray-700"
//     //           >
//     //             Deployment Link
//     //           </label>
//     //           <input
//     //             type="text"
//     //             id="deploymentLink"
//     //             placeholder="Enter your Deployment Link"
//     //             className="w-full border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     //           />
//     //         </div>
//     //       </div>

//     //       {/* Submit Button */}
//     //       <button
//     //         type="submit"
//     //         disabled={loading}
//     //         className="w-full bg-blue-400 font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//     //       >
//     //         {loading ? "Submitting..." : "Submit"}
//     //       </button>
//     //     </form>
//     //   </div>
//     // </div>
    

//     <div className="w-full px-3">
//   {/* New Assignment */}
//   <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
//     <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
//       New Assignment
//     </h3>

//     <div>
//       {latestAssignment?.data ? (
//         <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow mb-6">
//           <p className="font-serif font-semibold">
//             <strong>Assignment ID:</strong> {latestAssignment.data.assignmentId}
//           </p>
//           <p className="font-serif font-semibold">
//             <strong>Assignment:</strong> {latestAssignment.data.assignment}
//           </p>
//         </div>
//       ) : (
//         <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow text-center">
//           <strong>No latest assignment found.</strong>
//         </div>
//       )}
//     </div>

//     {/* New Feeds Form */}
//     <form onSubmit={handleAssignmentSubmission}>
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Code Link */}
//         <div className="w-full md:w-1/2">
//           <label
//             htmlFor="codeLink"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Code Link
//           </label>
//           <input
//             type="text"
//             id="codeLink"
//             placeholder="Enter your Code Link"
//             className="w-full border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           />
//         </div>

//         {/* Deployment Link */}
//         <div className="w-full md:w-1/2">
//           <label
//             htmlFor="deploymentLink"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Deployment Link
//           </label>
//           <input
//             type="text"
//             id="deploymentLink"
//             placeholder="Enter your Deployment Link"
//             className="w-full border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           />
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="mt-4">
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-400 font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-500 hover:shadow-lg transition duration-300"
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </div>
//     </form>
//   </div>
// </div>

//   );
// }
// ------------------------

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

export default function NewAssignments() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId] = useState(user); 
  const [latestAssignment, setLatestAssignment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const { courseId, teacherId, studentId, sectionId, batch, days } =
    currentUserCourseId || {};

  useEffect(() => {
    if (studentId) return;

    const fetchLatestAssignment = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${AppRouts.getLeatestAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
        );
        setLatestAssignment(response.data?.data ? response.data : null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLatestAssignment();
  }, [courseId, teacherId, sectionId, days, batch, studentId]);

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
      assignment: latestAssignment?.data.assignment,
      assignmentId: latestAssignment?.data.assignmentId,
      codeLink,
      deploymentLink,
    };

    setLoading(true);
    try {
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
        New Assignment
      </button>

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-center mb-4">New Assignment</h3>

            {latestAssignment?.data ? (
              <div className="mb-4">
                <p><strong>Assignment ID:</strong> {latestAssignment.data.assignmentId}</p>
                <p><strong>Assignment:</strong> {latestAssignment.data.assignment}</p>
              </div>
            ) : (
              <p>No latest assignment found.</p>
            )}

            <form onSubmit={handleAssignmentSubmission}>
              <div className="mb-4">
                <label htmlFor="codeLink" className="block text-sm font-medium">
                  Code Link
                </label>
                <input
                  type="text"
                  id="codeLink"
                  placeholder="Enter your Code Link"
                  className="w-full border p-2 rounded-lg mt-2"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="deploymentLink" className="block text-sm font-medium">
                  Deployment Link
                </label>
                <input
                  type="text"
                  id="deploymentLink"
                  placeholder="Enter your Deployment Link"
                  className="w-full border p-2 rounded-lg mt-2"
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
