import { createSlice } from '@reduxjs/toolkit';
import {
    createPlaylist,
    getPlaylist,
    getPlaylistList,
    SLICE_NAME,
    updatePlaylist,
} from '~/store/playlist/playlist.actions';
import { PlaylistState } from '~/types/playlist.types';
import { FetchStatus } from '~/types';

const initialState: PlaylistState = {
    loadingStatus: FetchStatus.IDLE,
    playlists: [],
    playlist: null,
};

export const playlistSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPlaylist.pending, (state) => {
            state.loadingStatus = FetchStatus.PENDING;
        });
        builder.addCase(createPlaylist.fulfilled, (state, { payload }) => {
            state.loadingStatus = FetchStatus.FULFILLED;
            state.playlists = [...state.playlists, payload];
        });
        builder.addCase(createPlaylist.rejected, (state) => {
            state.loadingStatus = FetchStatus.REJECTED;
        });
        builder.addCase(getPlaylistList.pending, (state) => {
            state.loadingStatus = FetchStatus.PENDING;
        });
        builder.addCase(getPlaylistList.fulfilled, (state, { payload }) => {
            state.loadingStatus = FetchStatus.FULFILLED;
            state.playlists = payload;
        });
        builder.addCase(getPlaylistList.rejected, (state) => {
            state.loadingStatus = FetchStatus.REJECTED;
        });
        builder.addCase(getPlaylist.pending, (state) => {
            state.loadingStatus = FetchStatus.PENDING;
        });
        builder.addCase(getPlaylist.fulfilled, (state, { payload }) => {
            state.loadingStatus = FetchStatus.FULFILLED;
            state.playlist = payload;
        });
        builder.addCase(getPlaylist.rejected, (state) => {
            state.loadingStatus = FetchStatus.REJECTED;
        });
        builder.addCase(updatePlaylist.fulfilled, (state, { payload }) => {
            const updated = state.playlists.find((playlist) => playlist._id === payload._id);

            if (updated) {
                updated.tracks = [...payload.tracks];
            }
        });
    },
});

export default playlistSlice.reducer;
