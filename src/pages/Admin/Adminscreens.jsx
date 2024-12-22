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
          Admin Panel
        </div>

        <div
          onClick={() => navigate("/addstudent")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Add Student
        </div>

        <div
          onClick={() => navigate("/addcourse")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Add Course
        </div>

        <div
          onClick={() => navigate("/newannouncement")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Announcements
        </div>
      </div>

      {/* /center box */}
      <div className="flex flex-col w-3/5 border ">
        <Outlet />
      </div>

      {/* Right side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          News
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 h-32 my-4 border rounded p-4  ">
          Option
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 h-32 my-4 border rounded p-4  ">
          Option
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 h-32 my-4 border rounded p-4  ">
          Option
        </div>
        <div className="font-serif font-semibold text-headingColor bg-gray-400 h-32 my-4 border rounded p-4  ">
          Option
        </div>
      </div>
    </div>
  );
}

export default Adminscreens;
