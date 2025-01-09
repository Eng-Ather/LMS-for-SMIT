import React from "react";
import logo from "../../../images/logo.png";
import addTeacherModal from "../../../components/addTeacherModal.jsx";

export default function Instructors() {
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

  return (
    <div className="h-screen overflow-y-scroll p-10">
      <h1 className="text-center p-4">Known for Indutry's Best Instructors</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center  border border-black justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <button className="bg-blue-500 font-serif font-bold text-base text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            <addTeacherModal />
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((data) => (
              <tr
                key={data.id}
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
                    <div className="text-base font-semibold">
                      {data.instructorName}
                    </div>
                    <div className="font-normal text-gray-500">
                      {data.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{data.positionInField}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                    {data.status}
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
