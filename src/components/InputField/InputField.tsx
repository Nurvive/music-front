import { Field } from 'react-final-form';
import { InputFieldProps } from './InputField.types';
import { forwardRef } from 'react';
import { TextField } from '@mui/material';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    return (
        <Field {...props} validate={props.validate}>
            {({ input, meta }) => (
                <TextField error={(meta.touched || meta.visited) && !!meta.error} helperText={(meta.touched || meta.visited) && meta.error} {...input} {...props} ref={ref} />
            )}
        </Field>
    );
});

InputField.displayName = 'InputField';
