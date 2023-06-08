import { Stack } from '@mui/system';
import { AuthPages } from '~/types';
import { useState } from 'react';
import { AuthFormFacade } from '~/components/AuthFormFacade';

const Auth = () => {
    const [page, setPage] = useState(AuthPages.SIGN_IN);

    return (
        <Stack alignItems="center" justifyContent="center">
            <AuthFormFacade page={page} setPage={setPage} />
        </Stack>
    );
};

export default Auth;
