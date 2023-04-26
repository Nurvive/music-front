import { Track } from '~/types';

export type PlayerState = {
    active: Track | null;
    volume: number;
    duration: number;
    currentTime: number;
    pause: boolean;
};
