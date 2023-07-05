import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow, SkipNext, SkipPrevious, VolumeUp } from '@mui/icons-material';
import { TrackProgress } from '~/components/TrackProgress';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { setActiveTrack, setCurrentTime, setDuration, setPause, setPlay, setVolume } from '~/store/player';
import styles from './Player.module.scss';
import { API_URL, LINK_AUTH } from '~/constants';
import { useRouter } from 'next/router';
import { setPrevTrack, setNextTrack } from '~/store/playQueue';

export const Player = () => {
    const dispatch = useAppDispatch();
    const audio = useRef<HTMLAudioElement>();
    const { pathname } = useRouter();

    const { pause, volume, duration, active, currentTime } = useAppSelector((state) => state.player);
    const { nextTrack, prevTrack } = useAppSelector((state) => state.playQueue);

    const handleLoadedMetaData = useCallback(() => {
        if (audio.current) {
            dispatch(setDuration(Math.ceil(audio.current.duration)));
        }
    }, [dispatch]);

    const handleTimeUpdate = useCallback(() => {
        if (audio.current) {
            dispatch(setDuration(Math.ceil(audio.current.duration)));
            dispatch(setCurrentTime(Math.ceil(audio.current.currentTime)));
        }
    }, [dispatch]);

    const handleInitAudio = useCallback(() => {
        if (active && audio.current) {
            audio.current.src = `${API_URL}/${active.audio}`;
            audio.current.volume = volume / 100;
            audio.current.onloadedmetadata = handleLoadedMetaData;
            audio.current.ontimeupdate = handleTimeUpdate;
        }
    }, [active, dispatch, handleLoadedMetaData, handleTimeUpdate]); // Без зависимостей volume

    const handlePlayTrack = useCallback(() => {
        if (!active || !audio.current) return;
        if (pause) {
            dispatch(setPlay());
        } else {
            dispatch(setPause());
        }
    }, [active, dispatch, pause]);

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

    const handleNextTrack = useCallback(() => {
        dispatch(setNextTrack()).unwrap().then((res) => {
            if (res.activeTrack) {
                dispatch(setActiveTrack(res.activeTrack));
            }
        });
    }, [dispatch]);

    const handlePrevTrack = useCallback(() => {
        dispatch(setPrevTrack()).unwrap().then((res) => {
            if (res.activeTrack) {
                dispatch(setActiveTrack(res.activeTrack));
            }
        });
    }, [dispatch]);

    useEffect(() => {
        if (!audio.current) {
            audio.current = new Audio();
        } else {
            handleInitAudio();
        }
    }, [handleInitAudio]);

    useEffect(() => {
        if (!active || !audio.current) return;
        if (pause) {
            audio.current.pause();
        } else {
            void audio.current.play();
        }
    }, [active, pause]);

    return pathname === LINK_AUTH ? null : (
        <div className={styles.player}>
            <div className={styles.player__inner}>
                <IconButton onClick={prevTrack ? handlePrevTrack : undefined} sx={{ opacity: prevTrack ? '1' : '0.5' }}>
                    <SkipPrevious />
                </IconButton>
                <IconButton onClick={handlePlayTrack}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
                <IconButton onClick={nextTrack ? handleNextTrack : undefined} sx={{ opacity: nextTrack ? '1' : '0.5' }}>
                    <SkipNext />
                </IconButton>
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
};
