import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import {
  CloseCircleOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import axios from "axios";
import AppRouts from "../../../constant/constant";

export default function Instructors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const instructors = [
    {
      id: 1,
      instructorName: "Ali Khan",
      positionInField: "Senior Web Developer",
      status: "Active",
      email: "ali.khan@example.com",
    },
    {
      id: 2,
      instructorName: "Ayesha Ahmed",
      positionInField: "UI/UX Designer",
      status: "Active",
      email: "ayesha.ahmed@example.com",
    },
    {
      id: 3,
      instructorName: "Bilal Siddiqui",
      positionInField: "Mobile App Specialist",
      status: "Inactive",
      email: "bilal.siddiqui@example.com",
    },
    {
      id: 4,
      instructorName: "Sara Ansari",
      positionInField: "Software Engineer",
      status: "Active",
      email: "sara.ansari@example.com",
    },
    {
      id: 5,
      instructorName: "Hina Rizwan",
      positionInField: "Graphic Designer",
      status: "Active",
      email: "hina.rizwan@example.com",
    },
    {
      id: 6,
      instructorName: "Ahmed Faraz",
      positionInField: "Illustrator Expert",
      status: "Inactive",
      email: "ahmed.faraz@example.com",
    },
    {
      id: 7,
      instructorName: "Usman Sheikh",
      positionInField: "Data Scientist",
      status: "Active",
      email: "usman.sheikh@example.com",
    },
    {
      id: 8,
      instructorName: "Mehreen Aslam",
      positionInField: "Machine Learning Engineer",
      status: "Active",
      email: "mehreen.aslam@example.com",
    },
    {
      id: 9,
      instructorName: "Rizwan Ali",
      positionInField: "Digital Marketing Strategist",
      status: "Active",
      email: "rizwan.ali@example.com",
    },
    {
      id: 10,
      instructorName: "Naveed Sheikh",
      positionInField: "SEO Specialist",
      status: "Inactive",
      email: "naveed.sheikh@example.com",
    },
  ];

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
        console.log(teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="h-screen overflow-y-scroll p-10">
      <h1 className="text-xl md:text-4xl text-center p-4">
        Known for Industry's Best Instructors
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <button
            onClick={openModal}
            className="bg-blue-500 font-serif font-bold text-base text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <PlusOutlined />
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-6 mx-6 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-2">
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
                      placeholder="Enter Instructor email"
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
                      placeholder="Enter Instructor email"
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
                      placeholder="Enter Instructor's UserId"
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
                      placeholder="Enter Instructor's Batches"
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
                      placeholder="Enter Instructor's Courses"
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
                      placeholder="Enter Instructor's CourseId"
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
                      placeholder="Enter Instructor's Days"
                      className="w-full uppercase border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      placeholder="Enter Instructor's SectionId"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="submit"
                      className="w-full bg-navbarColor font-serif font-bold text-lg text-white py-2 px-4  rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                    <button
                      onClick={closeModal}
                      className="w-full font-serif font-bold bg-subHeadingColor text-lg text-white rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      <CloseOutlined />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Batches
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((data) => (
              <tr
                key={data._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={logo}
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{data.name}</div>
                    <div className="font-normal text-gray-500">
                      {data.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{data.batch}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                    {data.course}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
