import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { Stack } from '@mui/system';
import { Form } from 'react-final-form';
import { validateUser } from '~/utils/validateUser';
import { UserAuth } from '~/types';
import { InputField } from '~/components/InputField';
import { INITIAL_VALUES, SUBSCRIPTION } from './RegisterForm.constants';
import { useAppDispatch } from '~/hooks';
import { registration } from '~/store/auth';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { LINK_TRACKS } from '~/constants';
import { RegisterFormProps } from '~/components/RegisterForm/RegisterForm.types';

export const RegisterForm = ({ onChangePage }: RegisterFormProps) => {
    const dispatch = useAppDispatch();
    const { push } = useRouter();

    const handleFormSubmit = useCallback(
        (value: UserAuth) => {
            dispatch(registration(value))
                .unwrap()
                .then(() => void push(LINK_TRACKS))
                .catch((e) => alert(JSON.parse(e).data.message));
        },
        [dispatch, push],
    );

    return (
        <Card>
            <CardHeader title="Регистрация" />
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
                            <Button onClick={handleSubmit}>Зарегистрироваться</Button>
                            <Button onClick={onChangePage}>Войти</Button>
                        </Stack>
                    )}
                </Form>
            </CardContent>
        </Card>
    );
};
