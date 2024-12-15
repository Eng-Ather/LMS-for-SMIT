import React from "react";

function Teacher() {
  return (
    <>
      <div className="flex shadow h-screen">
        <div className="flex flex-start flex-col w-1/5 bg-emerald-50">
          <div className="h-16 content-center mx-auto text-2xl roboto-black">Teacher</div>
          <div className="border p-4 font-bold shadow cursor-pointer">
            Courses
          </div>
          <div className="border p-4 font-bold shadow cursor-pointer">
            Teachers
          </div>
          <div className="border p-4 font-bold shadow cursor-pointer">
            Students
          </div>
        </div>
        <div className="flex flex-col flex-end w-4/5 border ">
        </div>
      </div>
    </>
  );
}

export default Teacher;
