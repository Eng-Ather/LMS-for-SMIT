import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import footerImage from "../images/footerImage.jpg";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="text-white ">
      <div
        className="mx-auto text-center bg-cover bg-center py-10"
        style={{ backgroundImage: `url(${footerImage})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-12 lg:px-24">
          {/* Left Side: Logo and Links */}
          <div className="flex flex-col md:flex-row items-center md:w-1/2 space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="hidden md:block md:w-1/3 rounded-xl">
              <img
                src={logo}
                alt="Institute Logo"
                className="p-4 w-full max-h-40 rounded-3xl "
              />
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="text-sm flex justify-around md:justify-start space-x-6">
                <Link
                  to="/"
                  className="text-white  hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/About"
                  className="text-white hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  About
                </Link>
                <Link
                  to="/Notification"
                  className="text-white hover:text-gray-300 hover:underline decoration-2 underline-offset-4 transition duration-300"
                >
                  Notifications
                </Link>
              </div>

              {/* Contact Links */}
              <div className="text-sm flex justify-center items-center md:justify-start mt-3 space-x-2">
              <p>(021) 111 729 526</p>
                <p className=" text-green-500 "> <FaPhone size={15} /> </p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-around md:justify-start mt-3 space-x-6">
                <a
                  href="https://www.facebook.com/saylani.smit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-blue-500 hover:text-blue-500 hover:scale-150 duration-300 "

                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PL47LaC9-GaXXwcuZ0Ho_AxbjEjO087AD_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-red-500 hover:text-red-500 hover:scale-150 duration-300 "

                >
                  <FaYoutube size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/saylanimasstraining/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex justify-center items-center rounded-full bg-white text-blue-500 hover:text-blue-500 hover:scale-150 duration-300 "

                >
                  <FaLinkedin size={18} />
                </a>
              </div>

              

            </div>
          </div>

          {/* Right Side: Map and Address */}
          <div className="flex flex-col items-center md:w-1/2 mt-8 md:mt-0">
            <p className="text-sm md:text-base text-gray-200 text-center md:text-left font-semibold mb-4">
              <u>SMIT Gulshan Campus</u>, 2nd Floor, Mumtaz Mobile Mall, Gulshan
              Chowrangi, Block 2 Gulshan-e-Iqbal, Karachi
            </p>

            <iframe
              className="w-full md:w-2/3 h-48 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.187477858218!2d67.08742367488195!3d24.925682442645446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSMIT%20Gulshan%20Campus!5e0!3m2!1sen!2s!4v1734179017287!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className=" mt-4">
          <hr className="border-gray-500" />
          <p className=" text-center text-sm ">
            &copy; 2024 LMS for Gulshan Campus SMIT with <b> TEAM - I. </b> All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
