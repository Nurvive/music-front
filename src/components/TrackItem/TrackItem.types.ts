import { Track } from '~/types';
import { Playlist } from '~/types/playlist.types';

export interface TrackItemProps {
    track: Track;
    isActive?: boolean;
    playlist?: Playlist;
}
