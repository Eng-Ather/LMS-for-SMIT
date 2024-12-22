import React from 'react'
import { Outlet } from 'react-router'


export default function TeacherScreens() {
  return (
    
    <div className="min-h-screen bg-gray-100 flex shadow h-screen">
      {/* Side block */}
      <div className="bg-gray-200 flex flex-start flex-col w-1/5">
        <div className="font-serif text-headingColor h-16 content-center mx-auto text-2xl ">
          STUDENT
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
      <div className="flex flex-col flex-end w-4/5 border ">
        <Outlet/>
      </div>
    </div>
  )
}
