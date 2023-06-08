import { NameDialogProps } from '~/pages/MainPage/NameDialog/NameDialog.types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { InputField } from '~/components/InputField';
import { Form } from 'react-final-form';
import { INITIAL_VALUES, SUBSCRIPTION } from './NameDialog.constants';
import { validation } from './NameDialog.utils';

export const NameDialog = ({ isOpen, onClose, onSubmit }: NameDialogProps) => {
    return (
        <Form onSubmit={onSubmit} validate={validation} initialValues={INITIAL_VALUES} subscription={SUBSCRIPTION}>
            {({ handleSubmit }) => (
                <Dialog fullWidth open={isOpen} onClose={onClose}>
                    <DialogTitle>Новый плейлист</DialogTitle>
                    <DialogContent>
                        <InputField
                            name="playlistName"
                            autoFocus
                            margin="dense"
                            label="Название плейлиста"
                            fullWidth
                            variant="standard"
                            type="text"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Отмена</Button>
                        <Button onClick={handleSubmit}>Создать</Button>
                    </DialogActions>
                </Dialog>
            )}
        </Form>
    );
};
