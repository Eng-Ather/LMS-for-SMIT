// ********************  TO CONNECT WITH ATHER (PRACTICE-PROJECT) DATABASE ****************

// const dev_url = 'http://localhost:4000';

// // const prod_url = 'https://api.abc.com';

//  const Base_URL = dev_url;
//  const AppRouts = {
//     signin : Base_URL + '/api/login',
//     signup : Base_URL + '/api/signup',
//     getCurrentUserProfile : Base_URL + '/api/currentUserInfo',
// }

// *******************************  TO CONNECT WITH SMIT (PROJECT) DATABASE *******************

const dev_url = "http://localhost:5000";

// // const prod_url = 'https://api.abc.com';

const Base_URL = dev_url;

const AppRouts = {
  signin: Base_URL + "/user/login",
  signup: Base_URL + "/user/signup",
  getCurrentUserProfile: Base_URL + "/user/currentUserInfo",

  getCourseOutline: Base_URL + "/course/course-outline/",
  updateCourseOutline: Base_URL + "/course/cover-topics",

  addTeacher: Base_URL + "/admin/addTeacher",
  getAllTeacher: Base_URL + "/admin/getallteachers",

  addCourse: Base_URL + "/admin/addCourse",
  getAllCourses: Base_URL + "/admin/getAllCourses",
  addStudent: Base_URL + "/admin/addStudent",
  getAllStudents: Base_URL + "/admin/getAllStudents",

  getCoveredTopics: Base_URL + "/course/get-cover-topics/",

  createAssignment: Base_URL + "/assignment/create-assignment",
  submitAssignment: Base_URL + "/assignment/submit-assignment",

  getSpecificCourseAssignment: Base_URL + "/assignment/get-assignment/",
  getStudentSubmitedAssigment:
    Base_URL + "/assignment/get-submited-assignment/",
  getLeatestAssignment: Base_URL + "/assignment/get-leatest-assignment/",
};
export default AppRouts;
