import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/player.reducer';
import trackReducer from './track/track.reducer';
import createTrackReducer from './createTrack/createTrack.reducer';
import authReducer from './auth/auth.reducer';
import playlistReducer from './playlist/playlist.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReducer,
    tracks: trackReducer,
    createTrack: createTrackReducer,
    playlist: playlistReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
