import { createSlice } from '@reduxjs/toolkit';
import { createPlaylist, getPlaylist, getPlaylistList, SLICE_NAME } from '~/store/playlist/playlist.actions';
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
        builder.addCase(createPlaylist.fulfilled, (state, { payload }) => {
            state.playlists = [...state.playlists, payload];
        });
        builder.addCase(getPlaylistList.fulfilled, (state, { payload }) => {
            state.playlists = payload;
        });
        builder.addCase(getPlaylist.fulfilled, (state, { payload }) => {
            state.playlist = payload;
        });
    },
});

export default playlistSlice.reducer;
