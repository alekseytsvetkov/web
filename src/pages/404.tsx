import {FC} from 'react';

import {GetStaticProps} from 'next/types';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {MainLayout} from '_layouts/MainLayout';
import {NotFound} from '_components/NotFound';

const NotFoundPage: FC = () => {
    const {t} = useTranslation('common');

    return (
        <MainLayout>
            <NotFound />
        </MainLayout>
    );
};

export default NotFoundPage;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
