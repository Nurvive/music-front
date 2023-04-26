import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse, RegistrationResponse, UserAuth } from '~/types';
import { register, signIn } from '~/api/auth.http';
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
