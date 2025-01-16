import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import LogoutButton from "../../components/logout";
import RoleBasedNavigation from "../../components/RoleBasedNavigation";
import { useContext } from "react";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/context.jsx";

function Adminscreens() {
  const navigate = useNavigate();

  // Access user and token from AuthContext
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      {/********************     Side block    ***************************/}
      <div className="bg-cyan-800 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-cyan-800 px-4 py-2">
          <div className="font-serif text-xl text-white">ADMIN</div>
          <button
            onClick={() => setIsOpen(!isOpen)} //to toggel state
            className="text-white bg-cyan-700"
          >
            {isOpen ? <CloseOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"}  md:block`}>
          <div className="font-serif text-xl md:text-2xl text-center text-white py-6 hidden md:block">
            ADMIN
          </div>

          <div
            onClick={() => navigate("/admin")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white"
          >
            Dashboard
          </div>

          <div
            onClick={() => navigate("/addstudent")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white"
          >
            Students
          </div>

          <div
            onClick={() => navigate("/addcourse")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white"
          >
            Course
          </div>

          <div
            onClick={() => navigate("/newannouncement")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white"
          >
            Announcements
          </div>
          <div
            onClick={() => navigate("/instructors")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white"
          >
            Instructors
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4"
          >
            <LogoutButton />
          </div>
        </div>
      </div>

      {/*********************   /center box   **************************/}
      <div className="flex flex-col flex-end w-full md:w-4/5 bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
}

export default Adminscreens;
