import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa"; 
import LogoutButton from "../../components/logout";
import { AuthContext } from "../../context/context";

export default function TeacherScreens() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
        {/********************     Side block    ***************************/}
        <div className="bg-gray-200 w-full md:w-1/5">
          <div className="flex md:hidden justify-between items-center bg-gray-300 px-4 py-2">
            <div className="font-serif text-xl text-headingColor">TEACHER</div>
            <button
              onClick={() => setIsOpen(!isOpen)} //to toggel state
              className="text-headingColor focus:outline-none"
            >
              {isOpen ? <CloseOutlined /> : <MenuFoldOutlined />}
            </button>
          </div>

          <div className={`flex-col ${isOpen ? "block" : "hidden"}  md:block`}>
            <div className="font-serif text-xl md:text-3xl text-center text-headingColor py-6 hidden md:block">
              TEACHER
            </div>

            <div
              onClick={() => navigate("/teacher")}
              className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
            >
              Dashboard
            </div>

            <div
              onClick={() => navigate("/aboutcourse")}
              className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
            >
              About Course
            </div>

            <div
              onClick={() => navigate("/studentsassignments")}
              className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
            >
              Students Assignments
            </div>

            <div
              onClick={() => navigate("/notifications")}
              className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
            >
              Notifications
            </div>

            <div
              onClick={() => navigate("/assignments")}
              className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4"
            >
              <LogoutButton />
            </div>
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      
      {/********************** Side block (Dropdown for small screens) ****************************/}
      <div className="bg-gray-200 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-gray-300 px-4 py-2">
          
          {/* Heading for smaller screens */}
          <div className="font-serif text-xl text-headingColor">TEACHER</div>

          {/* Toggle Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-headingColor focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />} 
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"} md:block`}>
          <div className="font-serif text-xl md:text-3xl text-center text-headingColor py-6 hidden md:block">
            TEACHER
          </div>

          <div
            onClick={() => navigate("/teacher")}
            className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Dashboard
          </div>

          <div
            onClick={() => navigate("/aboutcourse")}
            className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Courses Details
          </div>

          <div
            onClick={() => navigate("/studentsassignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Submitted Assignments
          </div>

          <div
            onClick={() => navigate("/studentsassignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            <LogoutButton />
          </div>
        </div>
      </div>

        {/*********************   /center box   **************************/}
        <div className="flex flex-col w-full md:w-4/5 border">
          <Outlet />
        </div>
      {/************************* Center box ******************************/}
      <div className="flex flex-col w-full md:w-4/5">
        <Outlet />
      </div>
    </>
  );
}
