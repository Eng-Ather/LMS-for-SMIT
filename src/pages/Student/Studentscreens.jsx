import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/context";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoutButton from "../../components/logout";
import { Link } from "react-router-dom";

export default function Studentscreens() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      {/********************** Side block (Dropdown for small screens) ****************************/}

      <div className="bg-gray-200 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-gray-300 px-4 py-2">
          <div className="font-serif text-xl text-headingColor">STUDENT</div>
          <button
            onClick={() => setIsOpen(!isOpen)} //to toggel state
            className="text-headingColor focus:outline-none"
          >
            {isOpen ? <CloseOutlined /> : <MenuFoldOutlined />}
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"}  md:block`}>
          <div className="font-serif text-xl md:text-3xl text-center text-headingColor py-6 hidden md:block">
            STUDENT
          </div>

          <div
            onClick={() => navigate("/student")}
            className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Dashboard
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Assignments
          </div>

          <div
            onClick={() => navigate("/courseoutline")}
            className="font-serif text-md md:text-lg cursor-pointer  text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
          >
            Course Outline
          </div>

          <div className=" bg-gray-400 border p-4 my-2 hover:bg-navbarColor hover:border hover:border-headingColor">
            <Link
              to="https://student.saylaniwelfare.com/"
              target="_blank"
              className="font-serif text-md md:text-lg cursor-pointer  text-headingColor hover:text-white"
            >
              Maintenance Charges
            </Link>
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4"
          >
            <LogoutButton />
          </div>
        </div>
      </div>

      {/************************* Center box ******************************/}
      <div className="flex flex-col flex-end w-full md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
}
