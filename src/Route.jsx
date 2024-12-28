import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Notifications from "./pages/Notification.jsx";
import Error from "./pages/Error.jsx";
import Teacher from "./pages/Teacher/Teacher.jsx";
import Student from "./pages/Student/Student.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Footer from "./components/Footer.jsx";
import ScreenWithNavbar from "./components/ScreenWithNavbar.jsx";
import ScreenWithoutNavbar from "./components/ScreenWithoutNavbar.jsx";

export default function Approuter() {
  return (
    <>
      
        <Routes>
          <Route element={<ScreenWithNavbar/>} >
          <Route index element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notification" element={<Notifications />} />
          <Route path="/*" element={<Error />} />


          </Route>
          <Route element={<ScreenWithoutNavbar/>}>
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin" element={<Admin/>} />
          </Route>
        </Routes>
        <Footer/>
      
    </>
  );
}
