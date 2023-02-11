import React from 'react';
import { Track } from '~/types';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { TrackItem } from '~/components/TrackItem';

export const TrackList = ({ tracks }: { tracks: Track[] }) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {tracks.map((track) => (
                    <TrackItem track={track} key={track._id} />
                ))}
            </Box>
        </Grid>
    );
};
