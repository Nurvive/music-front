import React, { useEffect } from 'react';
import { MainLayout } from '~/layouts/MainLayout';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { getList } from '~/api';
import { NextPage } from 'next';
import { Track } from '~/types';
import { setTracks } from '~/store/track';
import { LINK_CREATE } from '~/constants';
import { TrackItem } from '~/components/TrackItem';
import List from '@mui/material/List';

interface TracksPage {
    initialTracks: Track[];
}

const Tracks: NextPage<TracksPage> = ({ initialTracks = [] }) => {
    const { tracks } = useAppSelector((state) => state.tracks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTracks(initialTracks));
    }, [dispatch, initialTracks]);

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card sx={{ width: '100%' }}>
                    <CardHeader subheader={<Link href={LINK_CREATE}>Загрузить</Link>} title="Список треков" />
                    <CardContent>
                        <List>
                            {tracks.map((track) => (
                                <TrackItem track={track} key={track._id} />
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </MainLayout>
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
        console.error(e);
        return {
            props: { initialTracks: [] },
        };
    }
};
