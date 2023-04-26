import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateTrackPayload } from '~/types';

const initialState: CreateTrackPayload = {
    name: '',
    artist: '',
    text: '',
};

export const createTrackSlice = createSlice({
    name: 'createTrack',
    initialState,
    reducers: {
        setCreateTrackPayload(state, { payload }: PayloadAction<CreateTrackPayload>) {
            state.artist = payload.artist;
            state.text = payload.text;
            state.name = payload.name;
        },
    },
});

export const { setCreateTrackPayload } = createTrackSlice.actions;
export default createTrackSlice.reducer;
