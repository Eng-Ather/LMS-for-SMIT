import React from "react";
import NewCourse from "../components/NewCourse";
import LoginFeild from "../components/loginFeild";

function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 ">
        {/* Professional Heading
        <h2 className="font-mono text-headingColor text-3xl md:text-4xl lg:text-5xl text-center mb-4">
          Professional Heading
        </h2>

        Professional Sub Heading
        <h3 className="font-serif text-subHeadingColor text-lg md:text-2xl lg:text-3xl text-center mb-6">
          Professional Sub Heading
        </h3> */}

        {/* Body Content */}
        <div className="text-textColor space-y-4">
          <div className="text-textColor space-y-10 mt-6">
            {/* Section 1: Chairmen message */}
            <div className="bg-gray-50 shadow-lg rounded-lg p-8 md:flex md:items-center">
              {/* Text Content */}
              <div className="md:w-2/3 md:pr-6">
                <h4 className="font-serif text-headingColor text-3xl md:text-4xl lg:text-5xl text-center">
                  Maulana Bashir Farooqi
                </h4>

                <h3 className="font-serif text-center text-subHeadingColor text-lg md:text-2xl lg:text-3xl mb-2">
                  Chairman S.M.I.T
                </h3>

                <p className="text-base text-v leading-relaxed">
                  We are a premier institution committed to providing top-notch
                  education and creating a positive learning environment. Our
                  experienced faculty and modern facilities ensure the success
                  of our students in a rapidly evolving world.
                </p>
              </div>
              {/* Image */}
              <div className="mt-6 md:mt-0 md:w-1/3">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Institute"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/*Login Field */}
            <LoginFeild/>

            {/* New Course Field */}
            <NewCourse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
