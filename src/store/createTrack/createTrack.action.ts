import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateTrack } from '~/types';
import { postTrack } from '~/api';

export const createTrack = createAsyncThunk<void, CreateTrack>('CREATE_TRACK/CREATE', async (value) => {
    const formData = new FormData();
    formData.append('name', value.name);
    formData.append('artist', value.artist);
    formData.append('picture', value.picture);
    formData.append('audio', value.audio);

    await postTrack(formData);
});
