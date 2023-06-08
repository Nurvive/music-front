import { PlaylistItemProps } from '~/components/PlaylistItem/PlaylistItem.types';
import ListItem from '@mui/material/ListItem';
import { Paper, Typography } from '@mui/material';
import { QueueMusic } from '@mui/icons-material';
import Link from 'next/link';
import { LINK_PLAYLIST } from '~/constants';
import { stringToHexCode } from '~/utils/stringToHexCode';
import styles from './PlaylistItem.module.css';

export const PlaylistItem = ({ playlist }: PlaylistItemProps) => {
    return (
        <ListItem className={styles.listItem} title={playlist.name}>
            <Paper className={styles.paper} sx={{ padding: 2 }} elevation={3}>
                <Link className={styles.link} href={`${LINK_PLAYLIST}/${playlist._id}`}>
                    <QueueMusic sx={{ fontSize: 80, fill: `#${stringToHexCode(playlist.name)}` }} />
                    <Typography fontSize={24} color="black">
                        {playlist.name}
                    </Typography>
                </Link>
            </Paper>
        </ListItem>
    );
};
