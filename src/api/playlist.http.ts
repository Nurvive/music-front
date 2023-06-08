import { axiosInstance } from '~/api/axios';
import { Playlist, UpdatePlaylist } from '~/types/playlist.types';

const path = 'playlist';

export const create = async (name: string) => {
    const data = await axiosInstance.post<Playlist>(path, { name });

    return data?.data;
};

export const getOne = async (_id: string) => {
    const data = await axiosInstance.get<Playlist>(`${path}/${_id}`);

    return data?.data;
};

export const getList = async () => {
    const data = await axiosInstance.get<Playlist[]>(path);

    return data?.data;
};

export const getListRaw = async (cookie?: string) => {
    return (
        await axiosInstance.get<Playlist[]>(path, {
            headers: { cookie },
        })
    )?.data;
};

export const update = async ({ _id, ...body }: UpdatePlaylist) => {
    const data = await axiosInstance.patch<Playlist>(`${path}/${_id}`, body);

    return data?.data;
};
