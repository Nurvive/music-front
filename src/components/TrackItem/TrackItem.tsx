import React, { useCallback, MouseEvent } from 'react';
import { Track } from '~/types';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setActiveTrack, setPlay } from '~/store/player';
import { useAppDispatch } from '~/hooks';
import { API_URL } from '~/constants';
import ListItem from '@mui/material/ListItem';
import { TrackName } from '~/components/TrackName';

export const TrackItem = ({ track, isActive = false }: { track: Track; isActive?: boolean }) => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const handleTrackClick = useCallback(() => {
        void push(`tracks/${track._id}`);
    }, [push, track._id]);

    const handlePlayClick = useCallback(
        (e: MouseEvent) => {
            e.stopPropagation();
            dispatch(setActiveTrack(track));
            dispatch(setPlay());
        },
        [dispatch, track],
    );

    return (
        <ListItem sx={{ gap: '8px' }} divider>
            <IconButton onClick={handlePlayClick}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
            <Image src={`${API_URL}/${track.picture}`} quality={100} alt="track picture" width={60} height={60} />
            <Grid container>
                <TrackName onClick={handleTrackClick} name={track.name} artist={track.artist} />
            </Grid>
            {isActive && <div>time</div>}
        </ListItem>
    );
};
