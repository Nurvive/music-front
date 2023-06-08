import { KeyboardEvent, MouseEvent } from 'react';

export interface NavbarListProps {
    toggleDrawer?: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}
