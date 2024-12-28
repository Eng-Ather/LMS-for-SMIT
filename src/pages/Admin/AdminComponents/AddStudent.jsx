import React from "react";

export default function AddStudent() {
  const students = [
    {
      id: 1,
      studentName: "Ali Khan",
      fatherName: "Ahmed Khan",
      cnicNo: "42101-1234567-1",
      courseName: "Web Development",
      rollNo: "WD101",
    },
    {
      id: 2,
      studentName: "Ayesha Ahmed",
      fatherName: "Zafar Ahmed",
      cnicNo: "42201-2345678-2",
      courseName: "Graphic Design",
      rollNo: "GD202",
    },
    {
      id: 3,
      studentName: "Bilal Siddiqui",
      fatherName: "Sajid Siddiqui",
      cnicNo: "42301-3456789-3",
      courseName: "Mobile App Development",
      rollNo: "MAD303",
    },
    {
      id: 4,
      studentName: "Hina Rizwan",
      fatherName: "Rizwan Ali",
      cnicNo: "42401-4567890-4",
      courseName: "Digital Marketing",
      rollNo: "DM404",
    },
    {
      id: 5,
      studentName: "Usman Sheikh",
      fatherName: "Naveed Sheikh",
      cnicNo: "42501-5678901-5",
      courseName: "Data Science",
      rollNo: "DS505",
    },
  ];

  return (
    <div className=" h-screen overflow-y-scroll p-20">
      <div className="relative overflow-x-auto">
        
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            
            <tr>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Father Name
              </th>
              <th scope="col" className="px-6 py-3">
                CNIC-No.
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Roll No.
              </th>
            </tr>
          </thead>
          <tbody>
          {students.map((data) => (  
            <tr key={data.id} className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.studentName}
              </th>
              <td className="px-6 py-4">{data.fatherName}</td>
              <td className="px-6 py-4">{data.cnicNo}</td>
              <td className="px-6 py-4">{data.courseName}</td>
              <td className="px-6 py-4">{data.rollNo}</td>
            </tr>
            ))}
          </tbody>
        </table>
        
        
      </div>
    </div>
  );
}
