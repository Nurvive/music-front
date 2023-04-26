import { AuthPages } from '~/types';
import { Dispatch } from 'react';

export interface AuthFormFacadeProps {
    page: AuthPages;
    setPage: Dispatch<AuthPages>;
}
