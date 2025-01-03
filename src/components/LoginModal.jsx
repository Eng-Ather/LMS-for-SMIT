import Password from "antd/es/input/Password";
import axios from "axios";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import AppRouts from "../constant/constant.jsx";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AuthContext } from "../context/context.jsx";

function LoginModal() {
  const [loding, setLoading] = useState();
  const navigate = useNavigate();

 // Access user and token from AuthContext
 const { user, setUser, setToken, setSession } = useContext(AuthContext); 
  // console.log("User:" , user);
  // console.log("Token:" , token);

  const handellogin = (e) => {        //Function to be invoked on submit button click
    e.preventDefault();

    if (!e.target.email.value || !e.target.password.value) {
      alert("Email And Password Both are Required");
      return;
    }

    const obj = {
      email: e.target.email.value,    
      password: e.target.password.value,
    };
    setLoading(true);

    // ******* calling API to get signin
    axios.post(AppRouts.signin, obj)
      .then((res) => {
        const tokenn = res?.data?.user?.token;
        const currentUser = res?.data?.user?.user;
        setLoading(false);

        //****** Update sessionStorage & cookies to maintain tab session 
        Cookies.set("token", tokenn, {expires: 7});
        sessionStorage.setItem("tokenForSessionStorage",tokenn)
        
        //****** Update token, user state in AuthContext to maintain Auth function
        setSession(tokenn)
        setToken(tokenn); 
        setUser(currentUser); 

        // Navigate based on user role
        switch (currentUser.role) {
          case "teacher":
            navigate("/teacher"); // Redirect to teacher page
            break;
          case "student":
            navigate("/student"); // Redirect to student page
            break;
          case "admin":
            navigate("/admin"); // Redirect to admin page
            break;
          default:
            alert("Unknown role, please contact support.");
            break;
        }
      })
      .catch((error) => {
        alert("ERROR =>" + error);
        // console.log(error);
        setLoading(false);
      });
  };

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=" flex flex-col items-center">
      {/* Main content */}
      <div className="text-center">
        {/* Open login Modal button */}
        <FaUser
          onClick={openModal}
          className="text-xl text-white cursor-pointer transition-transform duration-500 transform hover:scale-125"
          aria-label="Login"
          data-tooltip-id="login-tooltip"
        />
        <ReactTooltip
          id="login-tooltip"
          place="bottom"
          content="Click to Login"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full md:w-1/2 rounded-lg p-6 mx-6 ">
            <h4 className="font-serif text-center text-headingColor text-lg md:text-2xl lg:text-3xl mb-4">
              Login to Your Account
            </h4>
            {/* Login Form */}
            <form onSubmit={handellogin}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-navbarColor font-serif font-bold text-lg text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {loding ? "Loading..." : "Submit"}
              </button>
            </form>

            {/* Close Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={closeModal}
                className="w-full font-serif font-bold bg-subHeadingColor text-lg text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
