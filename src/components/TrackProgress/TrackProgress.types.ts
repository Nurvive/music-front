import { ChangeEvent } from "react";

export type TrackProgressProps = {
    fullLength: number;
    currentLength: number;
    onChange: (e: ChangeEvent) => void
};
