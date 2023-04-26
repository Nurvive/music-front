import React, { useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector, useInput } from '~/hooks';
import { setCreateTrackPayload } from '~/store/createTrack';

export const CreateForm = () => {
    const { name: nameInitial, text: textInitial, artist: artistInitial } = useAppSelector((state) => state.createTrack);

    const name = useInput(nameInitial);
    const artist = useInput(artistInitial);
    const text = useInput(textInitial);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            setCreateTrackPayload({
                name: name.value,
                artist: artist.value,
                text: text.value,
            }),
        );
    }, [artist.value, dispatch, name.value, text.value]);

    return (
        <Grid gap={1.5} container direction="column">
            <TextField {...name} label="Название трека" />
            <TextField {...artist} label="Имя исплнителя" />
            <TextField {...text} multiline rows={3} label="Текст трека" />
        </Grid>
    );
};
