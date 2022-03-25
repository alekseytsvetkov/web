import {FC} from 'react';

import {GetStaticProps} from 'next/types';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {AppShell, Text} from '@mantine/core';
import {HeaderHome} from '../components';

const HomePage: FC = () => {
    const {t} = useTranslation('common');

    return (
        <AppShell fixed header={<HeaderHome />}>
            <Text>{t('welcome')}</Text>
        </AppShell>
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
