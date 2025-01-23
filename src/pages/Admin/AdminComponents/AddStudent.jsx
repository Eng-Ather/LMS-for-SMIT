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

    <div className=" h-screen overflow-y-scroll p-2">
      <div className="bg-white border-t-4 border-navbarColor shadow-lg rounded-lg relative overflow-x-auto">
        <div className="flex items-center justify-end flex-column flex-wrap md:flex-row md:space-y-0 bg-white">
          <div className="shadow rounded font-semibold p-2 my-1">
            Total Students : {Students.length}
          </div>
          <button
            data-tooltip-id="addInstructor-tooltip"
            onClick={openModal}
            className="bg-blue-500 font-serif font-bold text-base text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <ReactTooltip
              id="addInstructor-tooltip"
              place="bottom"
              content="Add Instructor"
            />

    <div className="h-screen overflow-y-scroll p-2">
      <div className=" bg-white border-t-4 border-navbarColor shadow-lg rounded-lg m-2 md:m-4 p-2 md:p-6">
          
          {/* title bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-blue-50 border border-blue-300 rounded-lg p-2 my-2  ">
            {/* Add New Student */}
            <button
              data-tooltip-id="addStudent-tooltip"
              onClick={openModal}
              className=" w-full sm:w-1/4 flex items-center justify-center bg-navbarColor text-white font-serif font-bold text-base py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition duration-300"
            >
              <ReactTooltip
                id="addStudent-tooltip"
                place="bottom"
                content="Add Student"
              />
              <PlusOutlined className="text-lg" />
              <span className="ml-2">Add New</span>
            </button>

            <div className="w-full sm:w-1/2 md:w-fit  my-3 md:my-1 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-3">
            <span className="text-sm md:text-xl font-serif text-center text-headingColor">
              {Students.length}{"-"} Strudents are Enrolled
            </span>
          </div>
          </div>

        {/* search bar */}
        <div className="w-full bg-blue-50 flex gap-2 md:gap-5 justify-between rounded-lg border border-blue-300 p-2 my-4">
          <input
            className="w-2/3 py-2 px-4 rounded-lg border border-blue-300 hover:outline-blue-500"
            type="search"
            name="searchFilter"
            placeholder="search here"
            value={searchTerm}
            onChange={handleSearch}
          />

          {/* student stats */}
          <div className="w-1/4 bg-blue-100 text-center text-headingColor  border border-blue-300 shadow-md rounded-lg p-3">
            <span className="text-sm md:text-xl font-serif text-center text-headingColor">
              { !searchTerm? "no":     filteredStudents.length} result found
            </span>
          </div>
        </div>


        {/* Filtered Student List */}
        <div className="w-full  bg-gray-50 rounded-lg shadow-md">
          {filteredStudents.map((data, index) => (
            <div
              key={data._id}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 text-center bg-blue-50 p-2 mb-4 rounded-lg hover:bg-blue-100 border border-blue-300"
            >
              <div className="flex items-center justify-center border border-navbarColor col-span-1 md:col-span-2 lg:col-span-2  p-2 rounded-lg">
                <p className="text-lg font-bold">
                  {index + 1}. {data.name} s/o {data.fatherName}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">{data.CNICno? data.CNICno :<span className="text-gray-400"> C.N.I.C missing</span>}</p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">{data.email? data.email :<span className="text-gray-400"> email missing</span>}</p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.course? data.course :<span className="text-gray-400"> course missing</span>}
                  <br />
                  {data.batch? data.batch :<span className="text-gray-400"> batch missing</span>}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.days? data.days :<span className="text-gray-400"> days missing</span>}
                  <br />
                  {data.sectionId? data.sectionId :<span className="text-gray-400"> sectionId missing</span>}
                </p>
              </div>
              <div className="flex items-center justify-center border border-navbarColor col-span-1  p-2 rounded-lg">
                <p className="text-sm">
                  {data.teacherId? data.teacherId :<span className="text-gray-400"> teacherId missing</span>}
                  <br />
                  {}
                </p>
              </div>
              <div className="flex items-center justify-center col-span-1">
                <button className="bg-navbarColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  <Link
                    to={`/addcourse/${data.courseId}`}
                    className="text-md text-white hover:text-black hover:underline"
                  >
                    View details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full md:w-1/2 rounded-lg p-4 md:p-6 mx-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  {
                    label: "Student Name",
                    id: "name",
                    placeholder: "Enter Name",
                  },
                  {
                    label: "Father Name",
                    id: "fathername",
                    placeholder: "Enter Father Name",
                  },
                  {
                    label: "CNIC No.",
                    id: "cnic",
                    placeholder: "42401-1234567-1",
                  },
                  {
                    label: "Email",
                    id: "email",
                    placeholder: "user@gmail.com",
                    type: "email",
                  },
                  {
                    label: "Password",
                    id: "password",
                    placeholder: "********",
                    type: "password",
                  },
                  {
                    label: "Teacher ID",
                    id: "teacherid",
                    placeholder: "teacher-001",
                  },
                  { label: "User ID", id: "userid", placeholder: "stu-001" },
                  { label: "Batch", id: "batches", placeholder: "Batch-1" },
                  { label: "Course", id: "courses", placeholder: "React.js" },
                  { label: "Course ID", id: "courseid", placeholder: "CS-101" },
                  { label: "Days", id: "days", placeholder: "MWF" },
                  {
                    label: "Section ID",
                    id: "sectionid",
                    placeholder: "Sec-1",
                  },
                ].map(({ label, id, placeholder, type = "text" }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      placeholder={placeholder}
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="w-1/2 bg-navbarColor text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
                <CloseOutlined
                  className="text-2xl cursor-pointer"
                  onClick={closeModal}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
