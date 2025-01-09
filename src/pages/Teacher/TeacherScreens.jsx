import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";
import LogoutButton from "../../components/logout";
import { AuthContext } from "../../context/context";

export default function TeacherScreens() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const navItems = [
    { label: "Dashboard", path: "/teacher" },
    { label: "About Course", path: "/aboutcourse" },
    { label: "Students Assignments", path: "/studentsassignments" },
    { label: "Notifications", path: "/notifications" },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      {/******************** Side block ********************/}
      <div className="bg-gray-200 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center bg-gray-300 px-4 py-2">
          <div className="font-serif text-xl text-headingColor">TEACHER</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-headingColor focus:outline-none text-2xl"
          >
            {isOpen ? <CloseOutlined /> : <MenuFoldOutlined />}
          </button>
        </div>

        <div className={`flex-col ${isOpen ? "block" : "hidden"} md:block`}>
          <div className="font-serif text-xl md:text-3xl text-center text-headingColor py-6 hidden md:block">
            TEACHER
          </div>

          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-headingColor"
            >
              {item.label}
            </div>
          ))}

          <div className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2">
            <LogoutButton />
          </div>
        </div>
      </div>

      {/******************** Main Content Area ********************/}
      <div className="flex flex-col w-full md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
}
