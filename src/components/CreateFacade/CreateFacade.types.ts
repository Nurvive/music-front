import { CreatingSteps } from '~/components/CreateSteps/CreateSteps.types';

export interface CreateFacadeProps {
    currentStep: CreatingSteps;
    setFile?: (file: File) => void;
    fileName: string;
}
