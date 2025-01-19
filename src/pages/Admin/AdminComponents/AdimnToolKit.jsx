import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  FaGithub,
  FaGoogle,
  FaWhatsapp,
  FaVideo,
  FaRobot,
  FaUsers,
  FaClipboardList,
  FaCog,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa"; // React Icons import

const AdminToolKit = () => {
  return (
    <div className="p-6 bg-blue-50 border border-blue-300 rounded-lg">
       <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
       ToolKit
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Discord */}
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaDiscord size={40} className="text-indigo-600" data-tooltip-id="Discord-tooltip" />
          <span className="mt-2 text-sm text-black">Discord</span>
          <ReactTooltip id="Discord-tooltip" place="bottom" content="Discord Communication" />
        </a>

        {/* Google Meet */}
        <a
          href="https://meet.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaVideo size={40} className="text-green-500" data-tooltip-id="GoogleMeet-tooltip" />
          <span className="mt-2 text-sm text-black">Google Meet</span>
          <ReactTooltip id="GoogleMeet-tooltip" place="bottom" content="Google Meet" />
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaEnvelope size={40} className="text-red-500" data-tooltip-id="Gmail-tooltip" />
          <span className="mt-2 text-sm text-black">Gmail</span>
          <ReactTooltip id="Gmail-tooltip" place="bottom" content="Gmail Service" />
        </a>

        {/* ChatGPT */}
        <a
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaRobot size={40} className="text-purple-500" data-tooltip-id="ChatGPT-tooltip" />
          <span className="mt-2 text-sm text-black">ChatGPT</span>
          <ReactTooltip id="ChatGPT-tooltip" place="bottom" content="ChatGPT Assistant" />
        </a>

         {/* Google Search Engine */}
         <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaGoogle size={40} className="text-blue-500" data-tooltip-id="Googlelogo-tooltip" />
          <span className="mt-2 text-sm text-black">Google</span>
          <ReactTooltip id="Googlelogo-tooltip" place="bottom" content="Google Search" />
        </a>

        {/* User Management */}
        <a
          href="/admin/user-management"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaUsers size={40} className="text-blue-700" data-tooltip-id="UserManagement-tooltip" />
          <span className="mt-2 text-sm text-black">User Management</span>
          <ReactTooltip id="UserManagement-tooltip" place="bottom" content="Manage Users" />
        </a>
      </div>
    </div>
  );
};

export default AdminToolKit;
