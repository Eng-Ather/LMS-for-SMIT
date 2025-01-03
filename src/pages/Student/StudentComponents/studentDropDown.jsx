import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StudentDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu options
  const menuOptions = [
    { label: "Dashboard", path: "/student" },
    { label: "Assignments", path: "/assignments" },
    { label: "Course Outline", path: "/courseoutline" },
    { label: "Maintenance Charges", path: "https://student.saylaniwelfare.com/", external: true },
  ];

  return (
    <div>
      {/* Button to toggle dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-headingColor focus:outline-none md:hidden"
      >
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Menu (Dropdown or Side Block) */}
      <div className={`flex-col ${isOpen ? "flex" : "hidden"} md:flex bg-gray-200 p-4`}>
        {/* Map through menu options */}
        {menuOptions.map((option, index) => (
          <div key={index} className="p-2 hover:bg-gray-300">
            {option.external ? (
              <a
                href={option.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-headingColor"
              >
                {option.label}
              </a>
            ) : (
              <Link to={option.path} className="text-headingColor">
                {option.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
