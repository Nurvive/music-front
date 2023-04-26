import { MainLayout } from '~/layouts/MainLayout';
import { CreateSteps } from '~/components/CreateSteps';
import { Button, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
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
    const dispatch = useAppDispatch();
    const { push } = useRouter();
    const { name, text, artist } = useAppSelector((state) => state.createTrack);

    const handleStepNext = () => {
        if (currentStep !== CreatingSteps.TRACK) {
            setCurrentStep((prevState) => prevState + 1);
        } else if (picture && audio) {
            dispatch(
                createTrack({
                    picture,
                    audio,
                    name,
                    text,
                    artist,
                }),
            ).then(() => push(LINK_TRACKS));
        }
    };

    const handleStepBack = useCallback(() => {
        setCurrentStep((prevState) => prevState - 1);
    }, []);

    const handleFileSet = useCallback(() => {
        if (currentStep === CreatingSteps.COVER) return setPicture;
        if (currentStep === CreatingSteps.TRACK) return setAudio;
    }, [currentStep]);

    const disabledNext =
        currentStep === CreatingSteps.INFO
            ? !name || !artist
            : currentStep === CreatingSteps.COVER
            ? !picture
            : CreatingSteps.TRACK
            ? !audio
            : false;

    return (
        <MainLayout>
            <Stack paddingY={2} height="100%" direction="column" justifyContent="space-between" alignItems="center">
                <CreateSteps currentStep={currentStep}>
                    <CreateFacade setFile={handleFileSet()} currentStep={currentStep} />
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
        </MainLayout>
    );
};

export default Create;
