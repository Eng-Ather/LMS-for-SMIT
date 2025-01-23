
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import AppRouts from "../../../constant/constant";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Instructors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setfilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "teacher",
      userId: e.target.userid.value,
      batch: e.target.batches.value,
      course: e.target.courses.value,
      courseId: e.target.courseid.value,
      days: e.target.days.value,
      sectionId: e.target.sectionid.value,
    };

    axios
      .post(AppRouts.addTeacher, obj)
      .then((res) => {
        console.log(res);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(AppRouts.getAllTeacher);
        setTeachers(response.data.data); // Save fetched data in state
        setfilteredTeachers(response.data.data); // Save all teacher in filter data to show all teacher initally        console.log(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // search filter
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    console.log("teacher info = ", teachers);

    const filtereddata = teachers.filter((data) => {
      // searching in all fields
      return (
        data.name.toLowerCase().includes(searchTerm) ||
        data.userId.toLowerCase().includes(searchTerm) ||
        data.batch.join("").toLowerCase().includes(searchTerm) ||
        data.course.join("").toLowerCase().includes(searchTerm) ||
        data.courseId.join("").toLowerCase().includes(searchTerm) ||
        data.days.join("").toLowerCase().includes(searchTerm) ||
        data.sectionId.join("").toLowerCase().includes(searchTerm)
        // data.CNICno.includes(searchTerm)
      );
    });

    setfilteredTeachers(filtereddata);
  }, [searchTerm]);

  return (
    <div className="h-screen overflow-y-scroll p-2">
      <div className="m-2 p-4 bg-white border-t-4 border-navbarColor  rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="w-full flex flex-col gap-4 sm:gap-2 sm:flex-row items-center justify-between p-4 my-4 ">
          {/* Add New Instructor Button */}
          <button
            data-tooltip-id="addInstructor-tooltip"
            onClick={openModal}
            className="flex items-center justify-center w-fit bg-navbarColor text-white  py-2 px-4 rounded-lg hover:bg-blue-600  transition duration-300"
          >
            <ReactTooltip
              id="addInstructor-tooltip"
              place="bottom"
              content="Add Instructor"
            />
            <PlusOutlined className="text-lg" />
            {/* <span className="ml-2">Add New</span> */}
          </button>

          {/* Total Instructors */}
          <div className="flex items-center justify-center w-full sm:w-1/4 bg-blue-50 text-center text-headingColor shadow-md rounded-lg py-2 px-3">
            <span className="text-sm md:text-lg font-serif">
              {teachers.length} - Instructors
            </span>
          </div>

          {/* Search Bar with Results */}
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-1/2">
            <input
              className="w-full sm:w-2/3 py-2 px-4 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
              type="search"
              name="searchFilter"
              placeholder="Search here"
              value={searchTerm}
              onChange={handleSearch}
            />
            {/* <div className="w-full sm:w-1/3 bg-blue-50 text-center text-headingColor shadow-md rounded-lg py-2 px-3">
              <span className="text-sm md:text-lg font-serif">
                {!searchTerm ? "No" : filteredTeachers.length} result(s) found
              </span>
            </div> */}
          </div>
        </div>

        {/* Filtered Student List */}
        <div className="w-full bg-gray-50 rounded-lg shadow-md">
          <table className="min-w-full table-auto bg-white border-collapse rounded-lg">
            <thead>
              <tr className="bg-navbarColor text-white">
                <th className="px-4 py-2 border-b border-blue-300">#</th>
                <th className="px-4 py-2 border-b border-blue-300">Name</th>
                <th className="px-4 py-2 border-b border-blue-300">C.N.I.C</th>
                <th className="px-4 py-2 border-b border-blue-300">Email</th>
                <th className="px-4 py-2 border-b border-blue-300">
                  Course & Batch
                </th>
                <th className="px-4 py-2 border-b border-blue-300">
                  Days & Section
                </th>
                <th className="px-4 py-2 border-b border-blue-300">
                  Teacher ID
                </th>
                <th className="px-4 py-2 border-b border-blue-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((data, index) => (
                <tr key={data._id} className="hover:bg-blue-100">
                  <td className="px-4 py-2 border-b border-blue-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.name}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.CNICno ? (
                      data.CNICno
                    ) : (
                      <span className="text-gray-400">C.N.I.C missing</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.email ? (
                      data.email
                    ) : (
                      <span className="text-gray-400">email missing</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.course && data.course.length > 0 ? (
                      data.course.join(", ")
                    ) : (
                      <span className="text-gray-400">course missing</span>
                    )}
                    <br />
                    {data.batch && data.batch.length > 0 ? (
                      data.batch.join(", ")
                    ) : (
                      <span className="text-gray-400">batch missing</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.days ? (
                      data.days
                    ) : (
                      <span className="text-gray-400">days missing</span>
                    )}
                    <br />
                    {data.sectionId ? (
                      data.sectionId
                    ) : (
                      <span className="text-gray-400">sectionId missing</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    {data.userId ? (
                      data.userId
                    ) : (
                      <span className="text-gray-400">teacherId missing</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b border-blue-300">
                    <button className="bg-navbarColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                      <Link
                        to={`/addcourse/${data.courseId}`}
                        className="text-md text-white hover:text-black hover:underline"
                      >
                        Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor name
                    </label>
                    <input
                      type="name"
                      id="name"
                      placeholder="Enter Instructor name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="user@gmail.com"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="- - - - - -"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="userid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User Id
                    </label>
                    <input
                      type="userid"
                      id="userid"
                      placeholder="sir-user-000"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="batches"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Batches
                    </label>
                    <input
                      type="batches"
                      id="batches"
                      placeholder="Batch-00"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courses"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Courses
                    </label>
                    <input
                      type="courses"
                      id="courses"
                      placeholder="Courses"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courseid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Id
                    </label>
                    <input
                      type="courseid"
                      id="courseid"
                      placeholder="WMA-000"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="days"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Days
                    </label>
                    <input
                      type="days"
                      id="days"
                      placeholder="TTS MWF Weekend Sunday"
                      className="w-full border border-gray-300 uppercase rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sectionid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      SectionID
                    </label>
                    <input
                      type="sectionid"
                      id="sectionid"
                      placeholder="0-to-0"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="flex w-11/12 justify-center">
                    <button
                      type="submit"
                      className="w-1/2 lg:w-2/12 bg-navbarColor font-serif font-bold text-lg text-white py-2 px-4  rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </span>
                  <span className="flex items-end w-1/12 sm:pl-10 md:pl-4 lg:pl-10">
                    <CloseOutlined className="text-2xl" onClick={closeModal} />
                  </span>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
