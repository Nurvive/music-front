import { ReactNode } from 'react';

export enum CreatingSteps {
    INFO ,
    COVER,
    TRACK
}

export type CreateStepsProps = {
    currentStep: CreatingSteps;
    children: ReactNode;
};
