import { CreateSteps } from '~/components/CreateSteps';
import { Button, Grid } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { CreatingSteps } from '~/components/CreateSteps/CreateSteps.types';
import { CreateFacade } from '~/components/CreateFacade';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { createTrack } from '~/store/createTrack/createTrack.action';
import { useRouter } from 'next/router';
import { LINK_TRACKS } from '~/constants';
import { Stack } from '@mui/system';

const Create = () => {
    const [currentStep, setCurrentStep] = useState(CreatingSteps.INFO);
    const [picture, setPicture] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const dispatch = useAppDispatch();
    const { push } = useRouter();
    const { name, artist } = useAppSelector((state) => state.createTrack);

    const handleStepNext = () => {
        if (currentStep !== CreatingSteps.TRACK) {
            setCurrentStep((prevState) => prevState + 1);
            setFileName('');
        } else if (picture && audio) {
            dispatch(
                createTrack({
                    picture,
                    audio,
                    name,
                    artist,
                }),
            ).then(() => push(LINK_TRACKS));
        }
    };

    const handleStepBack = useCallback(() => {
        setCurrentStep((prevState) => prevState - 1);
    }, []);

    const handleFileSet = useCallback(
        (file: File) => {
            if (currentStep === CreatingSteps.COVER) {
                setPicture(file);
            }
            if (currentStep === CreatingSteps.TRACK) {
                setAudio(file);
            }
        },
        [currentStep],
    );

    useEffect(() => {
        if (currentStep === CreatingSteps.COVER) {
            setFileName(picture?.name ?? '');
        }
        if (currentStep === CreatingSteps.TRACK) {
            setFileName(audio?.name ?? '');
        }
    }, [audio?.name, currentStep, picture?.name]);

    const disabledNext =
        currentStep === CreatingSteps.INFO
            ? !name || !artist
            : currentStep === CreatingSteps.COVER
            ? !picture
            : CreatingSteps.TRACK
            ? !audio
            : false;

    return (
        <Stack paddingY={2} height="100%" direction="column" justifyContent="space-between" alignItems="center">
            <CreateSteps currentStep={currentStep}>
                <CreateFacade fileName={fileName} setFile={handleFileSet} currentStep={currentStep} />
            </CreateSteps>
            <Grid container justifyContent="space-between">
                <Button variant="outlined" disabled={currentStep === CreatingSteps.INFO} onClick={handleStepBack}>
                    Назад
                </Button>
                <Button variant="outlined" disabled={disabledNext} onClick={handleStepNext}>
                    Вперед
                </Button>
            </Grid>
        </Stack>
    );
};

export default Create;
