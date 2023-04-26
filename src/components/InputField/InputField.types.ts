import { TextFieldProps } from '@mui/material';

export interface InputFieldProps extends Omit<TextFieldProps, 'value' | 'defaultValue'> {
    name: string;
    validate?: (value: string) => string | undefined;
}
