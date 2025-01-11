import React from 'react';
import { FaGithub, FaGoogle, FaWhatsapp, FaVideo, FaNpm, FaRobot } from 'react-icons/fa'; // React Icons import
import { Tooltip as ReactTooltip } from "react-tooltip";

const ToolKit = () => {
  return (
     <div className="icon-links flex gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center">
       
        {/* Google Link */}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
          className='bg-white text-blue-500 p-1 w-7 h-7 rounded-full flex justify-center items-center' 
          >
          <FaGoogle size={20}  
            data-tooltip-id="Googlelogo-tooltip"
          />
          <ReactTooltip id="Googlelogo-tooltip" place="bottom" content="Google"/>
        </a>

        {/* WhatsApp Link */}
        {/* <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} color="green" />
        </a> */}

        {/* Google Meet Link */}
        <a href="https://meet.google.com" target="_blank" rel="noopener noreferrer"
          className='bg-white p-1 w-7 h-7 rounded-full flex justify-center items-center' 
        >
          <FaVideo 
          size={20} 
          data-tooltip-id="GooglrMeet-tooltip"
          />
          <ReactTooltip id='GooglrMeet-tooltip' place='bottom' content='Google Meet' />
        </a>

        {/* NPM Link */}
        <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer"
          className='bg-white text-red-600 p-1 w-7 h-7 rounded-full flex justify-center items-center' 
          >
          <FaNpm size={20} 
            data-tooltip-id="NPMlogo-tooltip"
          />
          <ReactTooltip id="NPMlogo-tooltip" place="bottom" content="NPM"/>
        </a>

         {/* GitHub Link */}
         <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className='bg-white text-black p-1 w-7 h-7 rounded-full flex justify-center items-center' 
         >
          <FaGithub size={20}  
            data-tooltip-id="GitHublogo-tooltip"
          />
          <ReactTooltip id="GitHublogo-tooltip" place="bottom" content="GitHub"/>
        </a>

        {/* ChatGPT Link */}
        <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer"
          className='bg-white text-black p-1 w-7 h-7 rounded-full flex justify-center items-center' 
          >
          <FaRobot size={20} 
            data-tooltip-id="ChatGPTlogo-tooltip"
          />
          <ReactTooltip id="ChatGPTlogo-tooltip" place="bottom" content="ChatGPT"/>
        </a>
      </div>
  );
};

export default ToolKit;
