import React from 'react';
import { CreateStepsProps } from '~/components/CreateSteps/CreateSteps.types';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import { STEPS_TEXT } from '~/components/CreateSteps/CreateSteps.constants';

export const CreateSteps = ({ currentStep, children }: CreateStepsProps) => {
    return (
        <Container>
            <Stepper activeStep={currentStep}>
                {STEPS_TEXT.map((step, index) => (
                    <Step key={step} completed={currentStep > index}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid container justifyContent="center">
                <Card>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};
