import { AuthFormFacadeProps } from '~/components/AuthFormFacade/AuthFormFacade.types';
import { AuthPages } from '~/types';
import { LoginForm } from '~/components/LoginForm';
import { RegisterForm } from '~/components/RegisterForm';
import { useCallback } from 'react';

export const AuthFormFacade = ({ page, setPage }: AuthFormFacadeProps) => {
    const handlePickLogin = useCallback(() => {
        setPage(AuthPages.SIGN_IN);
    }, [setPage]);

    const handlePickRegister = useCallback(() => {
        setPage(AuthPages.SIGN_UP);
    }, [setPage]);

    switch (page) {
        case AuthPages.SIGN_IN:
            return <LoginForm onChangePage={handlePickRegister} />;
        case AuthPages.SIGN_UP:
            return <RegisterForm onChangePage={handlePickLogin} />;
        default:
            return null;
    }
};
