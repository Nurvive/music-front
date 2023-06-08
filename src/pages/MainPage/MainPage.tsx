import { Card, CardContent, CardHeader, Fab, Grid } from '@mui/material';
import { Add } from '@mui/icons-material';
import List from '@mui/material/List';
import { PlaylistItem } from '~/components/PlaylistItem';
import React, { useCallback, useEffect, useState } from 'react';
import { NameDialog } from '~/pages/MainPage/NameDialog';
import type { CreatePlaylistFormValues } from './NameDialog/NameDialog.types';
import { useAppDispatch, useAppSelector, useIsAuth } from '~/hooks';
import { createPlaylist, getPlaylistList } from '~/store/playlist';
import { useRouter } from 'next/router';
import { LINK_AUTH, LINK_TRACKS } from '~/constants';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const { push } = useRouter();
    const { isAuth } = useIsAuth();

    const { playlists } = useAppSelector((state) => state.playlist);

    const handleOpenDialog = useCallback(() => {
        setOpen(true);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setOpen(false);
    }, []);

    const handleCreatePlaylist = useCallback(
        ({ playlistName }: CreatePlaylistFormValues) => {
            dispatch(createPlaylist(playlistName));
            handleCloseDialog();
        },
        [dispatch, handleCloseDialog],
    );

    useEffect(() => {
        dispatch(getPlaylistList());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            void push(LINK_AUTH);
        }
    }, [push, isAuth]);

    return (
        <>
            <Grid container justifyContent="center">
                <Card sx={{ width: '100%' }}>
                    <CardHeader
                        action={
                            <Fab onClick={handleOpenDialog} size="small" color="primary" aria-label="add">
                                <Add />
                            </Fab>
                        }
                        title="Плейлисты"
                    />
                    <CardContent>
                        <List sx={{ display: 'flex' }}>
                            {playlists?.map((playlist) => (
                                <PlaylistItem playlist={playlist} key={playlist._id} />
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <NameDialog onClose={handleCloseDialog} onSubmit={handleCreatePlaylist} isOpen={open} />
        </>
    );
};
