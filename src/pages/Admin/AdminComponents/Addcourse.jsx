import React from "react";

export default function Addcourse() {
  const courses = [
    {
      id: 1,
      courseName: "Web Development",
      instructors: "Ali Khan",
      eligibility: "Basic Computer Knowledge",
      duration: "6 Months",
    },
    {
      id: 2,
      courseName: "Mobile App Development",
      instructors: "Bilal Siddiqui",
      eligibility: "Intermediate Programming Skills",
      duration: "8 Months",
    },
    {
      id: 3,
      courseName: "Graphic Design",
      instructors: "Hina Rizwan",
      eligibility: "Creative Skills and Basic Design Knowledge",
      duration: "4 Months",
    },
    {
      id: 4,
      courseName: "Data Science",
      instructors: "Usman Sheikh",
      eligibility: "Mathematics and Basic Programming",
      duration: "12 Months",
    },
    {
      id: 5,
      courseName: "Digital Marketing",
      instructors: "Rizwan Ali",
      eligibility: "Good Communication Skills",
      duration: "3 Months",
    },
  ];

  return (
    <div className=" h-screen overflow-y-scroll text-2xl p-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                
              </th>
              <th scope="col" className="px-6 py-3">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3">
                Instructors
              </th>
              <th scope="col" className="px-6 py-3">
                Eligibility
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.courseName}
                </th>
                <td className="px-6 py-4">{data.instructors}</td>
                <td className="px-6 py-4">{data.eligibility}</td>
                <td className="px-6 py-4">{data.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
