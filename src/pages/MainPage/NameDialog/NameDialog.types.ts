export interface CreatePlaylistFormValues {
    playlistName: string;
}

export interface NameDialogProps {
    onClose: () => void;
    onSubmit: (value: CreatePlaylistFormValues) => void;
    isOpen: boolean;
}
