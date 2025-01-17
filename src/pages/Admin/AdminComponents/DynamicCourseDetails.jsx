import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppRouts from "../../../constant/constant";
import { CaretRightOutlined } from "@ant-design/icons";

export default function DynamicCourseDetails() {
  const { courseId } = useParams();
  const URL = AppRouts.getDynamicCourseDetails + courseId;
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(URL);
        setCourse(response.data.data);
        console.log(course);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourse();
  }, []);

  return (
    <div className=" h-screen overflow-y-scroll p-10">
      <div className="m-4 grid lg:flex-row items-end justify-center my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="font-serif text-headingColor text-2xl md:text-3xl lg:text-5xl text-center mb-6">
          {course.courseTitle}
        </h3>
        <div class="flex items-center text-xl font-mono justify-center">
          <div class="h-2.5 w-2.5 rounded-full bg-cyan-700 me-2"></div>
          {course.courseId}
        </div>
      </div>
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={course.image}
            />
            <div className="lg:w-2/3 w-full">
              <ul>
                <li className="text-xl my-2 font-bold">
                  {" "}
                  <CaretRightOutlined /> Teacher : {course.teacherName}
                </li>
                <li className="text-xl my-2 font-bold">
                  {" "}
                  <CaretRightOutlined /> ID : {course.teacherId}
                </li>
                <li className="text-xl my-2 font-bold">
                  {" "}
                  <CaretRightOutlined /> Batch : {course.batch}
                </li>
                <li className="text-xl my-2 font-bold">
                  {" "}
                  <CaretRightOutlined /> Days : {course.days}
                </li>
                <li className="text-xl my-2 font-bold">
                  {" "}
                  <CaretRightOutlined /> Section : {course.sectionId}
                </li>
              </ul>
              <div className="flex justify-center">
                <p className="font-semibold">{course.courseDescription}</p>
              </div>
              <h3 className="font-bold text-3xl my-6">Topics :</h3>
              <div className="grid grid-cols-2">
                {course?.topics?.length > 0 ? (
                  course.topics.map((topic, index) => (
                    <span key={index} className="text-xl mx-10 my-2">
                      <CaretRightOutlined /> {topic}
                    </span>
                  ))
                ) : (
                  <p>No topics available</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
