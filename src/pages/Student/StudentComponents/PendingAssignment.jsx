
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
    <div className="w-full ">
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsModal(true)}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Pending
      </button>

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full lg:w-1/2 rounded-xl p-6 mx-6 ">
            {assignment && assignmentId ? (
              <div className="mb-4 border-b pb-2 border-blue-500 font-serif text-center text-headingColor text-md md:text-lg ">
                <p>
                  <strong>Assignment ID:</strong> {assignmentId}
                </p>
                <p> {assignment}</p>
              </div>
            ) : (
              <p>No assignment found.</p>
            )}

            {/* input feild form for cod link and deployment link */}
            <form onSubmit={handleAssignmentSubmission}>
              <div className="mb-4">
                <label
                  htmlFor="codeLink"
                  className=" text-md font-medium text-gray-700"
                >
                  Code Link
                </label>
                <input
                  type="text"
                  id="codeLink"
                  name="codeLink"
                  placeholder="Enter your Code Link"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deploymentLink"
                  className=" text-md font-medium text-gray-700"
                >
                  Deployment Link
                </label>
                <input
                  type="text"
                  id="deploymentLink"
                  name="deploymentLink"
                  placeholder="Enter your Deployment Link"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                {/* submit assignment button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navbarColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* modal close button */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={() => setIsModal(false)}
                className="w-full font-serif font-bold bg-subHeadingColor text-lg text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
