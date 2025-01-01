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
      {/* {user && <RoleBasedNavigation />} */}

      {/* Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          STUDENT
        </div>
        <div
          onClick={() => navigate("/assignments")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Assignments
        </div>
        
        {/* <div
          onClick={() => navigate("/quizresults")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Quiz Results
        </div> */}

        {/* <div
          onClick={() => navigate("/attendancerecords")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor "
        >
          Attendance Records
        </div> */}

        <div
          onClick={() => navigate("/courseoutline")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4 hover:text-white hover:bg-navbarColor hover:border hover:border-subHeadingColor  "
        >
          {" "}
          Course Outline{" "}
        </div>

        <div
          // onClick={() => navigate("/maintenancecharges")}
          className=" bg-gray-400 border p-4 hover:bg-navbarColor hover:border hover:border-subHeadingColor"
        >
          <Link
            to="https://student.saylaniwelfare.com/"
            target="_blank"
            className="font-serif font-semibold cursor-pointer text-headingColor hover:text-white"
          >
            Maintenance Charges
          </Link>
        </div>

        <div
          onClick={() => navigate("/assignments")}
          className="font-serif font-semibold cursor-pointer text-headingColor bg-gray-400 border p-4  "
        >
          <LogoutButton />
        </div>
      </div>

      {/* /center box */}
      <div className="flex flex-col flex-end w-4/5 border ">
        <Outlet />
      </div>
    </div>
  );
}
