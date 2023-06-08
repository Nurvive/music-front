import React, { useEffect } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector, useInput } from '~/hooks';
import { setCreateTrackPayload } from '~/store/createTrack';

export const CreateForm = () => {
    const { name: nameInitial, artist: artistInitial } = useAppSelector((state) => state.createTrack);

    const name = useInput(nameInitial);
    const artist = useInput(artistInitial);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            setCreateTrackPayload({
                name: name.value,
                artist: artist.value,
            }),
        );
    }, [artist.value, dispatch, name.value]);

    return (
        <Grid gap={1.5} container direction="column">
            <Typography variant="h5" gutterBottom>Основная информация</Typography>
            <TextField {...name} label="Название трека" />
            <TextField {...artist} label="Имя исполнителя" />
        </Grid>
    );
};
