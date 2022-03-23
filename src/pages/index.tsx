import {GetStaticProps} from 'next/types';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {Text} from '@mantine/core';

import {ColorSchemeToggle} from '../components/ColorSchemeToggle';

const HomePage = () => {
    const {t} = useTranslation('common');
    return (
        <>
            <Text
                color="dimmed"
                align="center"
                size="lg"
                sx={{maxWidth: 580, fontSize: 34, fontWeight: 600}}
                mx="auto"
                mt="xl">
                {t('login')}
            </Text>
            <Text
                color="dimmed"
                align="center"
                size="lg"
                sx={{maxWidth: 580, fontSize: 34, fontWeight: 600}}
                mx="auto"
                mt="xl">
                {t('date_of_registration')}
            </Text>
            <Text
                color="dimmed"
                align="center"
                size="lg"
                sx={{maxWidth: 580, fontSize: 34, fontWeight: 600}}
                mx="auto"
                mt="xl">
                {t('contribute')}
            </Text>
            <ColorSchemeToggle />
        </>
    );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
