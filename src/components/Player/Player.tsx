import React, { ChangeEvent, memo, useCallback, useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { TrackProgress } from '~/components/TrackProgress';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setCurrentTime, setDuration, setPause, setPlay, setVolume } from '~/store/player';
import styles from './Player.module.scss';
import { API_URL } from '~/constants';

export const Player = memo(() => {
    const { pause, volume, duration, active, currentTime } = useAppSelector((state) => state.player);
    const dispatch = useAppDispatch();
    const audio = useRef<HTMLAudioElement>();

    const handleInitAudio = useCallback(() => {
        if (active && audio.current) {
            audio.current.src = `${API_URL}/${active.audio}`;
            audio.current.volume = volume / 100;
            audio.current.onloadedmetadata = () => {
                if (audio.current) {
                    dispatch(setDuration(Math.ceil(audio.current.duration)));
                }
            };
            audio.current.ontimeupdate = () => {
                if (audio.current) {
                    dispatch(setCurrentTime(Math.ceil(audio.current.currentTime)));
                }
            };
            if (!pause) {
                dispatch(setPlay());
                void audio.current.play();
            }
        }
    }, [active, dispatch, pause]); // Без зависимостей volume

    const handlePlayTrack = useCallback(() => {
        if (!active || !audio.current) return;
        if (pause) {
            dispatch(setPlay());
            void audio.current.play();
        } else {
            dispatch(setPause());
            audio.current.pause();
        }
    }, [active, dispatch, pause]);

    useEffect(() => {
        if (!audio.current) {
            audio.current = new Audio();
        } else {
            handleInitAudio();
        }
    }, [handleInitAudio]);

    const handleVolumeChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (audio.current) {
                dispatch(setVolume(Number(e.target.value)));
                audio.current.volume = Number(e.target.value) / 100;
            }
        },
        [dispatch],
    );

    const handleCurrentTimeChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (audio.current) {
                dispatch(setCurrentTime(Number(e.target.value)));
                audio.current.currentTime = Number(e.target.value);
            }
        },
        [dispatch],
    );

    return (
        <div className={styles.player}>
            <div className={styles.player__inner}>
                <IconButton onClick={handlePlayTrack}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
                <div>
                    <div>{active?.name}</div>
                    <div>{active?.artist}</div>
                </div>
                <TrackProgress
                    isTime
                    currentLength={currentTime}
                    fullLength={duration}
                    onChange={handleCurrentTimeChange}
                />
            </div>
            <div className={styles.player__inner}>
                <VolumeUp />
                <TrackProgress currentLength={volume} fullLength={100} onChange={handleVolumeChange} />
            </div>
        </div>
    );
});

Player.displayName = 'Player';
