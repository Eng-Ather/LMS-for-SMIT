import React from 'react';

const CourseOutline = () => {
  const courses = [
    {
      name: "Effective Communication",
      classroom: "Dandelion",
      schedule: "Nov 13 to 15",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "PENDING"
    },
    {
      name: "Problem Solving and Critical Thinking",
      classroom: "Lemon",
      schedule: "Oct 24 to Nov 06",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "PENDING"
    },
    {
      name: "Creativity and Innovation",
      classroom: "Lemon",
      schedule: "Oct 24 to 25",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "APPROVED"
    },
    {
      name: "Work in a Team",
      classroom: "Dandelion",
      schedule: "Nov 06 to 07",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "PENDING"
    },
    {
      name: "Facilitate Effective Work Teams",
      classroom: "Grass",
      schedule: "Oct 17 to 18",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "PENDING"
    },
    {
      name: "Communicate and Relate Effectively",
      classroom: "Dandelion",
      schedule: "Oct 07 to 09",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "APPROVED"
    },
    {
      name: "Maintain Personal Presentation",
      classroom: "Grass",
      schedule: "Nov 06 to 07",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "APPROVED"
    },
    {
      name: "Problem Solving and Decision Making",
      classroom: "Grass",
      schedule: "Oct 24 to Nov 06",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "APPROVED"
    },
    {
      name: "Develop Personal Effectiveness",
      classroom: "Grass",
      schedule: "Nov 13 to 15",
      description: "we will teach you how you can learn the best web and app devlopment",
      datePlotted: "2 weeks ago",
      status: "PENDING"
    }
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500 tracking-wider">
              <th className="px-4 py-3">COURSES</th>
              <th className="px-4 py-3">CLASSROOM</th>
              <th className="px-4 py-3">SCHEDULE</th>
              <th className="px-4 py-3 text-center">DESCRIPTION</th>
              <th className="px-4 py-3">DATE PLOTTED</th>
              <th className="px-4 py-3">STATUS</th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.map((course, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 transition-colors text-sm"
              >
                <td className="px-4 py-3 text-gray-900">{course.name}</td>
                <td className="px-4 py-3 text-gray-600">{course.classroom}</td>
                <td className="px-4 py-3 text-gray-600">{course.schedule}</td>
                <td className="px-4 py-3 text-gray-600 text-center">{course.description}</td>
                <td className="px-4 py-3 text-gray-600">{course.datePlotted}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    course.status === 'APPROVED' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.status}
                  </span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseOutline;

