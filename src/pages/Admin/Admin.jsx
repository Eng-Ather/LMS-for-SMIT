import React from "react";

function Student() {
  return (
    <div className="min-h-screen bg-gray-100 flex shadow h-screen">
      {/* Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          ADMIN
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 border p-4  ">
          Option
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 border p-4  ">
          Option
        </div>

        <div className="font-serif font-semibold text-headingColor bg-gray-400 border p-4  ">
          Option
        </div>
      </div>

      {/* /center box */}
      <div className="p-8 flex flex-col flex-end w-4/5 border ">
        <div>
          <h1 className="font-serif text-headingColor text-2xl md:text-4xl lg:text-5xl">
            Heading
          </h1>
          <br />
          <h1 className="font-serif text-subHeadingColor text-lg md:text-2xl lg:text-4xl ">
            Sub Heading
          </h1>
          <br />

          <h1 className="text-xl text-textColor">Text</h1>
          <h1 className="text-lg text-textColor">Text</h1>
          <h1 className="text-sm text-textColor">Text</h1>
          <p className="text-textColor ">Text</p>
        </div>
      </div>
    </div>
  );
}

export default Student;
