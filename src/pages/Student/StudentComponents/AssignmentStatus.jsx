import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";
import PendingAssignments from "./PendingAssignment";

export default function AssignmentsStatus() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
  const [assignments, setAssignments] = useState([]); // State for assignments
  const [submitedAssignment, setsubmitedAssignment] = useState([]); // State for Submited assignments
  const [passignment, setpassignment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // let submitedAssignment;
  const id = currentUserCourseId?.courseId;
  const courseId = currentUserCourseId?.courseId;
  const teacherId = currentUserCourseId?.teacherId;
  const sectionId = currentUserCourseId?.sectionId;
  const days = currentUserCourseId?.days;
  const batch = currentUserCourseId?.batch;
  const studentId = currentUserCourseId?.userId;

  // to get All assignment of user assign by teacher
  useEffect(() => {
    if (!id) return;

    const fetchSpecificCourseAssignment = async () => {
      try {
        const response = await axios.get(
          `${AppRouts.getSpecificCourseAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
        );
        // console.log(response.data.data);

        setAssignments(response.data.data || []); // Set assignments
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSpecificCourseAssignment();
  }, [courseId, teacherId, sectionId, days, batch]);

  //to get user Submited Assignment
  useEffect(() => {
    if (!id) return;

    const fetchStudentSubmitedAssignment = async () => {
      try {
        const res = await axios.get(
          `${AppRouts.getStudentSubmitedAssigment}${batch}/${courseId}/${sectionId}/${days}/${studentId}`
        );
        console.log(res.data.data);

        setsubmitedAssignment(res.data.data); // Set assignments

        console.log("submitedAssignment", submitedAssignment);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStudentSubmitedAssignment();
  }, [courseId, teacherId, sectionId, days, batch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full px-3">
      {/* Submited Assignments Record */}
      <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
          Assignments Status
        </h3>

        <div>
          {assignments.length > 0 ? (
            assignments.map((assignment, index) => {
              // Finding the submitted assignment
              const submitted = submitedAssignment.find(
                (submitAssignment, index) =>
                  submitAssignment.assignmentId === assignment.assignmentId
              );

              return (
                <div
                  key={index}
                  className="p-2 font-serif lg:p-4 flex flex-col lg:flex-row gap-4 justify-between bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition mb-4"
                >
                  <div className="w-full lg:w-1/2">
                    <span>{index + 1}. </span>

                    <strong>{assignment.assignment || "No Topic Name"} </strong>
                    <p>
                      {"("}Assignemnt ID :{" "}
                      {assignment.assignmentId || "No Topic Name"}
                      {")"}
                    </p>
                  </div>

                  <div className="w-full  lg:w-1/2">
                    <div className="mt-2">
                      {/* Show submission status */}
                      <strong
                        className={
                          submitted ? "text-subHeadingColor" : "text-red-600"
                        }
                      >
                        Status:{" "}
                        {submitted ? (
                          "Submitted"
                        ) : (
                          <div>
                            <PendingAssignments
                              assignment={assignment.assignment}
                              assignmentId={assignment.assignmentId}
                            />
                          </div>
                        )}
                      </strong>
                    </div>

                    {submitted ? (
                      <div className="mt-2 ">
                        {/* Show code link and deployment link if submission exists */}
                        <p>
                          <strong>Code Link:</strong>{" "}
                          <a
                            href={submitted.codeLink}
                            target="_blank"
                            className="text-blue-500 underline"
                          >
                            {submitted.codeLink || "No Code Link"}
                          </a>
                        </p>
                        <p className="mt-2">
                          <strong>Deployment Link:</strong>{" "}
                          <a
                            href={submitted.deploymentLink}
                            target="_blank"
                            className="text-blue-500 underline"
                          >
                            {submitted.deploymentLink || "No Deployment Link"}
                          </a>
                        </p>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <strong> No Submission Found</strong>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
              ------ x ------
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
