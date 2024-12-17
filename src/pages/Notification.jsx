import React from "react";
import NewCourse from "../components/NewCourse";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-evenly">
      
      {/* Announcement Section */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-8">
        <h4 className="text-3xl text-headingColor font-serif mb-4 headingColor">
          Announcements
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Admissions for the next semester are now open. Apply by January
              15th!
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Check out our new professional development workshops.
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Campus facilities will be closed for winter break from Dec 24th to
              Jan 2nd.
            </p>
          </li>
        </ul>
      </div>

      {/* New Admission Section */}
      <NewCourse />

      {/* Upcoming Events Section */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-8">
        <h4 className="text-3xl text-headingColor font-serif mb-4 headingColor">
          Upcoming Events
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Join us for our upcoming Annual IT Workshop on February 10th.
              Register now to secure your spot!
            </p>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <p className="textColor">
              Check out our new professional development workshops.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
