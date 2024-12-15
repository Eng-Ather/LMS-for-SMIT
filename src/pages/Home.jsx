import React from "react";
// import About from "./About";
// import Notifications from "./Notification";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <h1 className=" text-blue-900 text-2xl text-center">
        Welcome to the Home Page!
      </h1>

      <div>
        <h1 className="font-mono text-headingColor text-2xl md:text-4xl lg:text-6xl"> Professional Heading</h1>
        <br/>
        <h1 className="font-serif text-subHeadingColor text-lg md:text-2xl lg:text-4xl ">Professional Sub Heading</h1>
        <br/>

        <h1 className="text-3xl font-sans">Hello world</h1>
        <h1 className="text-2xl">Hello world</h1>
        <h1 className="text-xl">Hello world</h1>
        <h1 className="text-sm">Hello world</h1>
        <p className="text-textColor ">This is professional body text.</p>


      </div>
    </div>
  );
}

export default Home;
