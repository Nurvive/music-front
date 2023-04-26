import { axiosInstance } from '~/api/axios';
import { Track } from '~/types';

const path = '/tracks';
export const getList = async () => {
    const data = await axiosInstance.get<Track[]>(path);

    return data.data;
};

export const postTrack = async (value: FormData) => {
    await axiosInstance.post(path, value, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
