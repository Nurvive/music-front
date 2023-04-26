import { createAsyncThunk } from '@reduxjs/toolkit';
import { Track } from '~/types';
import { getList } from '~/api';

export const TRACK_SLICE_NAME = 'track';

export const getTracks = createAsyncThunk<Track[]>(`${TRACK_SLICE_NAME}/GET`, async () => {
    try {
        return await getList();
    } catch (error) {
        console.error((error as Error)?.message ?? error);
        throw new Error((error as Error)?.message);
    }
});
