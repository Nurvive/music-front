import { MainLayout } from '~/layouts/MainLayout';
import { Stack } from '@mui/system';
import { AuthPages } from '~/types';
import { useState } from 'react';
import { AuthFormFacade } from '~/components/AuthFormFacade';

const Auth = () => {
    const [page, setPage] = useState(AuthPages.SIGN_IN);

    return (
        <MainLayout>
            <Stack alignItems="center" justifyContent="center">
                <AuthFormFacade page={page} setPage={setPage} />
            </Stack>
        </MainLayout>
    );
};

export default Auth;
