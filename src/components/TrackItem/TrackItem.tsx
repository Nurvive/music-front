import React, { useCallback, MouseEvent } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { setActiveTrack, setPause, setPlay } from '~/store/player';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { API_URL } from '~/constants';
import ListItem from '@mui/material/ListItem';
import { TrackName } from '~/components/TrackName';
import { TrackItemProps } from '~/components/TrackItem/TrackItem.types';
import { secondsToMinutes } from '~/utils/secondsToMinutes';
import { AddToPlaylist } from '~/components/AddToPlaylist';

export const TrackItem = ({ track }: TrackItemProps) => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const { pause, active, currentTime, duration } = useAppSelector((state) => state.player);

    const isActive = track._id === active?._id && !pause;

    const handleTrackClick = useCallback(() => {
        void push(`tracks/${track._id}`);
    }, [push, track._id]);

    const handlePlayClick = useCallback(
        (e: MouseEvent) => {
            e.stopPropagation();

            if (isActive) {
                dispatch(setPause());
            } else {
                if (track._id !== active?._id) {
                    dispatch(setActiveTrack(track));
                }
                dispatch(setPlay());
            }
        },
        [dispatch, isActive, track, active?._id],
    );

    return (
        <ListItem sx={{ gap: '8px' }} divider>
            <IconButton onClick={handlePlayClick}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
            <Image src={`${API_URL}/${track.picture}`} quality={100} alt="track picture" width={60} height={60} />
            <Grid container>
                <TrackName onClick={handleTrackClick} name={track.name} artist={track.artist} />
                <AddToPlaylist trackId={track._id} />
            </Grid>
            <div>
                {isActive && `${secondsToMinutes(currentTime)}`}
                {/*{secondsToMinutes(duration)}*/}
            </div>
        </ListItem>
    );
};
