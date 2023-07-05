import { createSlice } from '@reduxjs/toolkit';
import { auth, AUTH_SLICE_NAME, login, logout, registration } from '~/store/auth/auth.actions';
import { AuthState, FetchStatus } from '~/types';

const initialState: AuthState = {
    name: null,
    _id: null,
    loadingStatus: FetchStatus.IDLE,
};

export const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(registration.pending, (state) => {
                state.loadingStatus = FetchStatus.PENDING;
            })
            .addCase(registration.fulfilled, (state, { payload }) => {
                state.loadingStatus = FetchStatus.FULFILLED;
                state.name = payload.name;
                state._id = payload._id;
            })
            .addCase(registration.rejected, (state) => {
                state.loadingStatus = FetchStatus.REJECTED;
            })
            .addCase(login.pending, (state) => {
                state.loadingStatus = FetchStatus.PENDING;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loadingStatus = FetchStatus.FULFILLED;
                state.name = payload.name;
                state._id = payload._id;
            })
            .addCase(login.rejected, (state) => {
                state.loadingStatus = FetchStatus.REJECTED;
            })
            .addCase(auth.pending, (state) => {
                state.loadingStatus = FetchStatus.PENDING;
            })
            .addCase(auth.fulfilled, (state, { payload }) => {
                state.loadingStatus = FetchStatus.FULFILLED;
                state.name = payload.name;
                state._id = payload._id;
            })
            .addCase(auth.rejected, (state) => {
                state.loadingStatus = FetchStatus.REJECTED;
            })
            .addCase(logout.fulfilled, (state) => {
                state._id = null;
                state.name = null;
                state.loadingStatus = FetchStatus.FULFILLED;
            }),
});

export default authSlice.reducer;
