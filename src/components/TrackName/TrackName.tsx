import { TrackNameProps } from './TrackName.types';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';

export const TrackName = ({ name, artist, onClick }: TrackNameProps) => {
    return (
        <Stack direction="column" gap={1}>
            <Typography onClick={onClick} variant="body1">{name}</Typography>
            <Typography variant="caption">{artist}</Typography>
        </Stack>
    );
};
