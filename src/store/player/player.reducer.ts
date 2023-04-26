import { PlayerState, Track } from '~/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PlayerState = {
    volume: 50,
    active: null,
    duration: 0,
    currentTime: 0,
    pause: true,
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setVolume(state, { payload }: PayloadAction<number>) {
            state.volume = payload;
        },
        setPause(state) {
            state.pause = true;
        },
        setPlay(state) {
            state.pause = false;
        },
        setCurrentTime(state, { payload }: PayloadAction<number>) {
            state.currentTime = payload;
        },
        setDuration(state, { payload }: PayloadAction<number>) {
            state.duration = payload;
        },
        setActiveTrack(state, { payload }: PayloadAction<Track>) {
            state.active = payload;
            state.currentTime = 0;
        },
    },
});

export const { setVolume, setCurrentTime, setDuration, setPlay, setActiveTrack, setPause } = playerSlice.actions;
export default playerSlice.reducer;
