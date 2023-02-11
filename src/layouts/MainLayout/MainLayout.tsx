import React from 'react';
import { Navbar } from '~/components/Navbar';
import { Container } from '@mui/material';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
        </>
    );
};
