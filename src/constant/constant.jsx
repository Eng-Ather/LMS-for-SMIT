
const dev_url = 'http://localhost:4000';

// const prod_url = 'https://api.abc.com';

 const Base_URL = dev_url;

 const AppRouts = {

    signin : Base_URL + '/api/login',
    signup : Base_URL + '/api/signup',
    getCurrentUserProfile : Base_URL + '/api/currentUserInfo',
}
export default AppRouts;