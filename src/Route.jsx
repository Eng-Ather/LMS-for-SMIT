import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Notifications from "./pages/Notification.jsx";
import Error from "./pages/Error.jsx";
import Adminscreens from "./pages/Admin/Adminscreens.jsx";
import AddStudent from "./pages/Admin/AdminComponents/AddStudent.jsx";
import NewAnnoucements from "./pages/Admin/AdminComponents/NewAnnoucements.jsx";
import Addcourse from "./pages/Admin/AdminComponents/Addcourse.jsx";
import MainScreen from "./pages/Admin/AdminComponents/MainScreen.jsx";
import ScreensWithNavFooter from "./components/ScreensWithNavFooter.jsx";
import Studentscreens from "./pages/Student/Studentscreens.jsx";
import StudentMainScreen from "./pages/Student/StudentComponents/StudentMainScreen.jsx";
import Assignments from "./pages/Student/StudentComponents/Assignments.jsx";
import QuizResults from "./pages/Student/StudentComponents/QuizResults.jsx";
import CourseOutline from "./pages/Student/StudentComponents/CourseOutline.jsx";
import AttendanceRecords from "./pages/Student/StudentComponents/AttendanceRecords.jsx";
import TeacherScreens from "./pages/Teacher/TeacherScreens.jsx";
import TeacherMainScreen from "./pages/Teacher/TeacherComponents/TeacherMainScreen.jsx";
import AboutCourse from "./pages/Teacher/TeacherComponents/AboutCourse.jsx";
import StudentsAssignments from "./pages/Teacher/TeacherComponents/StudentsAssignments.jsx";
import Instructors from "./pages/Admin/AdminComponents/Instructors.jsx";
import TeacherNotifications from "./pages/Teacher/TeacherComponents/TeacherNotifications.jsx";
import DynamicCourseDetails from "./pages/Admin/AdminComponents/DynamicCourseDetails.jsx";

export default function Approuter() {
  return (
    <>
      
        <Routes>
          <Route element={<ScreensWithNavFooter />}>
            <Route index element={<App />} />
            <Route path="/About" element={<About />} />
            <Route path="/Notification" element={<Notifications />} />
            <Route path="/*" element={<Error />} />
          </Route>
          <Route element={<Adminscreens />}>
            <Route path="/admin" element={<MainScreen />} />
            <Route path="/addcourse" element={<Addcourse />} />
            <Route path="/addcourse/:courseId" element={<DynamicCourseDetails />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/newannouncement" element={<NewAnnoucements />} />
            <Route path="/instructors" element={<Instructors />} />
          </Route>
          <Route element={<Studentscreens />}>
            <Route path="/student" element={<StudentMainScreen />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/quizresults" element={<QuizResults />} />
            <Route path="/attendancerecords" element={<AttendanceRecords />} />
            <Route path="/courseoutline" element={<CourseOutline />} />
          </Route>
          <Route element={<TeacherScreens />}>
            <Route path="/teacher" element={<TeacherMainScreen />} />
            <Route path="/aboutcourse" element={<AboutCourse />} />
            <Route
              path="/studentsassignments"
              element={<StudentsAssignments />}
            />
            <Route path="/notifications" element={<TeacherNotifications />} />
          </Route>
        </Routes>

    </>
  );
}
