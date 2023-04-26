import React from 'react';
import { Navbar } from '~/components/Navbar';
import { Container } from '@mui/material';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Container sx={{ height: '100%' }}>{children}</Container>
        </div>
    );
};
