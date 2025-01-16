import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppRouts from "../../../constant/constant";
import { Link } from "react-router";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function Addcourse() {
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topicInputs, setTopicInputs] = useState([]);
  const [URL, setURL] = useState(null);
  const [Courses, setCourses] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return console.log("Pic is Empty");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "SMIT_LMS");
    data.append("cloud_name", process.env.cloudinary_CloudName);
    const res = fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setURL(data.url);
      });
  };

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
      teacherName: e.target.teachername.value,
      teacherId: e.target.teacherid.value,
      batch: e.target.batch.value,
      sectionId: e.target.sectionid.value,
      days: e.target.days.value,
      topics: topicInputs,
      image: URL,
    };

    axios
      .post(AppRouts.addCourse, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
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
      <div className="m-4 flex flex-col lg:flex-row items-end justify-between my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6">
        <h3 className="w-full lg:w-1/3 font-serif text-headingColor text-2xl md:text-3xl lg:text-4xl text-center mb-6">
          Courses
        </h3>
        <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg font-bold p-6 ">
          Total Courses : {Courses.length}
        </div>
      </div>
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row md:space-y-0 bg-white dark:bg-gray-900">
          <button
            data-tooltip-id="addcourse-tooltip"
            onClick={openModal}
            className="bg-blue-500 font-serif font-bold text-base text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <ReactTooltip
              id="addcourse-tooltip"
              place="bottom"
              content="Add Course"
            />

            <PlusOutlined />
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6 ">
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
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Image(optional)
                    </label>
                    <input
                      type="file"
                      id="image"
                      onChange={handleImage}
                      placeholder="TTS,MWF,Weekend,Sunday"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="teachername"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Name
                    </label>
                    <input
                      type="teachername"
                      id="teachername"
                      placeholder="Enter Instructor Name"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="teacherid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Instructor Id
                    </label>
                    <input
                      type="teacherid"
                      id="teacherid"
                      placeholder="sir-user-00"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="batch"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Batch
                    </label>
                    <input
                      type="batch"
                      id="batch"
                      placeholder="Batch-00"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sectionid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Section
                    </label>
                    <input
                      type="sectionid"
                      id="sectionid"
                      placeholder="0-to-0"
                      className="w-full border border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      placeholder="TTS,MWF,Weekend,Sunday"
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

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Course Name
              </th>
              <th scope="col" className="px-1 py-3">
                Course ID
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Courses.map((data, index) => (
              <tr
                key={data._id}
                className="bg-blue-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <span>{index + 1}.</span>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.courseTitle}
                </th>
                <td className="px-6 py-4">{data.courseId}</td>
                <td>
                  <Link to={`/addcourse/${data.courseId}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
