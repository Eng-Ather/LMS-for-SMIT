import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AppRouts from "../../../constant/constant";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link } from "react-router-dom";

export default function AddStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Students, setStudents] = useState([]);
  const [filteredStudents, setfilteredStudents] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

    try {
      await axios.post(AppRouts.addStudent, obj);
      closeModal();
    } catch (err) {
      console.error("Error adding student:", err);
    } finally {
      setLoading(false);
    }
  };

  // get all student data
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(AppRouts.getAllStudents);
        setStudents(response.data.data);
        console.log(Students);

        setfilteredStudents(response.data.data); //seting inital value of filter data = all tudent of
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // search filter
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filtereddata = Students.filter((data) => {
      // searching in all fields
      return (
        data.name.toLowerCase().includes(searchTerm) ||
        data.userId.toLowerCase().includes(searchTerm) ||
        data.teacherId.toLowerCase().includes(searchTerm) ||
        data.batch.join("").toLowerCase().includes(searchTerm) ||
        data.course.join("").toLowerCase().includes(searchTerm) ||
        data.courseId.join("").toLowerCase().includes(searchTerm) ||
        data.days.join("").toLowerCase().includes(searchTerm) ||
        data.sectionId.join("").toLowerCase().includes(searchTerm)
        // data.CNICno.includes(searchTerm)
      );
    });

    setfilteredStudents(filtereddata);
  }, [searchTerm, Students]);

  // const filteredStudents = Students.filter((data, index) =>
  //   data.name.toLowerCase().includes(searchTerm)
  // );

  return (
      <div className="h-screen overflow-y-scroll p-2">
      <div className="m-2 p-4 bg-white border-t-4 border-navbarColor  rounded-lg relative overflow-x-auto shadow-md sm:rounded-lg">
         
          {/* Title Bar */}
          <div className="w-full flex flex-col gap-4 sm:gap-2 sm:flex-row items-center justify-between p-4 my-2 ">
            {/* Add New Student Button */}
            <button
              data-tooltip-id="addStudent-tooltip"
              onClick={openModal}
              className="flex items-center justify-center w-fit bg-navbarColor text-white  py-2 px-4 rounded-lg hover:bg-blue-600  transition duration-300"
            >
              <ReactTooltip
                id="addStudent-tooltip"
                place="bottom"
                content="Add Student"
              />
              <PlusOutlined className="text-lg" />
              {/* <span className="ml-2"></span> */}
            </button>

            {/* Total Students */}
            <div className="flex items-center justify-center w-full sm:w-1/4 bg-blue-50 text-center text-headingColor shadow-md rounded-lg py-2 px-3">
              <span className="text-sm md:text-lg font-serif">
                {Students.length} - Students Enrolled
              </span>
            </div>

            {/* Search Bar with Results */}
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-1/2">
              <input
                className="w-full sm:w-2/3 py-2 px-4 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                type="search"
                name="searchFilter"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearch}
              />
              {/* <div className="w-full sm:w-1/3 bg-blue-50 text-center text-headingColor shadow-md rounded-lg py-2 px-3">
                <span className="text-sm md:text-lg font-serif">
                  {!searchTerm ? "No" : filteredStudents.length} result(s) found
                </span>
              </div> */}
            </div>
          </div>

          {/* Styled Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-blue-300 rounded-lg">
              <thead>
                <tr className="bg-navbarColor text-white">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    CNIC
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Batch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    TeacherID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((data, index) => (
                  <tr
                    key={data._id}
                    className="hover:bg-blue-100 border-b border-blue-300"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.name} s/o {data.fatherName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.CNICno ? (
                        data.CNICno
                      ) : (
                        <span className="text-gray-400">C.N.I.C missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.email ? (
                        data.email
                      ) : (
                        <span className="text-gray-400">Email missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.course ? (
                        data.course
                      ) : (
                        <span className="text-gray-400">Course missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.batch ? (
                        data.batch
                      ) : (
                        <span className="text-gray-400">Batch missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {data.batch ? (
                        data.teacherId
                      ) : (
                        <span className="text-gray-400">Batch missing</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <button className="bg-navbarColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                        <Link
                          to={`/addcourse/${data.courseId}`}
                          className="text-md text-white hover:text-black hover:underline"
                        >
                          Details
                        </Link>
                      </button>
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
