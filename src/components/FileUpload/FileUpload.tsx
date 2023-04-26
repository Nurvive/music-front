import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { FileUploadProps } from './FileUpload.types';
import styles from './FileUpload.module.scss';
import { Typography } from '@mui/material';

export const FileUpload = ({ setFile, accept, children }: FileUploadProps) => {
    const input = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');

    const handleUploadClick = useCallback(() => {
        if (input.current) {
            input.current.click();
        }
    }, []);

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                setFile?.(e.target.files[0]);
                setFileName(e.target.files[0]?.name)
            }
        },
        [setFile],
    );

    return (
        <div onClick={handleUploadClick}>
            <input className={styles.input} onChange={handleInputChange} ref={input} type="file" accept={accept} />
            {children}
            <Typography>{fileName}</Typography>
        </div>
    );
};
