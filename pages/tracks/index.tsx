import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, Fab, Grid } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { getList } from '~/api';
import { NextPage } from 'next';
import { Track } from '~/types';
import { setTracks } from '~/store/track';
import { LINK_CREATE } from '~/constants';
import { TrackItem } from '~/components/TrackItem';
import List from '@mui/material/List';
import { Add } from '@mui/icons-material';

interface TracksPage {
    initialTracks: Track[];
}

const DEFAULT_TRACKS: Track[] = [];

const Tracks: NextPage<TracksPage> = ({ initialTracks = DEFAULT_TRACKS }) => {
    const { tracks } = useAppSelector((state) => state.tracks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTracks(initialTracks));
    }, [dispatch, initialTracks]);

    return (
        <Grid sx={{ minHeight: '95%' }} container justifyContent="center">
            <Card sx={{ width: '100%' }}>
                <CardHeader
                    action={
                        <Link style={{ color: 'inherit' }} href={LINK_CREATE}>
                            <Fab size="small" color="primary" aria-label="add">
                                <Add />
                            </Fab>
                        </Link>
                    }
                    title="Список треков"
                />
                <CardContent>
                    <List>
                        {tracks.map((track) => (
                            <TrackItem track={track} key={track._id} />
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Tracks;

export const getServerSideProps = async () => {
    try {
        const tracks = await getList();

        return {
            props: { initialTracks: tracks },
        };
    } catch (e) {
        return {
            props: { initialTracks: [] },
        };
    }
};
