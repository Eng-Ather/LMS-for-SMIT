import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/context";
import LogoutButton from "../../components/logout";
import { Link } from "react-router-dom";
// import RoleBasedNavigation from "../../components/RoleBasedNavigation";

export default function Studentscreens() {
  const navigate = useNavigate();
  // Access user and token from AuthContext
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex shadow h-screen">

      {/**********************     Side block      ****************************/}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">

      {/* Side block Heading */}
        <div className="font-serif text-2xl md:text-4xl text-headingColor py-6 content-center mx-auto  ">
          STUDENT
        </div>

        {/* Side block options */}
        <div
          onClick={() => navigate("/student")}
          className="font-serif text-md md:text-lg cursor-pointer  hover:text-center text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Dashboard
        </div>

        <div
          onClick={() => navigate("/assignments")}
          className="font-serif text-md md:text-lg cursor-pointer hover:text-center text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Assignments
        </div>

        {/* <div
          onClick={() => navigate("/quizresults")}
          className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Quiz Results
        </div> */}

        {/* <div
          onClick={() => navigate("/attendancerecords")}
          className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Attendance Records
        </div> */}

        <div
          onClick={() => navigate("/courseoutline")}
          className="font-serif text-md md:text-lg cursor-pointer hover:text-center text-headingColor bg-gray-400 border p-4 my-2 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor  "
        >
          {" "}
          Course Outline{" "}
        </div>

        <div
          // onClick={() => navigate("/maintenancecharges")}
          className="hover:text-center bg-gray-400 border p-4 my-2 hover:bg-navbarColor hover:border hover:border-subHeadingColor"
        >
          <Link
            to="https://student.saylaniwelfare.com/"
            target="_blank"
            className="font-serif text-md md:text-lg cursor-pointer hover:text-center text-headingColor hover:text-white"
          >
            Maintenance Charges
          </Link>
        </div>

        <div
          onClick={() => navigate("/assignments")}
          className="font-serif text-md md:text-lg cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          <LogoutButton />
        </div>
      </div>

      {/*************************    center box   ******************************/}
      <div className="flex flex-col flex-end w-4/5 border ">
        <Outlet />
      </div>
    </div>
  );
}
