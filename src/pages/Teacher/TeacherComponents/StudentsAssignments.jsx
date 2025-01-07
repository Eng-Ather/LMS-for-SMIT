import React from "react";

export default function StudentsAssignments() {
  const studentAssignments = [
    {
      serialNumber: 1,
      studentName: "Ahmed Khan",
      rollNo: "Batch 1 - 101",
      gitLink: "https://github.com/ahmedkhan/assignment1",
      videoLink: "https://youtube.com/watch?v=example1",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 2,
      studentName: "Ayesha Malik",
      rollNo: "Batch 1 - 102",
      gitLink: "https://github.com/ayeshmalik/assignment1",
      videoLink: "https://youtube.com/watch?v=example2",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 3,
      studentName: "Ali Raza",
      rollNo: "Batch 2 - 201",
      gitLink: "https://github.com/aliraza/assignment1",
      videoLink: "https://youtube.com/watch?v=example3",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 4,
      studentName: "Fatima Noor",
      rollNo: "Batch 2 - 202",
      gitLink: "https://github.com/fatimanoor/assignment1",
      videoLink: "https://youtube.com/watch?v=example4",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 5,
      studentName: "Zain Ahmed",
      rollNo: "Batch 3 - 301",
      gitLink: "https://github.com/zainahmed/assignment1",
      videoLink: "https://youtube.com/watch?v=example5",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 6,
      studentName: "Sara Khan",
      rollNo: "Batch 3 - 302",
      gitLink: "https://github.com/sarakhan/assignment1",
      videoLink: "https://youtube.com/watch?v=example6",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 7,
      studentName: "Ahmed Khan",
      rollNo: "Batch 1 - 101",
      gitLink: "https://github.com/ahmedkhan/assignment1",
      videoLink: "https://youtube.com/watch?v=example1",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 8,
      studentName: "Ayesha Malik",
      rollNo: "Batch 1 - 102",
      gitLink: "https://github.com/ayeshmalik/assignment1",
      videoLink: "https://youtube.com/watch?v=example2",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 9,
      studentName: "Ali Raza",
      rollNo: "Batch 2 - 201",
      gitLink: "https://github.com/aliraza/assignment1",
      videoLink: "https://youtube.com/watch?v=example3",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 10,
      studentName: "Fatima Noor",
      rollNo: "Batch 2 - 202",
      gitLink: "https://github.com/fatimanoor/assignment1",
      videoLink: "https://youtube.com/watch?v=example4",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 11,
      studentName: "Zain Ahmed",
      rollNo: "Batch 3 - 301",
      gitLink: "https://github.com/zainahmed/assignment1",
      videoLink: "https://youtube.com/watch?v=example5",
      assignmentDetail: "Create landing page like agoda.com",
    },
    {
      serialNumber: 12,
      studentName: "Sara Khan",
      rollNo: "Batch 3 - 302",
      gitLink: "https://github.com/sarakhan/assignment1",
      videoLink: "https://youtube.com/watch?v=example6",
      assignmentDetail: "Create landing page like agoda.com",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md h-screen overflow-y-scroll sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.no
            </th>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Roll No.
            </th>
            <th scope="col" className="px-6 py-3">
              Git Link
            </th>
            <th scope="col" className="px-6 py-3">
              Video Link(optional)
            </th>

            <th scope="col" className="px-6 py-3">
              Assignment Detail
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {studentAssignments.map((data) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.serialNumber}.
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.studentName}
              </th>
              <td className="px-6 py-4">{data.rollNo}</td>
              <td className="px-6 py-4">{data.gitLink}</td>
              <td className="px-6 py-4">{data.videoLink}</td>
              <td className="px-6 py-4">{data.assignmentDetail}</td>
              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Check
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
