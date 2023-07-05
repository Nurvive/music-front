import React, { useCallback, KeyboardEvent, MouseEvent } from 'react';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { DRAWER_ANCHOR } from '~/components/Navbar/Navbar.constants';
import { NavbarList } from '~/components/Navbar/NavbarList';
import { Box } from '@mui/system';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { LINK_MAIN } from '~/constants';

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
        <Box sx={{ padding: 6 }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <Link style={{ color: 'inherit' }} href={LINK_MAIN}>
                            IoLine Music
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NavbarList />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    display: { xs: 'block', sm: 'none' },
                }}
                anchor={DRAWER_ANCHOR}
                open={drawerIsOpen}
                onClose={toggleDrawer(false)}>
                <NavbarList toggleDrawer={toggleDrawer} />
            </Drawer>
        </Box>
    );
};
