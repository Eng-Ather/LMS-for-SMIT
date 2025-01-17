
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AuthContext } from "../../context/context";
import AppRouts from "../../constant/constant";

export default function AssignmentsStats() {
  // Global variable (carry current user information)
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);

  // State to feed API data
  const [assignments, setAssignments] = useState([]); // State for all assignments
  const [submitedAssignment, setsubmitedAssignment] = useState([]); // State for submitted assignments

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // To record assignment status
  const [totalAssignment, setTotalAssignment] = useState(0);
  const [pendingAssignment, setPendingAssignment] = useState(0);
  const [submittedAssignmentCount, setSubmittedAssignmentCount] = useState(0);

  const id = currentUserCourseId?.courseId;
  const courseId = currentUserCourseId?.courseId;
  const teacherId = currentUserCourseId?.teacherId;
  const sectionId = currentUserCourseId?.sectionId;
  const days = currentUserCourseId?.days;
  const batch = currentUserCourseId?.batch;
  const studentId = currentUserCourseId?.userId;

  // To get all assignments of user assigned by teacher
  useEffect(() => {
    if (!id) return;

    const fetchSpecificCourseAssignment = async () => {
      try {
        const response = await axios.get(
          `${AppRouts.getSpecificCourseAssignment}${courseId}/${teacherId}/${sectionId}/${days}/${batch}`
        );
        const data = response.data.data || [];
        setAssignments(data);
        setTotalAssignment(data.length); // Set total assignments count
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSpecificCourseAssignment();
  }, [courseId, teacherId, sectionId, days, batch]);

  // To get user submitted assignments
  useEffect(() => {
    if (!id) return;

    const fetchStudentSubmitedAssignment = async () => {
      try {
        const res = await axios.get(
          `${AppRouts.getStudentSubmitedAssigment}${batch}/${courseId}/${sectionId}/${days}/${studentId}`
        );
        const data = res.data.data || [];
        setsubmitedAssignment(data);
        setSubmittedAssignmentCount(data.length); // Set submitted assignments count
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStudentSubmitedAssignment();
  }, [courseId, teacherId, sectionId, days, batch]);

  // Calculate pending assignments when data changes
  useEffect(() => {
    const pending = assignments.length - submitedAssignment.length;
    setPendingAssignment(pending >= 0 ? pending : 0);
  }, [assignments, submitedAssignment]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Calculate submitted and pending percentages
  const submittedPercentage = totalAssignment
    ? Math.round((submittedAssignmentCount / totalAssignment) * 100)
    : 0;

  const pendingPercentage = totalAssignment
    ? Math.round((pendingAssignment / totalAssignment) * 100)
    : 0;

  return (
    <div className="w-full px-3">

      <div className="  w-full  h-fit flex  justify-around items-start  ">
        {/* Total Assignments */}
        <div className=" h-fit w-1/12 my-2">
          <p className="font-semibold text-xs md:text-sm text-cyan-800 mb-2">
            Total Assignments
          </p>

          <CircularProgressbar
            value={100}
            text={` ${totalAssignment || 0}`}
            styles={buildStyles({
              textColor: "#006D77",
              pathColor: "#006D77",
              trailColor: "#CBD5E0",
              textSize: "30px",
            })}
          />
        </div>

        {/* Submitted Assignments */}
        <div className=" h-fit w-1/12 my-2">
          <p className="font-semibold text-xs md:text-sm text-navbarColor">
            Submited Assignments
          </p>

          <CircularProgressbar
            value={submittedPercentage}
            text={`${submittedAssignmentCount || 0}`}
            styles={buildStyles({
              textColor: "#5F9EE0",
              pathColor: "#5F9EE0",
              trailColor: "#93C5FD",
              textSize: "30px",
            })}
          />

          <p className="text-sm text-navbarColor">({submittedPercentage}%)</p>
        </div>

        {/* Pending Assignments */}
        <div className=" h-fit w-1/12 my-2">
          <p className="font-semibold text-xs md:text-sm text-red-600">
            Pending Assignments
          </p>
          <CircularProgressbar
            value={pendingPercentage}
            text={`${pendingAssignment || 0}`}
            styles={buildStyles({
              textColor: "#E53E3E",
              pathColor: "#C53030",
              trailColor: "#FED7D7",
              textSize: "30px",
            })}
          />
          <p className="text-sm text-red-700">({pendingPercentage}%)</p>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
