import { Track } from '~/types/track.types';

export type PlayerState = {
    active: Track | null;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
};

export enum PlayerActions {
    PLAY = 'play',
    PAUSE = 'pause',
    SET_ACTIVE = 'setActive',
    SET_DURATION = 'setDuration',
    SET_CURRENT_TIME = 'setCurrentTime',
    SET_VOLUME = 'setVolume',
}

export interface PlayAction {
    type: PlayerActions.PLAY;
}

export interface PauseAction {
    type: PlayerActions.PAUSE;
}

export interface SetActiveAction {
    type: PlayerActions.SET_ACTIVE;
    payload: Track;
}

export interface SetDurationAction {
    type: PlayerActions.SET_DURATION;
    payload: number;
}

export interface SetVolumeAction {
    type: PlayerActions.SET_VOLUME;
    payload: number;
}

export interface SetCurrentTimeAction {
    type: PlayerActions.SET_CURRENT_TIME;
    payload: number;
}

export type PlayerAction =
    | PlayAction
    | PauseAction
    | SetDurationAction
    | SetVolumeAction
    | SetCurrentTimeAction
    | SetActiveAction;
