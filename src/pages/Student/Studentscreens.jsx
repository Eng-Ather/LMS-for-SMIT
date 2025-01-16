
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
    <div className="h-screen over flex flex-col md:flex-row shadow">
      {/********************** Side block (Dropdown for small screens) ****************************/}

      <div className="bg-cyan-800 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-cyan-800 px-4 py-2">
          <div className="font-serif text-xl text-white">STUDENT</div>
          <button
            onClick={() => setIsOpen(!isOpen)} //to toggle state
            className="text-white bg-cyan-700 "
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"}  md:block`}>
          <div className="font-serif text-xl md:text-2xl text-center text-white py-6 hidden md:block">
            STUDENT
          </div>

          <div
            onClick={() => navigate("/student")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2  hover:border-white"
          >
            Dashboard
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2  hover:border-white"
          >
            Assignments
          </div>

          <div
            onClick={() => navigate("/courseoutline")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2  hover:border-white"
          >
            Course Outline
          </div>

          <div className="bg-cyan-900 p-4 my-2 hover:border hover:border-white">
            <Link
              to="https://student.saylaniwelfare.com/"
              target="_blank"
              className="font-serif text-md md:text-lg cursor-pointer text-white hover:text-white"
            >
              Maintenance Charges
            </Link>
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="font-serif text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4"
          >
            <LogoutButton />
          </div>
        </div>
      </div>

      {/************************* Center box ******************************/}
      <div className="flex flex-col flex-end w-full md:w-4/5 bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
}

