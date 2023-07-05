import { useAppDispatch, useAppSelector, useIsAuth } from '~/hooks';
import { AddToPlaylistProps } from './AddToPlaylist.types';
import { Add } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useId, useState, MouseEvent, useCallback } from 'react';
import { ListSubheader, Popover } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { updatePlaylist } from '~/store/playlist';
import { Track } from '~/types';

export const AddToPlaylist = ({ track }: AddToPlaylistProps) => {
    const { isAuth } = useIsAuth();
    const id = useId();
    const dispatch = useAppDispatch();

    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const { playlists } = useAppSelector((state) => state.playlist);

    const handleClickAdd = useCallback((event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleClickPlaylist = useCallback(
        (playlistId: string, tracks: Track[]) => {
            dispatch(updatePlaylist({ _id: playlistId, tracks: [track, ...tracks] }));
            handleClose()
        },
        [dispatch, track, handleClose],
    );

    const isOpen = Boolean(anchorEl);

    return isAuth ? (
        <>
            <Box
                onClick={handleClickAdd}
                aria-describedby={id}
                sx={{ marginInlineStart: '16px', display: 'flex', cursor: 'pointer', alignItems: 'center' }}>
                <Add />
            </Box>
            <Popover
                id={id}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>
                <List>
                    <ListSubheader>Добавить в плейлист</ListSubheader>
                    {playlists.map((playlist) => (
                        <ListItem onClick={() => handleClickPlaylist(playlist._id, playlist.tracks)} key={playlist._id}>
                            <ListItemButton>
                                <ListItemText primary={playlist.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </>
    ) : null;
};
