import React, { useContext } from "react";
import { AuthContext } from "../../../context/context";

export default function StudentMainScreen() {
  const { user } = useContext(AuthContext);
  const data = user;

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100 animate-pulse">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-y-scroll bg-gray-100 p-4 md:p-6">

      {/* student profile card */}
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
        <div className=" border bg-blue-50 border-blue-300 rounded-lg p-4 md:p-6 ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Student"
              className="w-28 h-28 rounded-full border-4 border-navbarColor shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg md:text-2xl font-serif uppercase text-headingColor">
                {data.name}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-medium">Email:</span> {data.email}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-medium">Role:</span> {data.role} of{" "}
                <b>{data.course}</b> {"(" + data.courseId + ")"}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-medium">Roll Number:</span> {data.userId}
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-medium">Batch:</span> {data.batch[0]},
                Class Days: {data.days}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Record */}
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
        <h3 className="text-lg md:text-2xl font-serif text-headingColor mb-4 border-b pb-2 border-blue-500">
          Attendance Record
        </h3>
        <div className="relative w-full h-48 md:h-64">
          <div className="flex justify-center items-center h-full text-gray-400 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg animate-pulse">
            Attendance Graph Placeholder
          </div>
        </div>
      </div>

      {/* Quiz Results */}
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 animate-fade-in">
        <h3 className="text-lg md:text-2xl font-serif text-headingColor mb-4 border-b pb-2 border-blue-500">
          Quiz Results
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700">
                <th className="border border-gray-300 p-3 text-left text-base font-semibold">
                  Quiz
                </th>
                <th className="border border-gray-300 p-3 text-left text-base font-semibold">
                  Date
                </th>
                <th className="border border-gray-300 p-3 text-left text-base font-semibold">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { quiz: "Quiz 1", date: "01/01/2025", score: "85%" },
                { quiz: "Quiz 2", date: "05/01/2025", score: "90%" },
                { quiz: "Quiz 3", date: "10/01/2025", score: "75%" },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                  } hover:bg-blue-200 transition-colors`}
                >
                  <td className="border border-gray-300 p-3 text-gray-700">
                    {item.quiz}
                  </td>
                  <td className="border border-gray-300 p-3 text-gray-700">
                    {item.date}
                  </td>
                  <td className="border border-gray-300 p-3 text-gray-700">
                    {item.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
