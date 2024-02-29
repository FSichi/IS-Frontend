import axios from 'axios';

export const AppAPI = (token: string) => {
    return axios.create({
        baseURL: 'http://localhost:4000/api',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'x-token': token,
        },
    });
};
