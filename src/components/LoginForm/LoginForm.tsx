import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { Stack } from '@mui/system';
import { Form } from 'react-final-form';
import { UserAuth } from '~/types';
import { INITIAL_VALUES, SUBSCRIPTION } from './LoginForm.constants';
import { validateUser } from '~/utils/validateUser';
import { InputField } from '~/components/InputField';
import { useAppDispatch } from '~/hooks';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { login } from '~/store/auth';
import { LINK_TRACKS } from '~/constants';
import { LoginFormProps } from '~/components/LoginForm/LoginForm.types';

export const LoginForm = ({ onChangePage }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const { push } = useRouter();

    const handleFormSubmit = useCallback(
        (value: UserAuth) => {
            dispatch(login(value))
                .unwrap()
                .then(() => void push(LINK_TRACKS))
                .catch((e) => alert(JSON.parse(e).data.message));
        },
        [dispatch, push],
    );

    return (
        <Card>
            <CardHeader title="Вход" />
            <CardContent>
                <Form<UserAuth>
                    initialValues={INITIAL_VALUES}
                    subscription={SUBSCRIPTION}
                    validate={validateUser}
                    onSubmit={handleFormSubmit}>
                    {({ handleSubmit }) => (
                        <Stack flexDirection="column" gap={1.5}>
                            <InputField name="name" placeholder="Логин" inputMode="text" />
                            <InputField name="password" placeholder="Пароль" type="password" />
                            <Button onClick={handleSubmit}>Войти</Button>
                            <Button onClick={onChangePage}>Зарегистрироваться</Button>
                        </Stack>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
};
