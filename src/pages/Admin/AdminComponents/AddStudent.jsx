import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppRouts from "../../../constant/constant";
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function AddStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Students, setStudents] = useState([]);
  const [loading, setLoading] = useState();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: e.target.name.value,
      fatherName: e.target.fathername.value,
      CNICno: e.target.cnic.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "student",
      teacherId: e.target.teacherid.value,
      userId: e.target.userid.value,
      batch: e.target.batches.value,
      course: e.target.courses.value,
      courseId: e.target.courseid.value,
      days: e.target.days.value,
      sectionId: e.target.sectionid.value,
    };

    axios
      .post(AppRouts.addStudent, obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  return (
    <div className=" h-screen overflow-y-scroll p-2">
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row md:space-y-0 p-2 bg-white dark:bg-gray-900">
          <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg font-bold p-4 ">
            Total Students : {Students.length}
          </div>
          <button
          data-tooltip-id="addStudent-tooltip"
            onClick={openModal}
            className="bg-blue-500 font-serif font-bold text-base text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <ReactTooltip
              id="addStudent-tooltip"
              place="bottom"
              content="Add Course"
            />

            <PlusOutlined />
          </button>
        </div>

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
                      Student name
                    </label>
                    <input
                      type="name"
                      id="name"
                      placeholder="Enter Student name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fathername"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Father name
                    </label>
                    <input
                      type="fathername"
                      id="fathername"
                      placeholder="Enter Father name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cnic"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CNIC No.
                    </label>
                    <input
                      type="number"
                      id="cnic"
                      placeholder="42401-1234567-1"
                      pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Student Email
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
                      Student Password
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
                      htmlFor="teacherid"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Teacher Id
                    </label>
                    <input
                      type="teacherid"
                      id="teacherid"
                      placeholder="sir-user-000"
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
                      placeholder="stu-000"
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
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th></th>
              <th scope="col" className="px-2 py-3">
                Student Name
              </th>
              <th scope="col" className="px-2 py-3">
                Father Name
              </th>
              <th scope="col" className="px-2 py-3">
                CNIC-No.
              </th>
              <th scope="col" className="px-2 py-3">
                Roll No.
              </th>
              <th scope="col" className="px-2 py-3">
                Course
              </th>
              <th scope="col" className="px-2 py-3">
                Batch
              </th>
              <th scope="col" className="px-2 py-3">
                Days
              </th>
            </tr>
          </thead>
          <tbody>
            {Students.map((data, index) => (
              <tr key={data._id} className="bg-white dark:bg-gray-800">
                <th className="text-xs px-2">{index + 1}.</th>
                <th
                  scope="row"
                  className="px-2 py-3 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <th
                  scope="row"
                  className="px-2 py-3 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.fatherName}
                </th>
                <td className="px-2">{data.CNICno}</td>
                <td className="px-2">{data.userId}</td>
                <td className="px-2">{data.course}</td>
                <td className="px-2">{data.batch}</td>
                <td className="px-2">{data.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
