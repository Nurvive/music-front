import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTracks, TRACK_SLICE_NAME } from './track.action';
import { TrackState, FetchStatus, Track } from '~/types';

const initialState: TrackState = {
    tracks: [],
    loadingStatus: FetchStatus.IDLE,
};

export const trackSlice = createSlice({
    name: TRACK_SLICE_NAME,
    initialState,
    reducers: {
        setTracks(state, { payload }: PayloadAction<Track[]>) {
            state.tracks = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTracks.pending, (state) => {
                state.loadingStatus = FetchStatus.PENDING;
            })
            .addCase(getTracks.fulfilled, (state, { payload }) => {
                state.tracks = payload;
                state.loadingStatus = FetchStatus.FULFILLED;
            })
            .addCase(getTracks.rejected, (state) => {
                state.loadingStatus = FetchStatus.REJECTED;
            });
    },
});
export const { setTracks } = trackSlice.actions;
export default trackSlice.reducer;
