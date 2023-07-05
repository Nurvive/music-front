import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse, RegistrationResponse, User, UserAuth } from '~/types';
import { authenticate, out, register, signIn } from '~/api/auth.http';
import { AxiosError } from 'axios';

export const AUTH_SLICE_NAME = 'auth';

export const registration = createAsyncThunk<RegistrationResponse, UserAuth>(
    `${AUTH_SLICE_NAME}/registration`,
    async (values, { rejectWithValue }) => {
        try {
            return await register(values);
        } catch (e) {
            return rejectWithValue(JSON.stringify((e as AxiosError).response));
        }
    },
);

export const login = createAsyncThunk<LoginResponse, UserAuth>(
    `${AUTH_SLICE_NAME}/login`,
    async (values, { rejectWithValue }) => {
        try {
            return await signIn(values);
        } catch (e) {
            return rejectWithValue(JSON.stringify((e as AxiosError).response));
        }
    },
);

export const logout = createAsyncThunk(`${AUTH_SLICE_NAME}/logout`, async () => {
    await out();
});

export const auth = createAsyncThunk<User, void>(
    `${AUTH_SLICE_NAME}/auth`, async (_, { rejectWithValue }) => {
    try {
        return await authenticate();
    } catch (e) {
        return rejectWithValue(JSON.stringify((e as AxiosError).response));
    }
});
