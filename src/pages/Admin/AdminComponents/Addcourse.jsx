import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppRouts from "../../../constant/constant";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link } from "react-router";

export default function Addcourse() {
  const [loading, setLoading] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topicInputs, setTopicInputs] = useState([]);
  const [URL, setURL] = useState(null);
  const [Courses, setCourses] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImage = (e) => {
    const cloud = import.meta.env.VITE_CLOUDINARY_CLOUDNAME;
    const file = e.target.files[0];
    if (!file) return console.log("Pic is Empty");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "SMIT_LMS");
    data.append("cloud_name", cloud);
    const res = fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setURL(data.url);
      });
  };

  const handleTopics = (e) => {
    const topicsfromInput = e.target.value;
    // Convert string back to an array when the user modifies the input
    setTopicInputs(topicsfromInput.split(",").map((item) => item.trim()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        closeModal();
      })
      .catch((err) => {
        console.log(err.message);
        closeModal();
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
    <div className=" h-screen overflow-y-scroll p-2">
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row md:space-y-0 bg-white dark:bg-gray-900">
          <div className="shadow rounded font-semibold p-2 my-1">
            Total Courses : {Courses.length}
          </div>
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
                      placeholder="JS-01/GD-01"
                      className="w-full border uppercase border-gray-300 text-base rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      htmlFor="topics"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Topics
                    </label>
                    <input
                      onChange={handleTopics}
                      type="topics"
                      id="topics"
                      placeholder="ABC,ABC,ABC,ABC"
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

        <div className="flex justify-center p-8">
          <div className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-12 ">
            {Courses.map((data, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-b-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link
                  to={`/addCourse/${data.courseId}`}
                  className="flex justify-center"
                >
                  <img className="w-full h-40" src={data.image} alt="" />
                </Link>
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.courseTitle}
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                    {data.courseId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
