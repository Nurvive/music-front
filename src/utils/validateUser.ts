import { UserAuth } from '~/types';
import { ValidationErrors } from 'final-form';

export const validateUser = ({ name, password }: UserAuth): ValidationErrors => {
    const errors: ValidationErrors = {
        name: undefined,
        password: undefined,
    };

    if (!name) {
        errors.name = 'Имя обязательно';
    } else if (name.length < 3) {
        errors.name = 'Слишком короткое имя';
    }

    if (!password) {
        errors.password = 'Пароль обязателен';
    } else if (password.length < 6) {
        errors.password = 'Пароль слишком короткий';
    }

    return errors;
};
