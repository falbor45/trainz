import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://fucking-backend.com/api/',
	timeout: 1000
});

export default axiosInstance;