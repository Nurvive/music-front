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

export const out = async () => {
    await axiosInstance.post(`${path}/logout`);
};

export const getUserInfo = async (cookie?: string): Promise<User> => {
    return (
        await axiosInstance.get<GetUserInfoResponse>(path, {
            headers: { cookie },
        })
    )?.data;
};
