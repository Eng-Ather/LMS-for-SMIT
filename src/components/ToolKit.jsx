// import React from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";

// import {
//   FaGithub,
//   FaGoogle,
//   FaWhatsapp,
//   FaVideo,
//   FaNpm,
//   FaRobot,
// } from "react-icons/fa"; // React Icons import

// const ToolKit = () => {
//   return (
//     <div className=" flex flex-row lg:flex-col gap-3 py-3">
//       <div className="  flex w-full justify-around lg:justify-center gap-4">
//         {/* Google search Engin */}
//         <a
//           href="https://www.google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" text-blue-500 p-1 w-10 h-10  rounded-full flex justify-center items-center"
//         >
//           <FaGoogle size={50} data-tooltip-id="Googlelogo-tooltip" />
//           <ReactTooltip
//             id="Googlelogo-tooltip"
//             place="bottom"
//             content="Google"
//           />
//         </a>

//         {/* google meet */}
//         <a
//           href="https://meet.google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" p-1 w-10 h-10  rounded-full flex justify-center items-center"
//         >
//           <FaVideo size={50} data-tooltip-id="GooglrMeet-tooltip" />
//           <ReactTooltip
//             id="GooglrMeet-tooltip"
//             place="bottom"
//             content="Google Meet"
//           />
//         </a>
//         </div>

//       <div className="  flex w-full justify-around lg:justify-center gap-4">
//         {/* GitHub Link */}
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" text-black p-1 w-10 h-10  rounded-full flex justify-center items-center"
//         >
//           <FaGithub size={50} data-tooltip-id="GitHublogo-tooltip" />
//           <ReactTooltip
//             id="GitHublogo-tooltip"
//             place="bottom"
//             content="GitHub"
//           />
//         </a>

//         {/* ChatGPT Link */}
//         <a
//           href="https://chat.openai.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" text-black p-1 w-10 h-10  rounded-full flex justify-center items-center"
//         >
//           <FaRobot size={50} data-tooltip-id="ChatGPTlogo-tooltip" />
//           <ReactTooltip
//             id="ChatGPTlogo-tooltip"
//             place="bottom"
//             content="ChatGPT"
//           />
//         </a>
//       </div>
      
//       <div className="  flex w-full justify-around lg:justify-center gap-4">

//       {/* NPM Link */}
//         <a
//           href="https://www.npmjs.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className=" text-red-600 p-1 w-10 h-10  rounded-full flex justify-center items-center"
//         >
//           <FaNpm size={50} data-tooltip-id="NPMlogo-tooltip" />
//           <ReactTooltip id="NPMlogo-tooltip" place="bottom" content="NPM" />
//         </a>
//         </div>
//     </div>
//   );
// };

// export default ToolKit;
// -----------------------------------------------


import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  FaGithub,
  FaGoogle,
  FaWhatsapp,
  FaVideo,
  FaNpm,
  FaRobot,
} from "react-icons/fa"; // React Icons import

const ToolKit = () => {
  return (
    // <div className="p-6 bg-gray-100 rounded-lg shadow-md">

      <div className="p-6 border rounded-lg ">

      <h2 className="text-lg md:text-2xl font-serif text-center text-headingColor mb-4 border-b pb-2 border-blue-500">
      ToolKit
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {/* Google Search Engine */}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaGoogle size={40} className="text-blue-500" data-tooltip-id="Googlelogo-tooltip" />
          <span className="mt-2 text-sm text-black">Google</span>
          <ReactTooltip id="Googlelogo-tooltip" place="bottom" content="Google" />
        </a>

        {/* Google Meet */}
        <a
          href="https://meet.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaVideo size={40} className="text-green-500" data-tooltip-id="GooglrMeet-tooltip" />
          <span className="mt-2 text-sm text-black">Google Meet</span>
          <ReactTooltip id="GooglrMeet-tooltip" place="bottom" content="Google Meet" />
        </a>

        {/* GitHub Link */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaGithub size={40} className="text-black" data-tooltip-id="GitHublogo-tooltip" />
          <span className="mt-2 text-sm text-black">GitHub</span>
          <ReactTooltip id="GitHublogo-tooltip" place="bottom" content="GitHub" />
        </a>

        {/* ChatGPT Link */}
        {/* <a
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaRobot size={40} className="text-purple-500" data-tooltip-id="ChatGPTlogo-tooltip" />
          <span className="mt-2 text-sm text-black">ChatGPT</span>
          <ReactTooltip id="ChatGPTlogo-tooltip" place="bottom" content="ChatGPT" />
        </a> */}

        {/* NPM Link */}
        <a
          href="https://www.npmjs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <FaNpm size={40} className="text-red-600" data-tooltip-id="NPMlogo-tooltip" />
          <span className="mt-2 text-sm text-black">NPM</span>
          <ReactTooltip id="NPMlogo-tooltip" place="bottom" content="NPM" />
        </a>
      </div>
    </div>
  );
};

export default ToolKit;
