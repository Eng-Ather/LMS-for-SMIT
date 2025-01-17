import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaLaptopCode } from "react-icons/fa";
import axios from "axios";
import AppRouts from "../../../constant/constant";
import { Link } from "react-router";

export default function MainScreen() {
  const [Courses, setCourses] = useState([]);
  const [Teachers, setTeachers] = useState([]);
  const [Students, setStudents] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(AppRouts.getAllCourses);
        setCourses(response.data.data); // Save fetched data in state
      } catch (error) {
        console.error("Error fetching Courses:", error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(AppRouts.getAllTeacher);
        setTeachers(response.data.data); // Save fetched data in state
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(AppRouts.getAllStudents);
        setStudents(response.data.data); // Save fetched data in state
        console.log(Students);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchStudents();
  }, []);

  const bestTeachers = Teachers.slice(0, 4);
  const bestCourses = Courses.slice(2, 6);
  return (
    <div className="h-screen overflow-y-scroll">
      {/* main block  */}
      <div>
        <div className="grid grid-cols-3">
          <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
            Instructors : {Teachers.length}
          </div>
          <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
            Courses : {Courses.length}
          </div>
          <div className="m-4 bg-white text-2xl flex justify-center items-center border-t-4 border-navbarColor shadow-lg rounded-lg font-bold px-2 py-8">
            Students : {Students.length}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-9/12">
          <div>
            <div className="mx-2">
              <img
                className="h-72 w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="LMS"
              />
            </div>
          </div>
        </div>
        {/* side block  */}
        <div className="w-3/12">
          <div className="p-2 border-navbarColor font-bold ">
            {/* insructors  */}
            <h2 className="text-xl text-center">Best Instructors</h2>
            {bestTeachers.map((data, index) => (
              <div className="flex py-1 my-1 shadow-lg bg-blue-50 rounded">
                <span className="text-4xl my-2 mx-2">
                  {data.image ? (
                    <img
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={data.image}
                      alt="LMS"
                    />
                  ) : (
                    <RxAvatar className="text-cyan-900 rounded-full" />
                  )}
                </span>
                <span>
                  <h3 className="font-bold">{data.name}</h3>
                  {data.course.map((data, index) => (
                    <span key={index} className="text-xs">
                      {data}{" "}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="flex p-4 justify-between">
            <h2 className="font-bold text-2xl">Popular Courses</h2>
            <Link className="text-cyan-800" to={"/addcourse"}>
              All Courses
            </Link>
          </div>
          {bestCourses.map((data, index) => (
            <div className="flex bg-blue-50 justify-between items-center m-2 p-4 shadow-lg rounded">
              <div className="flex">
                <span className="flex text-3xl h-10 items-center justify-center rounded p-2 my-1">
                  <FaLaptopCode className="text-cyan-800" />
                </span>
                <h3 className="font-bold truncate  text-lg m-2">
                  {data.courseTitle}
                </h3>
              </div>
              <Link
                to={`/addcourse/${data.courseId}`}
                className="text-cyan-800 text-xs"
              >
                view
              </Link>
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <div className="flex p-4 justify-between">
            <h2 className="text-2xl text-center font-bold">Announcements</h2>
            <Link className="text-cyan-800" to={"/newannouncement"}>
              View All
            </Link>
          </div>
          <div className="flex my-2 shadow-lg rounded">
            <span className="m-2 p-2">
              <h3 className="font-semibold">New Teacher</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 shadow-lg rounded">
            <span className="m-2 p-2">
              <h3 className="font-semibold">New Teacher</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 shadow-lg rounded">
            <span className="m-2 p-2">
              <h3 className="font-semibold">New Teacher</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 shadow-lg rounded">
            <span className="m-2 p-2">
              <h3 className="font-semibold">New Teacher</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
