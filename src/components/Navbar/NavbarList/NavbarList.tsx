import React, { KeyboardEvent, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { LIST_ITEMS } from '~/components/Navbar/Navbar.constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

export const NavbarList = ({
    toggleDrawer,
}: {
    toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}) => {
    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {LIST_ITEMS.map(({ name, href }, index) => (
                    <ListItem key={name} disablePadding>
                        <Link href={href}>
                            <ListItemButton>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
