import React, { useCallback, MouseEvent } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
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
import { setPlayQueue, updatePlayQueue } from '~/store/playQueue/playQueue.reducer';

export const TrackItem = ({ track, playlist }: TrackItemProps) => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();

    const { pause, active, currentTime } = useAppSelector((state) => state.player);
    const { activePlaylistId } = useAppSelector((state) => state.playQueue);

    const isActive = track._id === active?._id && !pause;

    const handleTrackClick = useCallback(() => {
        void push(`tracks/${track._id}`);
    }, [push, track._id]);

    const handlePlayClick = useCallback(
        (e: MouseEvent) => {
            e.stopPropagation();

            if (isActive) {
                dispatch(setPause());
                return;
            }

            if (track._id !== active?._id) {
                dispatch(setActiveTrack(track));

                if (playlist && playlist?._id !== activePlaylistId) {
                    dispatch(
                        setPlayQueue({
                            activeTrack: track,
                            activePlaylistId: playlist?._id,
                            queue: playlist?.tracks,
                        }),
                    );
                } else if (playlist) {
                    dispatch(updatePlayQueue({ activeTrack: track }));
                }
            }
            dispatch(setPlay());
        },
        [isActive, track, active?._id, dispatch, playlist, activePlaylistId],
    );

    const handleRemoveFromPlaylist = useCallback((playlistId: string) => {
        console.log(playlistId);
    }, []);

    return (
        <ListItem sx={{ gap: '8px' }} divider>
            <IconButton onClick={handlePlayClick}>{isActive ? <Pause /> : <PlayArrow />}</IconButton>
            <Image src={`${API_URL}/${track.picture}`} quality={100} alt="track picture" width={60} height={60} />
            <Grid container alignItems="center">
                <TrackName onClick={handleTrackClick} name={track.name} artist={track.artist} />
                <AddToPlaylist track={track} />
                {!!playlist && (
                    <Delete
                        onClick={() => handleRemoveFromPlaylist(playlist?._id)}
                        sx={{ cursor: 'pointer', marginLeft: '10px' }}
                    />
                )}
            </Grid>
            <div>
                {isActive && `${secondsToMinutes(currentTime)}`}
                {/*{secondsToMinutes(duration)}*/}
            </div>
        </ListItem>
    );
};
