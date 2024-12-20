import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Notifications from "./pages/Notification.jsx";
import Error from "./pages/Error.jsx";
import Teacher from "./pages/Teacher/Teacher.jsx";
import Student from "./pages/Student/Student.jsx";
import Footer from "./components/Footer.jsx";
import ScreenWithNavbar from "./components/ScreenWithNavbar.jsx";
import ScreenWithoutNavbar from "./components/ScreenWithoutNavbar.jsx";
import Adminscreens from "./pages/Admin/Adminscreens.jsx";
import MainScreen from "./pages/Admin/MainScreen.jsx";
import Addcourse from "./pages/Admin/Addcourse.jsx";
import AddStudent from "./pages/Admin/AdminComponents/AddStudent.jsx";
import NewAnnoucements from "./pages/Admin/AdminComponents/NewAnnoucements.jsx";

export default function Approuter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ScreenWithNavbar />}>
            <Route index element={<App />} />
            <Route path="/About" element={<About />} />
            <Route path="/Notification" element={<Notifications />} />
            <Route path="/*" element={<Error />} />
          </Route>
          <Route element={<ScreenWithoutNavbar />}>
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
          </Route>
          <Route element={<Adminscreens />}>
            <Route path="/admin" element={<MainScreen />} />
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/newannouncement" element={<NewAnnoucements />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
