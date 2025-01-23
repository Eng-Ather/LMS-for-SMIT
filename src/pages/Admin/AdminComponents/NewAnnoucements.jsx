import { CloseOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import axios from "axios";
import AppRouts from "../../../constant/constant";

export default function NewAnnoucements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState();
  const [Announcement, setAnnouncement] = useState([]);
  const [URL, setURL] = useState();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return console.log("Pic is Empty");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "SMIT_LMS");
    data.append("cloud_name", cloud_name);
    const res = fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setURL(data.url);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      title: e.target.title.value,
      location: e.target.location.value,
      date: e.target.date.value,
      time: e.target.time.value,
      url: URL,
      description: e.target.description.value,
    };

    axios
      .post(AppRouts.addAnnouncement, obj)
      .then((res) => {})
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(AppRouts.getAllAnnouncements);
        setAnnouncement(response.data.data);
        // Save fetched data in state
      } catch (error) {
        console.error("Error fetching Courses:", error);
      }
    };
    fetchAnnouncements();
  }, []);

  const cloudy_name = import.meta.env.REACT_APP_CLOUDINARYCLOUDNAME;
  console.log(cloudy_name);

  return (
    <>
      <div className="h-screen overflow-y-scroll p-10">
        <div className="flex justify-between">
          <h1 className="text-5xl text-center ">Events Happening Soon!</h1>
          <button
            onClick={openModal}
            className="bg-navbarColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Make Announcement
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="title"
                      id="title"
                      placeholder="Enter Title"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="location"
                      id="location"
                      placeholder="Enter Location"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      placeholder="Enter Location And Time"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      placeholder="Enter Location And Time"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Banner
                    </label>
                    <input
                      type="file"
                      id="url"
                      onChange={handleImage}
                      placeholder="Enter Location And Time"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      type="description"
                      id="description"
                      placeholder="Something About Event"
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

        {Announcement.map((data, index) => (
          <div
            key={index}
            className="flex gap-6 my-8 bg-white border-t-4 border-navbarColor shadow-lg rounded-lg"
          >
            <div className="w-1/3 p-8  flex-end">
              <img
                className="object-cover rounded-t-lg  w-60 md:rounded-none md:rounded-s-lg"
                src={logo}
                alt=""
              />
            </div>
            <div className="p-8 justify-center w-2/3 h-72">
              <div className="w-2/3">
                <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
                <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.location} Campus at {data.time} sharp
                </h5>
                {/* <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.date} 
                </h5> */}
                <p className="mb-3 capitalize font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
