import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";

const CourseOutline = () => {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseTopics, setCourseTopics] = useState([]);
  const [coveredTopics, setCoveredTopics] = useState([]);

  console.log(user);

  const id = currentUserCourseId?.courseId;
  const courseId = currentUserCourseId?.courseId;
  const teacherId = currentUserCourseId?.teacherId;
  const days = currentUserCourseId?.days;
  const sectionId = currentUserCourseId?.sectionId;

  useEffect(() => {
    if (!id) return;

    const fetchCourseContent = async () => {
      try {
        const courseid = AppRouts.getCourseOutline + id;
        const courseOutline = await axios.get(courseid);
        console.log(courseOutline.data.course.topics);

        setCourseTopics(courseOutline.data.course.topics || []);

        let updatedTopics =
          AppRouts.getCoveredTopics +
          courseId +
          "/" +
          teacherId +
          "/" +
          sectionId +
          "/" +
          days;

        updatedTopics = await axios.get(updatedTopics);
        console.log(updatedTopics.data.data);

        let a = updatedTopics.data.data;

        setCoveredTopics(a || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourseContent();
  }, [id]);

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;

  return (
    <div className=" h-screen overflow-auto">
      <div className="w-full px-3">
        {/* Covered Topics */}
        <div className="my-8 bg-white border-t-4 border-blue-300 shadow-lg rounded-lg p-4 md:p-6">
          <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-headingColor mb-6">
            Covered Topics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coveredTopics.length > 0 ? (
              coveredTopics.map((topic, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition"
                >
                  <strong> {index + 1}:</strong> {topic.coveredTopic}
                </div>
              ))
            ) : (
              <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-green-200 transition">
                ------ x ------
              </div>
            )}
          </div>
        </div>

        {/* Total Topics of Course */}
        <div className="my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
          <h3 className="font-serif text-headingColor text-2xl md:text-4xl text-center border-b pb-2 border-blue-500 mb-6">
            Course Outline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courseTopics.length > 0 ? (
              courseTopics.map((topic, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition"
                >
                  <strong> {index + 1}:</strong> {topic}
                </div>
              ))
            ) : (
              <div className="w-full text-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:bg-blue-200 transition">
                ------ x ------
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
