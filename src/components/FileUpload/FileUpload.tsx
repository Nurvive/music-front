import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FileUploadProps } from './FileUpload.types';
import { Typography } from '@mui/material';

export const FileUpload = ({ setFile, accept, children, fileName }: FileUploadProps) => {
    const input = useRef<HTMLInputElement>(null);

    const handleUploadClick = useCallback(() => {
        if (input.current) {
            input.current.click();
        }
    }, []);

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                setFile?.(e.target.files[0]);
            }
        },
        [setFile],
    );

    return (
        <div onClick={handleUploadClick}>
            <input hidden onChange={handleInputChange} ref={input} type="file" accept={accept} />
            {children}
            <Typography>{fileName}</Typography>
        </div>
    );
};
