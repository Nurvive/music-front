import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { MainPage } from '~/pages/MainPage';
import { LINK_AUTH } from '~/constants';
import { getUserInfo } from '~/api/auth.http';

export const Index: NextPage = () => <MainPage />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const user = await getUserInfo(req.headers.cookie)
        .then((user) => user)
        .catch(() => null);

    if (!user) {
        return {
            redirect: {
                statusCode: 307,
                destination: LINK_AUTH,
            },
        };
    }

    return {
        props: {},
    };
};

export default Index;
