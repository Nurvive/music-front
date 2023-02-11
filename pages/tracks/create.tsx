import { MainLayout } from '~/layouts/MainLayout';
import { CreateSteps } from '~/components/CreateSteps';
import { Button, Grid } from '@mui/material';
import { useCallback, useState } from 'react';
import { CreatingSteps } from '~/components/CreateSteps/CreateSteps.types';

const Create = () => {
    const [currentStep, setCurrentStep] = useState(CreatingSteps.INFO);

    const handleStepNext = useCallback(() => {
        setCurrentStep((prevState) => prevState + 1);
    }, []);

    const handleStepBack = useCallback(() => {
        setCurrentStep((prevState) => prevState - 1);
    }, []);

    return (
        <MainLayout>
            <CreateSteps currentStep={currentStep}>
                <h1>Загрузка трека</h1>
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
