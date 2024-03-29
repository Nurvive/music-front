import { FetchStatus } from '~/types';

export interface Track {
    _id: string;
    name: string;
    artist: string;
    listens: number;
    picture: string;
    audio: string;
}

export interface TrackState {
    tracks: Track[];
    loadingStatus: FetchStatus;
}

export interface CreateTrackPayload {
    artist: string;
    name: string;
}

export interface CreateTrack extends CreateTrackPayload {
    audio: File | Blob;
    picture: File | Blob;
}
