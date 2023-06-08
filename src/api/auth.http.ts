import { GetUserInfoResponse, User, UserAuth } from '~/types';
import { axiosInstance } from '~/api/axios';

const path = '/auth';

export const register = async (value: UserAuth): Promise<User> => {
    const data = await axiosInstance.post<User>(`${path}/register`, value);

    return data.data;
}

export const signIn = async (value: UserAuth): Promise<User> => {
    const data = await axiosInstance.post<User>(`${path}/login`, value);

    return data.data;
}

export const authenticate = async (): Promise<User> => {
    const data = await axiosInstance.get<GetUserInfoResponse>(path);

    return data.data;
};
