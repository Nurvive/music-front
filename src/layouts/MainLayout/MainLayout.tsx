import { Navbar } from '~/components/Navbar';
import { Container } from '@mui/material';
import styles from './MainLayout.module.scss';
import { MainLayoutProps } from './MainLayout.types';
import { useEffect } from 'react';
import { useAppDispatch, useIsAuth } from '~/hooks';
import { auth } from '~/store/auth';
import { getPlaylistList } from '~/store/playlist';

export const MainLayout = ({ children }: MainLayoutProps) => {
    const dispatch = useAppDispatch();
    const { isAuth } = useIsAuth();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

    useEffect(() => {
        if (isAuth) {
            dispatch(getPlaylistList());
        }
    }, [dispatch, isAuth]);

    return (
        <div className={styles.container}>
            <Navbar />
            <Container sx={{ height: '100%' }}>{children}</Container>
        </div>
    );
};
