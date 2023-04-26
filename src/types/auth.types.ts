import { FetchStatus } from '~/types/main.types';

export interface RegistrationResponse {
    _id: string;
    name: string;
}

export interface LoginResponse {
    _id: string;
    name: string;
}

export interface UserAuth {
    name: string;
    password: string;
}

export interface AuthState {
    _id: string | null;
    name: string | null;
    loadingStatus: FetchStatus;
}

export enum AuthPages {
    SIGN_IN = 'login',
    SIGN_UP = 'register',
}
