import { Button } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router";

function Adminscreens() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-100 flex shadow h-screen">
      {/* Left Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          ADMIN
        </div>
        <div
          onClick={() => navigate("/admin")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Dashboard
        </div>

        <div
          onClick={() => navigate("/addstudent")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Students
        </div>

        <div
          onClick={() => navigate("/addcourse")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Courses
        </div>

        <div
          onClick={() => navigate("/newannouncement")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Announcements
        </div>
        <div
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Instructors
        </div>
      </div>

      {/* /center box */}
      <div className="flex flex-col w-4/5 border ">
      <div className="border border-black h-20"></div>
        <Outlet />
      </div>

    </div>
  );
}

export default Adminscreens;
