import { createAsyncThunk } from '@reduxjs/toolkit';
import { Playlist, UpdatePlaylist } from '~/types/playlist.types';
import { create, getList, getOne, update } from '~/api/playlist.http';

export const SLICE_NAME = 'PLAYLIST_SLICE';

export const createPlaylist = createAsyncThunk<Playlist, string>(`${SLICE_NAME}/CREATE_PLAYLIST`, async (name) => {
    return create(name);
});

export const getPlaylist = createAsyncThunk<Playlist, string>(`${SLICE_NAME}/GET_PLAYLIST`, async (_id) => {
    return getOne(_id);
});

export const getPlaylistList = createAsyncThunk<Playlist[], void>(`${SLICE_NAME}/GET_PLAYLISTS`, async () => {
    return getList();
});

export const updatePlaylist = createAsyncThunk<Playlist, UpdatePlaylist>(`${SLICE_NAME}/UPDATE_PLAYLIST`, async (data) => {
    return update(data);
});
