import { useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";
import axios from "axios";

const CreateAssignment = () => {
  const [loding, setLoading] = useState();

  const { user } = useContext(AuthContext);
  const data = user;

  // function to create New Assignment
  const createNewAssignment = (e) => {
    e.preventDefault();

    // getting userID (Teacher ID)
    const teacherID = data.userId;

    if (
      !e.target.elements.Batch.value ||
      !e.target.elements.courseId.value ||
      !e.target.elements.days.value ||
      !e.target.elements.sectionId.value ||
      !e.target.elements.newAssignment.value ||
      !e.target.elements.assignmentId.value ||
      !teacherID
    ) {
      alert("submit complete data");
      return;
    }

    const newAssignment = {
      teacherId: teacherID,
      batch: e.target.elements.Batch.value,
      courseId: e.target.elements.courseId.value,
      days: e.target.elements.days.value,
      sectionId: e.target.elements.sectionId.value,
      assignment: e.target.elements.newAssignment.value,
      assignmentId: e.target.elements.assignmentId.value,
    };
    setLoading(true);
    console.log(newAssignment);

    //calling api to updte course outlin in mongoDB
    axios
      .post(AppRouts.createAssignment, newAssignment)
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Assignment created Successfully");
        // Reset the form fields after success operation
      e.target.reset();  // This will clear the input fields
      })
      .catch((error) => {
        console.log("error: ", error.message);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
      <div className="border bg-blue-50 border-blue-300 rounded-lg p-4 md:p-6">
        <h3 className="text-lg md:text-2xl font-serif text-headingColor mb-4 border-b pb-2 border-blue-500">
          New Assignment
        </h3>

        {/* form for New Assignment*/}
        <form onSubmit={createNewAssignment}>
          <div className="flex flex-col md:flex-row justify-around">
            {" "}
            {/* 1st row */}
            {/* Batch Input */}
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

          <div className="flex flex-col md:flex-row justify-around">
            {" "}
            {/*2nd row*/}
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
                      Select Days
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

          <div className="flex flex-col md:flex-row justify-around">
            {/* Assignment ID */}
            <div className="mb-4 w-full  md:w-1/4 ">
              <label htmlFor="assignmentID">Assignment ID</label>
              <input
                type="text"
                name="assignmentId"
                placeholder="Enter Assignment ID"
                className="w-full border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Assignment Input */}
            <div className="mb-4 w-full md:w-1/4">
              <label htmlFor="newAssignment">Assignment</label>
              <textarea
                rows={2}
                name="newAssignment"
                placeholder="Create Assignment"
                className="w-full  border border-blue-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
  );
};

export default CreateAssignment;
