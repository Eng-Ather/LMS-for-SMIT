import React from "react";
import NewCourse from "../components/NewCourse";
import Announcement from "../components/Announcement";
import UpcommingEvent from "../components/UpcommingEvent";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-evenly">
      
      {/* Announcement Section */}
      <Announcement/>

      {/* New Admission Section */}
      <NewCourse />

      {/* Upcoming Events Section */}
     <UpcommingEvent/>
    </div>
  );
};

export default Notifications;
