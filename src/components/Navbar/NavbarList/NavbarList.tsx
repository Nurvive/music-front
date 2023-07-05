import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { AUTH_LIST_ITEMS, LIST_ITEMS } from '~/components/Navbar/Navbar.constants';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { NavbarListProps } from '~/components/Navbar/NavbarList/NavbarList.types';
import { useAppDispatch, useIsAuth } from '~/hooks';
import { logout } from '~/store/auth';
import { useRouter } from 'next/router';
import { LINK_TRACKS } from '~/constants';
import { useCallback } from 'react';

export const NavbarList = ({ toggleDrawer }: NavbarListProps) => {
    const { isAuth } = useIsAuth();
    const dispatch = useAppDispatch();
    const { push } = useRouter();

    const handleLogoutClick = useCallback(() => {
        dispatch(logout()).then(() => push(LINK_TRACKS));
    }, [dispatch, push]);

    return (
        <Box
            sx={{ width: { xs: '250px', sm: 'revert' } }}
            role="presentation"
            onClick={toggleDrawer?.(false)}
            onKeyDown={toggleDrawer?.(false)}>
            <List
                sx={{
                    display: { xs: 'block', sm: 'flex' },
                }}>
                <>
                    {(isAuth ? AUTH_LIST_ITEMS : LIST_ITEMS).map(({ name, href }, index) => (
                        <ListItem key={name} disablePadding>
                            <Link style={{ width: '100%' }} href={href}>
                                <ListItemButton sx={{ width: '100%' }}>
                                    <ListItemIcon
                                        sx={{
                                            display: { xs: 'block', sm: 'none' },
                                        }}>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText sx={{ color: { xs: 'black', sm: '#ececec' } }} primary={name} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                    {isAuth && (
                        <ListItem onClick={handleLogoutClick} disablePadding>
                            <ListItemButton sx={{ width: '100%' }}>
                                <ListItemIcon
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                    }}></ListItemIcon>
                                <ListItemText sx={{ color: { xs: 'black', sm: '#ececec' } }} primary="Выйти" />
                            </ListItemButton>
                        </ListItem>
                    )}
                </>
            </List>
        </Box>
    );
};
