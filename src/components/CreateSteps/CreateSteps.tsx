import React from 'react';
import { CreateStepsProps } from '~/components/CreateSteps/CreateSteps.types';
import { Card, CardContent, Grid, Step, StepLabel, Stepper } from '@mui/material';
import { STEPS_TEXT } from '~/components/CreateSteps/CreateSteps.constants';
import { Stack } from '@mui/system';

export const CreateSteps = ({ currentStep, children }: CreateStepsProps) => {
    return (
        <Stack spacing={3} direction="column" alignItems="center" width="100%">
            <Stepper sx={{ width: '100%' }} activeStep={currentStep}>
                {STEPS_TEXT.map((step, index) => (
                    <Step key={step} completed={currentStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid container justifyContent="center">
                <Card>
                    <CardContent>{children}</CardContent>
                </Card>
            </Grid>
        </Stack>
    );
};
