import React, { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/context";
import LogoutButton from "../../components/logout";

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
      {/* Sidebar */}
      <div className="bg-gray-200 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-gray-300 px-4 py-2">
          <div className="font-serif text-xl">STUDENT</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-headingColor focus:outline-none"
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"} md:block`}>
          <div className="font-serif text-xl md:text-3xl text-center py-6 hidden md:block">
            STUDENT
          </div>

          <div
            onClick={() => navigate("/student")}
            className="sidebar-item"
          >
            Dashboard
          </div>

          <div
            onClick={() => navigate("/assignments")}
            className="sidebar-item"
          >
            Assignments
          </div>

          <div
            onClick={() => navigate("/courseoutline")}
            className="sidebar-item"
          >
            Course Outline
          </div>

          <div className="sidebar-item">
            <a
              href="https://student.saylaniwelfare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-md md:text-lg text-headingColor hover:text-white"
            >
              Maintenance Charges
            </a>
          </div>

          <div className="sidebar-item">
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full md:w-4/5 border">
        <Outlet />
      </div>
    </div>
  );
}


