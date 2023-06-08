import { Navbar } from '~/components/Navbar';
import { Container } from '@mui/material';
import styles from './MainLayout.module.scss';
import { MainLayoutProps } from './MainLayout.types';
import { useEffect } from 'react';
import { useAppDispatch } from '~/hooks';
import { auth } from '~/store/auth';

export const MainLayout = ({ children }: MainLayoutProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <Navbar />
            <Container sx={{ height: '100%' }}>{children}</Container>
        </div>
    );
};
