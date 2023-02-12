import React from 'react';
import { TrackProgressProps } from './TrackProgress.types';

export const TrackProgress = ({ currentLength, fullLength, onChange }: TrackProgressProps) => {
    return (
        <div>
            <input type="range" onChange={onChange} min={currentLength} max={fullLength} value={currentLength} />
            <div>
                {currentLength} / {fullLength}
            </div>
        </div>
    );
};
