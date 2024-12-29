import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function TeacherScreens() {
  const location = useLocation();

  // Define menu items as paths only
  const menuItems = [
    "/teacher/aboutcourse",
    "/teacher/assignmentschedule",
    "/teacher/assignmentcheck",
    "/teacher/notifications",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex shadow h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 flex flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 flex items-center justify-center text-2xl">
          TEACHER
        </div>
        {menuItems.map((path) => (
          <Link
            key={path}
            to={path}
            className={`font-serif font-semibold text-headingColor border p-4 cursor-pointer block text-center ${
              location.pathname === path ? "bg-gray-500 text-white" : "bg-gray-400"
            }`}
          >
            {path.split("/").pop().replace(/([A-Z])/g, " $1").trim()} {/* Converts the path to readable text */}
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-4/5 border">
        <Outlet />
      </div>
    </div>
  );
}
