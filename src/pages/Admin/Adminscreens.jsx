
import React from "react";
import { Outlet, useNavigate } from "react-router";
import {NotificationOutlined, UserOutlined, MenuOutlined} from "@ant-design/icons"
import { Avatar } from "antd";

import { useEffect } from "react";
import React from "react";
import { Outlet, useNavigate } from "react-router";
import LogoutButton from "../../components/logout";
import RoleBasedNavigation from "../../components/RoleBasedNavigation";
import { useContext } from "react";
import { AuthContext } from "../../context/context.jsx";


function Adminscreens() {
  const navigate = useNavigate();

  // Access user and token from AuthContext
    const { user } = useContext(AuthContext);
  

    useEffect(() => {
      if (!user) {
        navigate("/");
      }
    },[user, navigate]);

  return (

    <div className="h-screen bg-gray-100 flex shadow">
      {/* Left Side block */}
    <div className="h-screen bg-gray-100 flex shadow ">
     

      {/**************************     Left Side block    ************************/}

      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        
        {/* side block heading */}
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          ADMIN
        </div>

        {/* side block option  */}
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
          onClick={() => navigate("/instructors")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Instructors
        </div>

        <div
          onClick={() => navigate("/newannouncement")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          <LogoutButton />
        </div>
      </div>

      {/*************************   center box    ********************************/}
      <div className="flex flex-col w-4/5 border ">
        <div className="flex h-20 shadow">
          <div className="w-10/12 flex h-16 text-4xl items-center justify-center">Welcome Username! </div>
          <div className="flex items-center justify-end w-2/12"> 
          <NotificationOutlined
          className="text-xl mx-3"
          />
          <Avatar className="text-xl mx-3" icon={<UserOutlined />} />
          <MenuOutlined className="text-xl mx-3" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
    </div>
  );
}

export default Adminscreens;
