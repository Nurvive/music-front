import React from 'react';
import { CreatingSteps } from '~/components/CreateSteps/CreateSteps.types';
import { CreateForm } from '~/components/CreateForm';
import { FileUpload } from '~/components/FileUpload';
import { Button } from '@mui/material';
import { CreateFacadeProps } from './CreateFacade.types';

export const CreateFacade = ({ currentStep, setFile, fileName }: CreateFacadeProps) => {
    switch (currentStep) {
        case CreatingSteps.INFO:
            return <CreateForm />;
        case CreatingSteps.COVER:
            return (
                <FileUpload fileName={fileName} setFile={setFile} accept="image/*">
                    <Button>Загрузить обложку</Button>
                </FileUpload>
            );
        case CreatingSteps.TRACK:
            return (
                <FileUpload fileName={fileName} setFile={setFile} accept="audio/*">
                    <Button>Загрузить трек</Button>
                </FileUpload>
            );
        default:
            return null;
    }
};
