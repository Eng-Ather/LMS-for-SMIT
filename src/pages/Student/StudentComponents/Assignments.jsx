import React, {useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AssignmentsStatus from "./AssignmentStatus";
import AssignmentsStats from "../AssignmentState";

export default function Assignments() {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);

  return (
    <div className="h-screen overflow-auto bg-gray-100">
     
      {/* assignment stats */}
      <div className="m-4 flex flex-col lg:flex-row items-end justify-around my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="w-full lg:w-1/3 font-serif text-headingColor text-2xl md:text-3xl lg:text-4xl text-center mb-6">
          Assignments Summary
        </h3>
        <AssignmentsStats />
      </div>

      {/* All Assigment (submited and pending both) */}
      <AssignmentsStatus />
    </div>
  );
}
