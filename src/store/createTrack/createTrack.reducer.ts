import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateTrackPayload } from '~/types';

const initialState: CreateTrackPayload = {
    name: '',
    artist: '',
};

export const createTrackSlice = createSlice({
    name: 'createTrack',
    initialState,
    reducers: {
        setCreateTrackPayload(state, { payload }: PayloadAction<CreateTrackPayload>) {
            state.artist = payload.artist;
            state.name = payload.name;
        },
    },
});

export const { setCreateTrackPayload } = createTrackSlice.actions;
export default createTrackSlice.reducer;
