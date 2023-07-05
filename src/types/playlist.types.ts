import { Track } from '~/types/track.types';
import { FetchStatus } from '~/types/main.types';

export interface Playlist {
    _id: string;
    name: string;
    author: string;
    tracks: Track[];
}

export interface UpdatePlaylist {
    _id: string;
    name?: string;
    tracks?: Track[];
}

export interface PlaylistState {
    loadingStatus: FetchStatus;
    playlists: Playlist[];
    playlist: Playlist | null;
}
