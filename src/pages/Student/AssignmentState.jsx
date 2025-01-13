
import React from "react";

export const AssignmentStats = ({ assignmentsCompleted, totalAssignments, coursePercentage }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-navbarColor flex flex-col font-serif">
      <div className="flex items-center justify-between bg-blue-50 border-l-4 border-navbarColor p-2 mb-2 rounded-lg">
        <div className="flex flex-col">
          <span className="text-md font-bold text-headingColor">
            Assignments Completed:
          </span>
          <p className="text-lg font-bold">
            {assignmentsCompleted} / {totalAssignments}
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-navbarColor p-2 mb-3 rounded-lg">
        <span className="text-md font-bold text-headingColor">
          Course Coverage:
        </span>
        <h4 className="text-lg font-bold">{coursePercentage}% </h4>
      </div>

      <div className="text-sm mt-2">
        Keep track of your progress and stay motivated!
      </div>
    </div>
  );
};
