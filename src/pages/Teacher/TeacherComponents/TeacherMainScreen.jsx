import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/context";

export default function TeacherMainScreen() {
  const [loding, setLoading] = useState();

  const { user } = useContext(AuthContext);
  const data = user;
  
  // function to update covered topics in data base
  const updateCourseOutline = (e) => {
    e.preventDefault();
    const batch = e.target.elements.Batch.value;
    const courseId = e.target.elements.courseId.value;
    const days = e.target.elements.days.value;
    const sectionId = e.target.elements.sectionId.value;
    const coveredTopic = e.target.elements.coveredTopic.value;

    // getting userID (Teacher ID)
    const teacherId = data.userId;

    // console.log({ batch, courseId, days, sectionId, coveredTopic });
    console.log({ batch, courseId, days, sectionId, coveredTopic, teacherId });
  };

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
                className="w-28 h-28 rounded-full border-4 border-navbarColor shadow-lg transform hover:scale-110 transition-transform duration-300"
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

      {/* new assigment */}
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
        <div className="border bg-blue-50 border-blue-300 rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-2xl font-serif text-headingColor mb-4 border-b pb-2 border-blue-500">
            Update Course Outline
          </h3>

          {/* form */}
          <form onSubmit={updateCourseOutline}>
            <div className="flex flex-col md:flex-row justify-around">
{/* 1st row */}
              {/* Batch Input ------------- */}
              <div className="mb-4 w-full md:w-1/4">
                <label htmlFor="batchDropdown"> Batch </label>
                <select
                  name="Batch"
                  className="w-full border border-blue-300 rounded-lg p-2"
                >
                  {data && data.batch && data.batch.length > 0 ? (
                    <>
                      <option value="" disabled selected>
                        Select Batch
                      </option>
                      {data.batch.map((batch, index) => (
                        <option key={index} value={batch}>
                          {batch}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="">No Batches Available</option>
                  )}
                </select>
              </div>

              {/* course ID Input */}
              <div className="mb-4 w-full md:w-1/4">
                <label htmlFor="courseIdDropdown"> Course ID </label>
                <select
                  name="courseId"
                  className="w-full border border-blue-300 rounded-lg p-2"
                >
                  {data && data.courseId && data.courseId.length > 0 ? (
                    <>
                      <option value="" disabled selected>
                        Select Course ID
                      </option>
                      {data.courseId.map((courseID, index) => (
                        <option key={index} value={courseID}>
                          {courseID}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="">No Course Available</option>
                  )}
                </select>
              </div>
            </div>

{/* 2nd row  */}
            <div className="flex flex-col md:flex-row justify-around">
             
              {/* days Input */}
              <div className="mb-4 w-full md:w-1/4">
                <label htmlFor="daysDropdown"> Days </label>
                <select
                  name="days"
                  className="w-full border border-blue-300 rounded-lg p-2"
                >
                  {data && data.days && data.days.length > 0 ? (
                    <>
                      <option value="" disabled selected>
                        Select Batch
                      </option>
                      {data.days.map((days, index) => (
                        <option key={index} value={days}>
                          {days}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="">No Time Slot Available</option>
                  )}
                </select>
              </div>

              {/* section ID Input */}
              <div className="mb-4 w-full md:w-1/4">
                <label htmlFor="sectionIdDropdown"> Section ID </label>
                <select
                  name="sectionId"
                  className="w-full border border-blue-300 rounded-lg p-2"
                >
                  {data && data.sectionId && data.sectionId.length > 0 ? (
                    <>
                      <option value="" disabled selected>
                        Select Section Id
                      </option>
                      {data.sectionId.map((sectionId, index) => (
                        <option key={index} value={sectionId}>
                          {sectionId}
                        </option>
                      ))}
                    </>
                  ) : (
                    <option value="">No Batches Available</option>
                  )}
                </select>
              </div>

            </div>

            {/* covered topics Input */}
            <div className="mb-4">
              <label htmlFor="coveredTopic"> Covered Topics </label>
              <input
                type="text"
                name="coveredTopic"
                placeholder="Content Covered"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {loding ? "Loading..." : "Submit"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
