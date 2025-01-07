import React from "react";
import { FaUser } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaLaptopCode } from "react-icons/fa";

export default function MainScreen() {
  return (
    <div className="flex h-screen overflow-y-scroll">
      {/* main block  */}
      <div className="w-9/12">
        <div>
          <div className="h-72">
            <img
              className="h-72 w-full"
              src="https://plus.unsplash.com/premium_photo-1725937966612-f72342ea15c3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="LMS"
            />
          </div>
          <div className="flex">
            <div className="w-1/2">
              <div className="flex p-4 justify-between">
                <h2 className="font-bold text-2xl">Popular Courses</h2>
                <p>All Courses</p>
              </div>
              <div className="flex justify-between items-center m-2 p-4 shadow rounded border border-black">
                <div className="flex">
                  <span className="text-3xl bg-purple-400 rounded p-2">
                    <FaLaptopCode />
                  </span>
                  <h3 className="font-bold text-xl m-2">
                    Web & App Development
                  </h3>
                </div>
                <p>view</p>
              </div>
              <div className="flex justify-between items-center m-2 p-4 shadow rounded border border-black">
                <div className="flex">
                  <span className="text-3xl bg-purple-400 rounded p-2">
                    <FaLaptopCode />
                  </span>
                  <h3 className="font-bold text-xl m-2">
                    Web & App Development
                  </h3>
                </div>
                <p>view</p>
              </div>
              <div className="flex justify-between items-center m-2 p-4 shadow rounded border border-black">
                <div className="flex">
                  <span className="text-3xl bg-purple-400 rounded p-2">
                    <FaLaptopCode />
                  </span>
                  <h3 className="font-bold text-xl m-2">
                    Web & App Development
                  </h3>
                </div>
                <p>view</p>
              </div>
              <div className="flex justify-between items-center m-2 p-4 shadow rounded border border-black">
                <div className="flex">
                  <span className="text-3xl bg-purple-400 rounded p-2">
                    <FaLaptopCode />
                  </span>
                  <h3 className="font-bold text-xl m-2">
                    Web & App Development
                  </h3>
                </div>
                <p>view</p>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-bold text-center p-2">
                Monthly Progress
              </h1>
              <div className="p-4 mx-2 h-60 border border-black">
                chart will be shown here
              </div>
              <div className="grid grid-cols-2 gap-2 m-2 ">
                <div className="rounded content-center border border-black h-28">
                  Students Progress
                </div>
                <div className="rounded content-center border border-black">
                  Teachers Progress
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-2/5 ">
            <h2 className="font-bold text-center text-2xl p-2">
              Courses Completion
            </h2>
            <div className="flex flex-col shadow p-2 m-4">
              <span>a line will show there</span>
              <span>Web & App</span>
            </div>
            <div className="flex flex-col shadow p-2 m-4">
              <span>a line will show there</span>
              <span>Web & App</span>
            </div>
            <div className="flex flex-col shadow p-2 m-4">
              <span>a line will show there</span>
              <span>Web & App</span>
            </div>
            <div className="flex flex-col shadow p-2 m-4">
              <span>a line will show there</span>
              <span>Web & App</span>
            </div>
          </div>
          <div className="w-3/5 ">
            <h1 className="text-2xl font-bold text-center p-2">
              Upcoming Events
            </h1>
            <div className="flex my-2 shadow bg-gray-200 mx-2 rounded">
              <span className="text-2xl mx-6 my-4">
                <FaUser />
              </span>
              <span className="my-2">
                <h3 className="font-bold">New Teacher</h3>
                <p className="text-sm">Dated: 10-02-2025</p>
              </span>
            </div>
            <div className="flex my-2 shadow bg-gray-200 mx-2 rounded">
              <span className="text-2xl mx-6 my-4">
                <FaUser />
              </span>
              <span className="my-2">
                <h3 className="font-bold">New Teacher</h3>
                <p className="text-sm">Dated: 10-02-2025</p>
              </span>
            </div>
            <div className="flex my-2 shadow bg-gray-200 mx-2 rounded">
              <span className="text-2xl mx-6 my-4">
                <FaUser />
              </span>
              <span className="my-2">
                <h3 className="font-bold">New Teacher</h3>
                <p className="text-sm">Dated: 10-02-2025</p>
              </span>
            </div>
            <div className="flex my-2 shadow bg-gray-200 mx-2 rounded">
              <span className="text-2xl mx-6 my-4">
                <FaUser />
              </span>
              <span className="my-2">
                <h3 className="font-bold">New Teacher</h3>
                <p className="text-sm">Dated: 10-02-2025</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* side block  */}
      <div className="w-3/12">
        <div className="p-1">
          {/* insructors  */}
          <h2 className="text-xl text-center">Best Instructors</h2>
          <div className="flex py-2 my-2 border border-black rounded">
            <span className="text-4xl my-2 mx-2">
              <RxAvatar />
            </span>
            <span>
              <h3 className="font-bold">Bilal Raza</h3>
              <p className="text-sm">Data Scientist</p>
            </span>
          </div>
          <div className="flex py-2 my-2 border border-black rounded">
            <span className="text-4xl my-2 mx-2">
              <RxAvatar />
            </span>
            <span>
              <h3 className="font-bold">Bilal Raza</h3>
              <p className="text-sm">Data Scientist</p>
            </span>
          </div>
          <div className="flex py-2 my-2 border border-black rounded">
            <span className="text-4xl my-2 mx-2">
              <RxAvatar />
            </span>
            <span>
              <h3 className="font-bold">Bilal Raza</h3>
              <p className="text-sm">Data Scientist</p>
            </span>
          </div>
          <div className="flex py-2 my-2 border border-black rounded">
            <span className="text-4xl my-2 mx-2">
              <RxAvatar />
            </span>
            <span>
              <h3 className="font-bold">Bilal Raza</h3>
              <p className="text-sm">Data Scientist</p>
            </span>
          </div>
          <div className="flex py-2 my-2 border border-black rounded">
            <span className="text-4xl my-2 mx-2">
              <RxAvatar />
            </span>
            <span>
              <h3 className="font-bold">Bilal Raza</h3>
              <p className="text-sm">Data Scientist</p>
            </span>
          </div>

          <h2 className="text-xl text-center">Notice Board</h2>
          <div className="flex my-2 border border-black rounded">
            <span className="text-xl mx-2 my-6">
              <FaUser />
            </span>
            <span>
              <h3>New Teacher</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 border border-black rounded">
            <span className="text-xl mx-2 my-6">
              <FaUser />
            </span>
            <span>
              <h3>New Struture</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 border border-black rounded">
            <span className="text-xl mx-2 my-6">
              <FaUser />
            </span>
            <span>
              <h3>New Syllabus</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 border border-black rounded">
            <span className="text-xl mx-2 my-6">
              <FaUser />
            </span>
            <span>
              <h3>New Course</h3>
              <p>Lorem ipsum dolor sit amet ducimus? Lorem, ipsum dolor.</p>
            </span>
          </div>
          <div className="flex my-2 border border-black rounded">
            <span className="text-lg mx-auto">View All</span>
          </div>
        </div>
      </div>
    </div>
  );
}
