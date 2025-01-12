import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useNavigate } from "react-router";

function addTeacherModal() {
  
  const navigate = useNavigate();



  return (
    <div className=" flex flex-col items-center">
      {/* Main content */}
      <div className="text-center">
        {/* Open login Modal button */}
        <span
          onClick={openModal}
          className="text-2xl text-white cursor-pointer transition-transform duration-500 transform hover:scale-125"
          aria-label="Login"
          data-tooltip-id="login-tooltip"
        >
        </span>
        <ReactTooltip
          id="login-tooltip"
          place="bottom"
          content="Add Instructor"
        />
      </div>

      
    </div>
  );
}

export default addTeacherModal;
