import { useAppDispatch, useAppSelector } from '~/hooks';
import { TrackItem } from '~/components/TrackItem';
import React, { useEffect } from 'react';
import { getPlaylist } from '~/store/playlist';
import { useRouter } from 'next/router';
import { Card, CardContent, CardHeader, Grid, LinearProgress } from '@mui/material';
import { FetchStatus } from '~/types';

export const PlaylistPage = () => {
    const dispatch = useAppDispatch();
    const { query } = useRouter();

    const { playlist, loadingStatus } = useAppSelector((state) => state.playlist);

    useEffect(() => {
        if (typeof query.id === 'string') {
            dispatch(getPlaylist(query.id));
        }
    }, [dispatch, query.id]);

    return (
        <Grid container justifyContent="center">
            <Card sx={{ width: '100%' }}>
                <CardHeader title={playlist?.name} />
                {loadingStatus !== FetchStatus.FULFILLED ? (
                    <LinearProgress />
                ) : (
                    <CardContent>
                        {playlist?.tracks.map((track) => (
                            <TrackItem playlist={playlist} track={track} key={track._id} />
                        ))}
                    </CardContent>
                )}
            </Card>
        </Grid>
    );
};

export default PlaylistPage;
