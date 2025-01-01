import React from "react";
import { Outlet, useNavigate } from "react-router";
import {NotificationOutlined, UserOutlined, MenuOutlined} from "@ant-design/icons"
import { Avatar } from "antd";


export default function TeacherScreens() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-100 flex shadow">
      {/* Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          TEACHER
        </div>
        <div
          onClick={() => navigate("/aboutcourse")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          About Courses
        </div>
        <div
          onClick={() => navigate("/studentsassignments")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4"
        >
          Students Assignments
        </div>
        <div
          onClick={() => navigate("/notifications")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          Notifications
        </div>
      </div>

      {/* /center box */}
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
  );
}
