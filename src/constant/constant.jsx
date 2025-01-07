
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
const dev_url = 'http://localhost:5000';

// const prod_url = 'https://api.abc.com';

 const Base_URL = dev_url;

 const AppRouts = {
    signin : Base_URL + '/user/login',
    signup : Base_URL + '/user/signup',

    getCurrentUserProfile : Base_URL + '/user/currentUserInfo',

    getCourseOutline : Base_URL + '/course/course-outline/',

    getCoveredTopics :Base_URL + '/course/get-cover-topics/'
}
export default AppRouts;