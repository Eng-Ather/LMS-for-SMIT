import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";

export default function NewAssignments() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId] = useState(user); // Assuming `user` has all required properties
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handelAssignmentSubmission = async (e) => {
    e.preventDefault();

    const codeLink = e.target.codeLink.value.trim();
    const deploymentLink = e.target.deploymentLink.value.trim();

    if (!codeLink || !deploymentLink) {
      alert("Both Code Link and Deployment Link are required!");
      return;
    }

    const submissionData = {
      codeLink,
      deploymentLink,
      studentId: currentUserCourseId?.userId,
      courseId: currentUserCourseId?.courseId,
      teacherId: currentUserCourseId?.teacherId,
      batch: currentUserCourseId?.batch,
      sectionId: currentUserCourseId?.sectionId,
    };

    console.log("submissionData", submissionData);
    
    try {
      setLoading(true);
      setError(null); // Reset error state

      // Assuming a POST request to submit the assignment
      const response = await axios.post(
        "YOUR_API_ENDPOINT_HERE",
        submissionData
      );

    //   if (response.status === 200) {
    //     alert("Assignment submitted successfully!");
    //     e.target.reset(); // Reset the form
    //   } else {
    //     throw new Error("Failed to submit assignment.");
    //   }
    } catch (err) {
      console.error("Error submitting assignment:", err);
      setError(err.message || "An unexpected error occurred.");
    } 
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="w-full px-3">
      {/* New Assignment */}
      <div className="my-8 bg-white border-t-4 border-green-300 shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-subHeadingColor text-2xl md:text-4xl text-center border-b pb-2 border-subHeadingColor mb-6">
          New Assignment
        </h3>

        {/* New Feeds Form */}
        <form onSubmit={handelAssignmentSubmission}>
          
          <div className="flex flex-col md:flex-row gap-4">
            {/* Code Link */}
            <div className="mb-4 w-full md:w-1/2">
              <label
                htmlFor="codeLink"
                className="block text-sm font-medium text-gray-700"
              >
                Code Link
              </label>
              <input
                type="text"
                id="codeLink"
                placeholder="Enter your Code Link"
                className="w-full border border-green-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Deployment Link */}
            <div className="mb-4 w-full md:w-1/2">
              <label
                htmlFor="deploymentLink"
                className="block text-sm font-medium text-gray-700"
              >
                Deployment Link
              </label>
              <input
                type="text"
                id="deploymentLink"
                placeholder="Enter your Deployment Link"
                className="w-full border border-green-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring--500"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-subHeadingColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
