import {FC} from 'react';

import {GetStaticProps} from 'next/types';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {MainLayout} from '_layouts/MainLayout';
import {Text} from '@mantine/core';

const HomePage: FC = () => {
    const {t} = useTranslation('common');

    return (
        <MainLayout>
            <Text>{t('welcome')}</Text>
        </MainLayout>
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
