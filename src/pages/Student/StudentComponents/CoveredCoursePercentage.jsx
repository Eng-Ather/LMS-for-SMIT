import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/context";
import AppRouts from "../../../constant/constant";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const CoveredCoursePercentage = () => {
  const { user } = useContext(AuthContext);
  const [currentUserCourseId, setCurrentUserCourseId] = useState(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courseTopics, setCourseTopics] = useState([]);
  const [coveredTopics, setCoveredTopics] = useState([]);
  const [percentageOfCoverTopics, setPercentageOfCoverTopics] = useState(" ");

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

  // to calculate percentage of coer topics
  useEffect(() => {
    if (courseTopics.length > 0) {
      const percentage = (
        (coveredTopics.length / courseTopics.length) *
        100
      ).toFixed(2);
      console.log("Course covered = ", percentage); // Log the calculated value
      setPercentageOfCoverTopics(percentage);
    }
  }, [coveredTopics.length, courseTopics.length]);

  //   pi grap details
  const data = {
    labels: ["Covered", "Remaining"],
    datasets: [
      {
        data: [
          coveredTopics.length,
          courseTopics.length - coveredTopics.length,
        ],
        backgroundColor: ["#5F9EE0", "#0E7490"],
        // hoverBackgroundColor: ["#45A049", "#FF4373"],
      },
    ],
  };

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;

  return (
    <div className=" ">
      {/* Course Coverage */}
      <div className=" border-b-2 w-full h-fit rounded-lg p-4 flex flex-row items-center justify-between">
        <h5 className="font-semibold text-sm md:text-md text-cyan-800 text-start md:text-center w-1/2 mb-6 ">
          Course Coverage {percentageOfCoverTopics}%
        </h5>
        <div className="  sm:w-1/2 h-28 text-right">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default CoveredCoursePercentage;
