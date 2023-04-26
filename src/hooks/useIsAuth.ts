import { useAppSelector } from '~/hooks/redux';

export const useIsAuth = () => {
    const { _id } = useAppSelector((state) => state.auth);

    return {
        isAuth: !!_id,
    };
};
