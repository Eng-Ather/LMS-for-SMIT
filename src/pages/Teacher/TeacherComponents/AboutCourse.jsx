import React from "react";
import { RightCircleFilled } from "@ant-design/icons";

export default function AboutCourse() {
  const courseDetails = [
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 1",
      duration: "3 months",
      enrolledStudents: 25,
      totalAssignments: 12,
      location: "SMIT Gulshan",
    },
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 2",
      duration: "3 months",
      enrolledStudents: 30,
      totalAssignments: 12,
      location: "SMIT Gulshan",
    },
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 3",
      duration: "3 months",
      enrolledStudents: 22,
      totalAssignments: 12,
      location: "SMIT DHA Phase VI",
    },
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 4",
      duration: "3 months",
      enrolledStudents: 18,
      totalAssignments: 12,
      location: "SMIT Bahadurabad",
    },
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 5",
      duration: "3 months",
      enrolledStudents: 20,
      totalAssignments: 12,
      location: "SMIT Gulshan",
    },
    {
      courseName: "Web & Mobile App Development",
      batchName: "Batch 6",
      duration: "3 months",
      enrolledStudents: 28,
      totalAssignments: 12,
      location: "SMIT Ali Muhammad",
    },
  ];

  return (
    <section className="text-gray-600 p-4 body-font h-screen overflow-y-scroll">
      <h2 className="text-3xl text-center font-bold">Courses</h2>
      {courseDetails.map((data) => (
        <div className="container px-5 py-12 rounded my-4 shadow  mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-bold text-xl title-font text-gray-700">
                  {data.batchName}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {data.duration}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {data.courseName}
                </h2>
                <p className="font-bold font-mono leading-relaxed">
                  Enrolled Students : {data.enrolledStudents}
                </p>
                <a className="text-blue-500 font-bold inline-flex items-center mt-4">
                  Total Assignments : {data.totalAssignments}
                </a>
              </div>
              <div className="flex items-center">
                <RightCircleFilled className="text-2xl mx-2" />
                <h2 className="font-bold text-lg">{data.location}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
