import { CreatePlaylistFormValues } from '~/pages/MainPage/NameDialog/NameDialog.types';

export const validation = ({ playlistName }: CreatePlaylistFormValues) => {
    const errors: Partial<CreatePlaylistFormValues> = {
        playlistName: undefined,
    };

    if (!playlistName) {
        errors.playlistName = 'Название обязательно';
    } else if (playlistName.length < 3) {
        errors.playlistName = 'Слишком короткое название';
    }

    return errors;
};
