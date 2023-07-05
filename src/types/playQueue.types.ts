import { Track } from '~/types/track.types';

export interface PlayQueueState {
    queue: Track[] | null;
    activePlaylistId: string | null;
    activeTrack: Track | null;
    prevTrack: Track | null;
    nextTrack: Track | null;
}

export interface SetQueue {
    queue: Track[];
    activePlaylistId: string;
    activeTrack: Track;
}

export interface UpdatePlayQueue {
    activeTrack: Track;
}

export interface SetNewTrackAction {
    activeTrack: Track | null;
    prevTrack: Track | null;
    nextTrack: Track | null;
}
