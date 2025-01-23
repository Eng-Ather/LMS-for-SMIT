import React, { useEffect, useState } from "react";
import { GiPc } from "react-icons/gi";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaLaptopCode } from "react-icons/fa";
import axios from "axios";
import AppRouts from "../../../constant/constant";
import AdminToolKit from "./AdimnToolKit";
import { Link } from "react-router-dom";

export default function MainScreen() {
  const [Courses, setCourses] = useState([]);
  const [Teachers, setTeachers] = useState([]);
  const [Students, setStudents] = useState([]);
  const [Announcement, setAnnouncement] = useState([]);

  // Fetch Courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(AppRouts.getAllCourses);
        setCourses(response.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };
    fetchCourses();
  }, []);

  // Fetch Teachers
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(AppRouts.getAllTeacher);
        setTeachers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching teachers:", error.message);
      }
    };
    fetchTeachers();
  }, []);

  // Fetch Students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(AppRouts.getAllStudents);
        setStudents(response.data.data || []);
      } catch (error) {
        console.error("Error fetching students:", error.message);
      }
    };
    fetchStudents();
  }, []);

  // Fetch Announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(AppRouts.getAllAnnouncements);
        setAnnouncement(response.data.data || []);
      } catch (error) {
        console.error("Error fetching announcements:", error.message);
      }
    };
    fetchAnnouncements();
  }, []);

  const bestTeachers = Teachers.slice(0, 4);
  const bestCourses = Courses.slice(0, 4);
  const mainAnnouncements = Announcement.slice(0, 4);

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="h-screen overflow-y-scroll bg-gray-100 p-4 md:p-6">
        <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
          {/* Stats Section */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 text-center text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
              <span className="text-3xl">{Courses.length}</span>
              <h3 className="text-md md:text-2xl font-serif text-center text-headingColor ">
                Courses
              </h3>
            </div>
            <div className="bg-blue-50 text-center text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
              <span className="text-3xl">{Teachers.length}</span>
              <h3 className="text-md md:text-2xl font-serif text-center text-headingColor">
                Instructors
              </h3>
            </div>
            <div className="bg-blue-50 text-center  text-headingColor flex flex-col justify-center items-center border border-blue-300 shadow-md rounded-lg p-6">
              <span className="text-3xl">{Students.length}</span>
              <h3 className="text-md md:text-2xl font-serif text-center text-headingColor">
                Students
              </h3>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row mt-6 gap-4">
            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col">
              {/* Center Image */}
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  className="h-64 w-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="LMS"
                />
              </div>

              {/* Available Courses */}
              <div className="w-full p-6  bg-blue-50 border border-blue-300 rounded-lg">
                <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
                  Available Courses
                </h2>
                {bestCourses.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-blue-100 rounded-lg shadow-md p-4 mb-4"
                  >
                    <div className="flex items-center">
                      <FaLaptopCode className="text-blue-500 text-3xl mr-4" />
                      <h3 className="font-serif text-headingColor text-lg">
                        {data.courseTitle || "Untitled Course"}
                      </h3>
                    </div>
                    <Link
                      to={`/addcourse/${data.courseId}`}
                      className="text-md text-gray-500 hover:text-black hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {/* Admin Toolkit */}
              <div>
                <AdminToolKit />
              </div>

              {/* Announcements */}
              <div className="w-full p-6 bg-blue-50 border border-blue-300 rounded-lg">
                <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
                  Announcements
                </h2>
                {mainAnnouncements.map((data, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 rounded-lg p-2 md:p-4 mb-2"
                  >
                    <div className="flex flex-col md:flex-row justify-between">
                      <h3 className="font-serif text-headingColor text-md">
                        {data.title || "No Title"}
                      </h3>
                      <p className="text-sm">
                        On {data.date || "N/A"} at {data.time || "N/A"}
                      </p>
                    </div>
                    <p className="text-sm">Held at {data.location || "N/A"}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
