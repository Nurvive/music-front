import React from 'react';
import { TrackProgressProps } from './TrackProgress.types';
import { secondsToMinutes } from '~/utils/secondsToMinutes';

export const TrackProgress = ({ currentLength, fullLength, onChange, isTime }: TrackProgressProps) => {
    const maxLength = isTime ? secondsToMinutes(fullLength) : fullLength;
    const thisLength = isTime ? secondsToMinutes(currentLength) : currentLength

    return (
        <div>
            <input type="range" onChange={onChange} min={0} max={fullLength} value={currentLength} />
            <div>
                {thisLength} / {maxLength}
            </div>
        </div>
    );
};
