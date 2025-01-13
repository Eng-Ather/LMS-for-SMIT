import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppRouts from "../../../constant/constant";

export default function Addcourse() {
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topicInputs, setTopicInputs] = useState([]);
  const [Courses, setCourses] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const topicsfromInput = e.target.topics.value;
    // Convert string back to an array when the user modifies the input
    setTopicInputs(topicsfromInput.split(",").map((item) => item.trim()));
    console.log(topicInputs);

    const obj = {
      courseId: e.target.courseId.value,
      courseTitle: e.target.courseTitle.value,
      courseDescription: e.target.courseDescription.value,
      topics: topicInputs,
    };

    axios
      .post(AppRouts.addCourse, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(AppRouts.getAllCourses);
        setCourses(response.data.data); // Save fetched data in state
        console.log(Courses);
      } catch (error) {
        console.error("Error fetching Courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className=" h-screen overflow-y-scroll p-10">
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row md:space-y-0 p-2 bg-white dark:bg-gray-900">
          <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg font-bold p-4 ">
            Total Courses : {Courses.length}
          </div>
          <button
            onClick={openModal}
            className="bg-blue-500 font-serif font-bold text-base text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <PlusOutlined />
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-6 mx-6 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="courseId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Id
                    </label>
                    <input
                      type="courseId"
                      id="courseId"
                      placeholder="js-01/gd-01"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courseTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Title
                    </label>
                    <input
                      type="courseTitle"
                      id="courseTitle"
                      placeholder="Enter Course Title"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="courseDescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Course Description
                    </label>
                    <input
                      type="courseDescription"
                      id="courseDescription"
                      placeholder="Enter Course Description"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="topics"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Topics
                    </label>
                    <input
                      type="topics"
                      id="topics"
                      placeholder="ABC,ABC,ABC,ABC"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                Course Name
              </th>
              <th scope="col" className="px-6 py-3">
                Course ID
              </th>
              <th scope="col" className="px-6 py-3">
                Course Description
              </th>
            </tr>
          </thead>
          <tbody>
            {Courses.map((data, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <span>{index + 1}.</span>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.courseTitle}
                </th>
                <td className="px-6 py-4">{data.courseId}</td>
                <td className="px-6 py-4 text-ellipsis ">
                  {data.courseDescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
