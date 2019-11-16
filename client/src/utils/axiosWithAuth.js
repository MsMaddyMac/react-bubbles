import axios from 'axios';

// helper function to enable DRY code this retrieves a token from local storage.
export function getToken() {
    return localStorage.getItem('token')
}

// Axios helper function
const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: `http://localhost:5000/api`,
        headers: {
            Authorization: token
        }
    });
};


export default axiosWithAuth