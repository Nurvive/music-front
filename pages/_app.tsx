import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '~/store/store';
import '../src/styles/global.scss'
import { Player } from '~/components/Player';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <Player />
        </Provider>
    );
}
