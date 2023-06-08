import React from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import Image from 'next/image';

export const TrackPage = () => {
    const track = {
        _id: '2',
        name: '2name2',
        artist: 'XxartistxX',
        text: 'texttext texttext vtexttext text',
        listens: 10,
        picture: '',
        audio: '',
    };
    return (
        <>
            <Link href={'/tracks'}></Link>
            <Grid container>
                <Image src={track.picture} alt={'track picture'} width={200} height={200}/>
                <div>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <p>{track.listens}</p>
                </div>
                <p>{track.text}</p>
            </Grid>
        </>
    );
};

export default TrackPage;
