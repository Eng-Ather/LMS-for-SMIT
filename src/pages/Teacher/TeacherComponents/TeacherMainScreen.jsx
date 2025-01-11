import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";
import axios from "axios";
import CoveredTopic from "./updateCourseOuline";
import CreateAssignment from "./createAssignment";

export default function TeacherMainScreen() {
  const [loding, setLoading] = useState();

  const { user } = useContext(AuthContext);
  const data = user;

  return (
    <div className="h-screen overflow-y-scroll bg-gray-100 p-4 ">
      {/* teacher profile card */}
      {data ? (
        // if user data is avilable
        <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
          <div className="border bg-blue-50 border-blue-300 rounded-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Student"
                className="w-28 h-28 rounded-full border-4 border-navbarColor transform hover:scale-110 transition-transform duration-300"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg md:text-2xl font-serif uppercase text-headingColor">
                  {data.name || "Name not available"}
                </h2>

                <p className="text-sm md:text-base text-textColor">
                  Teacher ID: {data.userId || "N/A"}
                </p>

                <p className="text-sm md:text-base text-textColor">
                  Email: {data.email || "Email not available"}
                </p>

                <p className="text-sm md:text-base text-textColor">
                  <span className="font-medium">Courses: </span>
                  {data.course && data.course.length > 0 ? (
                    data.course.map((course, index) => (
                      <span key={index}>
                        <b> {course} </b> ({data.courseId[index] || "No ID"}){" "}
                        {" , "}
                      </span>
                    ))
                  ) : (
                    <span> No courses available</span>
                  )}
                </p>

                <p className="text-sm md:text-base text-textColor">
                  <span className="font-medium">Assign Batch & Section </span>
                  {data.course && data.course.length > 0 ? (
                    data.course.map((course, index) => (
                      <span key={index}>
                        <b> {course} </b>({data.batch[index] || "No batch"}){" "}
                        {" , "}({data.sectionId[index] || "No section"}){" , "}(
                        {data.days[index] || "-x-x-x-x-"})<br />
                      </span>
                    ))
                  ) : (
                    <span> No courses available</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // if user data is not avilable
        <p>empty</p>
      )}

      {/* Update course outline  */}
      <CoveredTopic />

      {/* New Assignment  */}
      <CreateAssignment />
    </div>
  );
}
