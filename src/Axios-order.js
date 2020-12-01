import axios from 'axios';

const axiosIN = axios.create({
    baseURL: 'https://react-burger-builder-app-3dff5.firebaseio.com'
});

export default axiosIN;