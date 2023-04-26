import React, { useCallback, KeyboardEvent, MouseEvent } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { DRAWER_ANCHOR } from '~/components/Navbar/Navbar.constants';
import { NavbarList } from '~/components/Navbar/NavbarList';
import { Box } from '@mui/system';

export const Navbar = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const toggleDrawer = useCallback(
        (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setDrawerIsOpen(open);
        },
        [],
    );

    return (
        <Box sx={{ padding: 2 }}>
            <Button variant="contained" onClick={toggleDrawer(true)}>
                Меню
            </Button>
            <Drawer anchor={DRAWER_ANCHOR} open={drawerIsOpen} onClose={toggleDrawer(false)}>
                <NavbarList toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};
