import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '~/store/store';
import { SetNewTrackAction } from '~/types';

export const SLICE_NAME = 'playQueue';

export const setNextTrack = createAsyncThunk<SetNewTrackAction, void, AsyncThunkConfig>(
    `${SLICE_NAME}/setNextTrack`,
    async (_, { getState }) => {
        const state = getState().playQueue;

        const nextIndex = state.queue?.findIndex((track) => state.nextTrack?._id === track._id);
        const isNextIndexAvailable = !!nextIndex && !!state.queue?.[nextIndex + 1];

        return {
            prevTrack: state.activeTrack,
            activeTrack: state.nextTrack,
            nextTrack: isNextIndexAvailable ? state.queue?.[nextIndex + 1] ?? null : null,
        };
    },
);
export const setPrevTrack = createAsyncThunk<SetNewTrackAction, void, AsyncThunkConfig>(
    `${SLICE_NAME}/setPrevTrack`,
    async (_, { getState }) => {
        const state = getState().playQueue;

        const prevIndex = state.queue?.findIndex((track) => state.prevTrack?._id === track._id);
        const isPrevIndexAvailable = !!prevIndex && !!state.queue?.[prevIndex - 1];

        return {
            nextTrack: state.activeTrack,
            activeTrack: state.prevTrack,
            prevTrack: isPrevIndexAvailable ? state.queue?.[prevIndex - 1] ?? null : null,
        };
    },
);
