import { createSlice } from '@reduxjs/toolkit';
import { auth, AUTH_SLICE_NAME, registration } from '~/store/auth/auth.actions';
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
            }),
});

export default authSlice.reducer;
