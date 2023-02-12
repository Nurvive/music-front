import { MainLayout } from '~/layouts/MainLayout';
import { CreateSteps } from '~/components/CreateSteps';
import { Button, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import { CreatingSteps } from '~/components/CreateSteps/CreateSteps.types';
import { CreateFacade } from '~/components/CreateFacade';

const Create = () => {
    const [currentStep, setCurrentStep] = useState(CreatingSteps.INFO);
    const [picture, setPicture] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);

    const handleStepNext = useCallback(() => {
        setCurrentStep((prevState) => prevState + 1);
    }, []);

    const handleStepBack = useCallback(() => {
        setCurrentStep((prevState) => prevState - 1);
    }, []);

    const handleFileSet = useCallback(() => {
        if (currentStep === CreatingSteps.COVER) return setPicture;
        if (currentStep === CreatingSteps.TRACK) return setAudio;
    }, [currentStep]);

    return (
        <MainLayout>
            <CreateSteps currentStep={currentStep}>
                <CreateFacade setFile={handleFileSet} currentStep={currentStep} />
            </CreateSteps>
            <Grid container justifyContent="space-between">
                <Button disabled={currentStep === CreatingSteps.INFO} onClick={handleStepBack}>
                    Назад
                </Button>
                <Button onClick={handleStepNext}>Вперед</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
