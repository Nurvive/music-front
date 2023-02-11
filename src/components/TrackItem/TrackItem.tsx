import React, { useCallback } from 'react';
import { Track } from '~/types';
import { Card, Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const TrackItem = ({ track, isActive = false }: { track: Track; isActive?: boolean }) => {
    const { push } = useRouter();

    const handleTrackClick = useCallback(() => {
        void push(`tracks/${track._id}`);
    }, [push, track._id]);

    return (
        <Card >
            <IconButton>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
            <Image src={track.picture} alt="track picture" width={60} height={60} />
            <Grid container>
                <div onClick={handleTrackClick}>{track.name}</div>
                <div>{track.artist}</div>
            </Grid>
            {isActive && <div>time</div>}
        </Card>
    );
};
