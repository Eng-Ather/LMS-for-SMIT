
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";
import axios from "axios";

const CoveredTopic = () => {
    const [loding, setLoading] = useState();

    const { user } = useContext(AuthContext);
    const data = user;
  
    // function to update covered topics in data base
    const updateCourseOutline = (e) => {
      e.preventDefault();
  
      // getting userID (Teacher ID)
      const teacherID = data.userId;
  
      if (
        !e.target.elements.Batch.value ||
        !e.target.elements.courseId.value ||
        !e.target.elements.days.value ||
        !e.target.elements.sectionId.value ||
        !e.target.elements.coveredTopic.value ||
        !teacherID
      ) {
        alert("submit complete data");
        return;
      }
  
      const updateTopisc = {
        teacherId: teacherID,
        batch: e.target.elements.Batch.value,
        courseId: e.target.elements.courseId.value,
        days: e.target.elements.days.value,
        sectionId: e.target.elements.sectionId.value,
        coveredTopic: e.target.elements.coveredTopic.value,
      };
      setLoading(true);
      console.log(updateTopisc);
  
  
      //calling api to updte course outlin in mongoDB
      axios
        .post(AppRouts.updateCourseOutline, updateTopisc) //calling API to update course outline
        .then((res) => {
          console.log(res);
          setLoading(false);
          alert("Updating Course Outline Successfully");

          // Reset the form fields after success operation
      e.target.reset();  // This will clear the input fields
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error while updating Course Outline:", error.message);
          alert("Error while updating Course Outline: " + error.message);
        });
    };

    return (    
      <div className="bg-white  shadow-lg rounded-lg ">
        <div className="border bg-blue-50 border-blue-300 rounded-lg p-3">
          <h3 className="text-lg md:text-2xl text-center font-serif text-headingColor mb-4 border-b p-2 border-blue-500">
            Update Course Outline
          </h3>

          {/* form for update course outline*/}
          <form onSubmit={updateCourseOutline}>
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

            {/* covered topics Input */}
            <div className="my-3">
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
  );
};

export default CoveredTopic;
