import { Card, CardContent, CardHeader, Fab, Grid, LinearProgress } from '@mui/material';
import { Add } from '@mui/icons-material';
import List from '@mui/material/List';
import { PlaylistItem } from '~/components/PlaylistItem';
import { useCallback, useState } from 'react';
import { NameDialog } from '~/pages/MainPage/NameDialog';
import type { CreatePlaylistFormValues } from './NameDialog/NameDialog.types';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { createPlaylist } from '~/store/playlist';
import { FetchStatus } from '~/types';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    const { playlists, loadingStatus } = useAppSelector((state) => state.playlist);

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

    return (
        <>
            <Grid container justifyContent="center">
                <Card sx={{ width: '100%', minHeight: '60vh' }}>
                    <CardHeader
                        action={
                            <Fab onClick={handleOpenDialog} size="small" color="primary" aria-label="add">
                                <Add />
                            </Fab>
                        }
                        title="Плейлисты"
                    />
                    <CardContent>
                        {loadingStatus !== FetchStatus.FULFILLED ? (
                            <LinearProgress />
                        ) : (
                            <List sx={{ display: 'flex' }}>
                                {playlists?.map((playlist) => (
                                    <PlaylistItem playlist={playlist} key={playlist._id} />
                                ))}
                            </List>
                        )}
                    </CardContent>
                </Card>
            </Grid>
            <NameDialog onClose={handleCloseDialog} onSubmit={handleCreatePlaylist} isOpen={open} />
        </>
    );
};
