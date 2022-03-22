import {useState} from 'react';

import Head from 'next/head';
import {AppProps} from 'next/app';
import {GetServerSidePropsContext} from 'next';
import {getCookie, setCookies} from 'cookies-next';
import {NotificationsProvider} from '@mantine/notifications';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import 'inter-ui/inter.css';

export default function App(props: AppProps & {colorScheme: ColorScheme}) {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

    const toggleColorScheme = (value?: ColorScheme) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookies('mantine-color-scheme', nextColorScheme, {maxAge: 60 * 60 * 24 * 30});
    };

    return (
        <>
            <Head>
                <title>Skeetry</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    theme={{fontFamily: 'Inter,  sans-serif', colorScheme}}
                    withGlobalStyles
                    withNormalizeCSS>
                    <NotificationsProvider>
                        <Component {...pageProps} />
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

App.getInitialProps = ({ctx}: {ctx: GetServerSidePropsContext}) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});