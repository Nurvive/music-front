import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayQueueState, SetQueue, UpdatePlayQueue } from '~/types';
import { setNextTrack, setPrevTrack, SLICE_NAME } from './playQueue.actions';

const initialState: PlayQueueState = {
    activePlaylistId: null,
    queue: null,
    activeTrack: null,
    prevTrack: null,
    nextTrack: null,
};

export const playQueueSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setPlayQueue: (state, { payload }: PayloadAction<SetQueue>) => {
            state.activePlaylistId = payload.activePlaylistId;
            state.queue = payload.queue;
            state.activeTrack = payload.activeTrack;

            const activeIndex = payload.queue.findIndex((track) => payload.activeTrack._id === track._id);

            if (activeIndex) {
                state.prevTrack = payload.queue[activeIndex - 1];
            }

            if (payload.queue[activeIndex + 1]) {
                state.nextTrack = payload.queue[activeIndex + 1];
            }
        },
        updatePlayQueue: (state, { payload }: PayloadAction<UpdatePlayQueue>) => {
            state.activeTrack = payload.activeTrack;

            const activeIndex = state.queue?.findIndex((track) => payload.activeTrack._id === track._id);

            if (activeIndex) {
                state.prevTrack = state.queue?.[activeIndex - 1] ?? null;
            } else {
                state.prevTrack = null;
            }

            if (typeof activeIndex === 'number' && state.queue?.[activeIndex + 1]) {
                state.nextTrack = state.queue?.[activeIndex + 1] ?? null;
            } else {
                state.nextTrack = null;
            }
        },
        // setNextTrack: (state) => {
        //     state.prevTrack = state.activeTrack;
        //     state.activeTrack = state.nextTrack;
        //
        //     const nextIndex = state.queue?.findIndex((track) => state.nextTrack?._id === track._id);
        //
        //     if (nextIndex && state.queue?.[nextIndex + 1]) {
        //         state.nextTrack = state.queue?.[nextIndex + 1];
        //     } else {
        //         state.nextTrack = null;
        //     }
        // },
        // setPrevTrack: (state) => {
        //     state.nextTrack = state.activeTrack;
        //     state.activeTrack = state.prevTrack;
        //
        //     const prevIndex = state.queue?.findIndex((track) => state.prevTrack?._id === track._id);
        //
        //     if (prevIndex && state.queue?.[prevIndex + 1]) {
        //         state.prevTrack = state.queue?.[prevIndex - 1];
        //     } else {
        //         state.prevTrack = null;
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(setNextTrack.fulfilled, (state, { payload }) => {
            state.nextTrack = payload.nextTrack;
            state.activeTrack = payload.activeTrack;
            state.prevTrack = payload.prevTrack;
        });
        builder.addCase(setPrevTrack.fulfilled, (state, { payload }) => {
            state.nextTrack = payload.nextTrack;
            state.activeTrack = payload.activeTrack;
            state.prevTrack = payload.prevTrack;
        });
    },
});

export const { setPlayQueue, updatePlayQueue } = playQueueSlice.actions;
export default playQueueSlice.reducer;
