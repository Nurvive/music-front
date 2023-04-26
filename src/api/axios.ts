import Axios from 'axios';
import { API_URL } from '~/constants';

const CONFIG = {
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};
export const axiosInstance = Axios.create(CONFIG)
