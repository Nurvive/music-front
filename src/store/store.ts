import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/player.reducer';
import trackReducer from './track/track.reducer';
import createTrackReducer from './createTrack/createTrack.reducer';
import authReducer from './auth/auth.reducer';
import playlistReducer from './playlist/playlist.reducer';
import playQueueReducer from './playQueue/playQueue.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReducer,
    tracks: trackReducer,
    createTrack: createTrackReducer,
    playlist: playlistReducer,
    playQueue: playQueueReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

const store = setupStore();

export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state: AppState;
    /** type for `thunkApi.dispatch` */
    dispatch: AppDispatch;
};

export default store;
