import React from "react";

export default function TeacherMainScreen() {
  const batches = [
    {
      batchName: "Batch 11",
      timeSlot: "10:00 AM - 12:00 PM",
      campusName: "Gulshan",
      classroomName: "Audi I",
    },
    {
      batchName: "Batch 12",
      timeSlot: "12:30 PM - 2:30 PM",
      campusName: "Bahadurabad",
      classroomName: "Audi II",
    },
    {
      batchName: "Batch 13",
      timeSlot: "3:00 PM - 5:00 PM",
      campusName: "Ali Muhammad",
      classroomName: "Room A1",
    },
    {
      batchName: "Batch 14",
      timeSlot: "5:30 PM - 7:30 PM",
      campusName: "Gulshan",
      classroomName: "Room B2",
    },
    {
      batchName: "Batch 15",
      timeSlot: "8:00 AM - 10:00 AM",
      campusName: "Bahadurabad",
      classroomName: "Audi III",
    },
    {
      batchName: "Batch 16",
      timeSlot: "6:00 PM - 8:00 PM",
      campusName: "Ali Muhammad",
      classroomName: "Room C3",
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="grid grid-cols-3 gap-4 p-8">
        {batches.map((data) => (
          <div className="max-w-sm p-4 gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="text-2xl font-bold  text-gray-900 text-center">
                {data.batchName}
              </h5>
            </a>
            <p className="text-xs text-gray-700 text-center">{data.timeSlot}</p>
            <p className="mt-3 font-bold text-gray-700">
              Location : {data.campusName}
            </p>
            <p className="mb-3 text-xs font-bold text-gray-900">
              {data.classroomName}
            </p>

            <div className="w-full h-2 m-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="h-2 bg-blue-600 rounded-full dark:bg-blue-500"
                style={{ width: "50%" }}
              />
            </div>
            <button
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg"
            >
              View
            </button>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className=" p-8 w-7/12">
          <h2 className="flex font-bold text-2xl justify-center items-center">
            Courses Progress
          </h2>

          <div className="mb-1 text-lg font-medium dark:text-white">
            Web & Mobile App Development(Batch-11)
          </div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "95%" }}
            />
          </div>
          <div className="mb-1 text-lg font-medium dark:text-white">
            Web & Mobile App Development(Batch-12)
          </div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "60%" }}
            />
          </div>
          <div className="mb-1 text-lg font-medium dark:text-white">
            Web & Mobile App Development(Batch-13)
          </div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "25%" }}
            />
          </div>
          <div className="mb-1 text-lg font-medium dark:text-white">
            Web & Mobile App Development(Batch-14)
          </div>
          <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "10%" }}
            />
          </div>
          <div className="flex shadow justify-center border p-1 cursor-pointer">
            View All
          </div>
        </div>
        <div className="w-5/12 justify-center p-2">
          <h2 className="text-center text-2xl font-bold">Assignments</h2>
          <div className="container mx-auto w-full p-4 bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <h5 className="text-lg font-bold  text-gray-900">
                Last Assigned
              </h5>
            </a>
            <p className="mt-3 font-bold text-gray-700">batchName</p>
            <p className="mb-3 text-xs font-bold text-gray-900">
              Assignmet like Create a landing page like booking.com
            </p>

            <button
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg"
            >
              Edit
            </button>
          </div>
          <button className="font-bold bg-green-400 rounded-full justify-center m-4">
            Create New Assignment
          </button>
          <button className="font-bold bg-green-400 rounded-full justify-center m-4">
            Delete an Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
