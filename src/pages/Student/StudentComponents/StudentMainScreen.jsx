import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/context";
import AssignmentsStats from "../AssignmentState";
import CoveredCoursePercentage from "./CoveredCoursePercentage";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StudentMainScreen() {
  const { user } = useContext(AuthContext);
  const data = user;

  const [assignmentsCompleted, setassignmentsCompleted] = useState(4);
  const [totalAssignments, settotalAssignments] = useState(6);
  const [coursePercentage, setcoursePercentage] = useState(85);

  // Animation states for quiz progress bars
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0]);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimatedProgress([85, 90, 75]); // Replace with actual quiz percentages
  }, []);

  if (!data) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100 animate-pulse">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  const maintenanceData = [
    {
      month: "January",
      paid: <span className="text-green-700">&#10004;</span>,
    },
    {
      month: "February",
      paid: <span className="text-green-700">&#10004;</span>,
    },
    { month: "March", paid: <span className="text-green-700">&#10004;</span> },
    { month: "April", paid: <span className="text-red-700">&#10060;</span> },
    { month: "May", paid: <span className="text-green-700">&#10004;</span> },
    { month: "Jun", paid: <span className="text-green-700">&#10004;</span> },
  ];

  return (
    <div className="h-screen overflow-y-scroll bg-gray-100 p-4 md:p-6">
      <div className="bg-blue-50 flex flex-col lg:flex-row justify-between  border-t-4 border-navbarColor shadow-lg rounded-lg p-4 md:p-6 mb-6 animate-fade-in">
        {/* student profile card */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row justify-between rounded-lg p-4 md:p-6">
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

        <div className="w-full flex flex-col justify-between lg:w-1/2 h-72">
          <div className="w-full h-28">
            {/* <covered corse Stats/> */}
            <CoveredCoursePercentage />
          </div>

          {/* Assignment Stats */}
          <div className="w-full">
            <AssignmentsStats />
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Attendance Progress */}
        <div className=" flex flex-col justify-between bg-blue-50 border-t-4 border-navbarColor w-full sm:w-1/2 shadow-lg rounded-lg p-6">
          <h3 className="text-xl text-headingColor text-center border bg-white border-blue-300 rounded-lg p-4 md:p-6 font-serif mb-4">
            Attendance Progress
          </h3>
          <Bar
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "jun",
                "july",
              ],
              datasets: [
                {
                  label: "Attendance (%)",
                  data: [85, 90, 78, 55, 92, 75, 65], // Replace with actual attendance data
                  backgroundColor: "#5F9EE0", //  color for bars
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: "#333", // Dark text for better contrast
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100, // Ensure values are percentage-based
                  ticks: {
                    color: "#333", // Dark text for y-axis
                  },
                  grid: {
                    color: "#E5E7EB", // Light gray grid lines
                  },
                },
                x: {
                  ticks: {
                    color: "#333", // Dark text for x-axis
                  },
                  grid: {
                    color: "transparent", // Remove x-axis grid lines for cleaner look
                  },
                },
              },
            }}
          />
        </div>

        {/* Quiz Marks Progress */}
        <div className="flex flex-col bg-blue-50 justify-between border-t-4 border-navbarColor w-full sm:w-1/2  shadow-lg rounded-lg p-6 flex-1">
          <h3 className="text-xl text-headingColor text-center border bg-white border-blue-300 rounded-lg p-4 md:p-6 font-serif mb-4">
            Quiz Marks
          </h3>
          {animatedProgress.map((progress, index) => (
            <div key={index} className="mb-4">
              <p className="font-serif">
                Quiz {index + 1}: {progress}%
              </p>
              <div className="relative w-full bg-gray-200 rounded-full h-6">
                <div
                  className="absolute top-0 left-0 h-6 bg-navbarColor rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }} // Correctly set the width dynamically
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Charges */}
      <div className="bg-blue-50 border-t-4 border-navbarColor w-full mt-6 shadow-lg rounded-lg p-6">
        <h3 className="text-xl text-headingColor text-center border bg-white border-blue-300 rounded-lg p-4 md:p-6 font-serif mb-4">
          Maintenance Charges
        </h3>
        <div className="grid grid-cols-2 gap-4 ">
          {maintenanceData.map((data, index) => (
            <div
              key={index}
              className=" flex justify-around items-center border-t border-blue-300 p-2 m-2 md:mx-8"
            >
              <span className="text-gray-700 font-medium">{data.month}</span>
              <span className={`font-bold ${data.paid.props.className}`}>
                {data.paid}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
