import React, { useState } from 'react';
import { MainLayout } from '~/layouts/MainLayout';
import { Box, Card, Grid } from '@mui/material';
import Link from 'next/link';
import { Track } from '~/types';
import { TrackList } from '~/components/TrackList';

export const Tracks = () => {
    const tracks: Track[] = [{
        _id: '1',
        name: 'name',
        artist: 'artist',
        text: 'texttext text',
        listens: 2,
        picture: '',
        audio: ''
    },{
        _id: '2',
        name: '2name2',
        artist: 'XxartistxX',
        text: 'texttext texttext vtexttext text',
        listens: 10,
        picture: '',
        audio: ''
    }];
    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card>
                    <Box p={3}>
                        <Grid container justifyContent="space-between">
                            <h1>Список треков</h1>
                            <Link href='/create'>Загрузить</Link>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Tracks;
