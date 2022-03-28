import Head from 'next/head';
import {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import {GetServerSidePropsContext} from 'next';
import {getCookie, setCookies} from 'cookies-next';
import {ModalsProvider} from '@mantine/modals';
import {useLocalStorage} from '@mantine/hooks';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import 'inter-ui/inter.css';

function App(props: AppProps & {colorScheme: ColorScheme}) {
    const {Component, pageProps} = props;
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

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
                    theme={{
                        fontFamily: 'Inter,  sans-serif',
                        colorScheme,
                    }}
                    withGlobalStyles
                    withNormalizeCSS>
                    <ModalsProvider>
                        <Component {...pageProps} />
                    </ModalsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

App.getInitialProps = ({ctx}: {ctx: GetServerSidePropsContext}) => ({
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default appWithTranslation(App);
