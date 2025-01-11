import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

export default function NewAssignments() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId] = useState(user); // Assuming `user` has all required properties
  const [latestAssignment, setLatestAssignment] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Destructure safely with fallback to an empty object
  const { courseId, teacherId, studentId, sectionId, batch, days } =
    currentUserCourseId || {};

  console.log("current user data", currentUserCourseId);
  console.log(days);

  // to get the latest Assignment of user assigned by teacher
  useEffect(() => {
    if (studentId) return;

    const fetchLatestAssignment = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          `${AppRouts.getLeatestAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
        );
        console.log(response.data);

        if (response.data.data) {
          setLatestAssignment(response.data); // Set latest assignment
        } else {
          setLatestAssignment(null); // No data found
        }
        setLoading(false); // Stop loading
      } catch (error) {
        setError(error.message); // Set error message
        setLoading(false); // Stop loading
      }
    };

    fetchLatestAssignment();
  }, [courseId, teacherId, sectionId, days, batch, studentId]);

  // function to submit the assigment
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
      batch: currentUserCourseId?.batch,
      courseId: currentUserCourseId?.courseId,
      days,
      sectionId: currentUserCourseId?.sectionId,
      assignment: latestAssignment?.data.assignment,
      assignmentId: latestAssignment.data.assignmentId,
      codeLink,
      deploymentLink,
    };
    setLoading(true);
    console.log("submissionData", submissionData);

    //calling api to updte Leatest Assignment in mongoDB
    axios
      .post(AppRouts.submitAssignment, submissionData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Assignment Submited Successfully");
      })
      .catch((error) => {
        console.log("error: ", error.message);
        setLoading(false);
        alert("Error during submission ")
      });
  };

  return (
    <div className="w-full px-3">
      {/* New Assignment */}
      <div className="my-8 bg-white border-t-4 border-green-300 shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-subHeadingColor text-2xl md:text-4xl text-center border-b pb-2 border-subHeadingColor mb-6">
          New Assignment
        </h3>

        <div>
          {latestAssignment?.data ? (
            <div className="font-serif font-semibold py-2 mb-6">
              <p>Assignment ID: {latestAssignment.data.assignmentId}</p>
              <p> Assignment: {latestAssignment.data.assignment}</p>
            </div>
          ) : (
            <p>No latest assignment found.</p>
          )}
        </div>

        {/* New Feeds Form */}
        <form onSubmit={handleAssignmentSubmission}>
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
                className="w-full border border-green-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

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
