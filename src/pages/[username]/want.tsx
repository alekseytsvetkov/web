import {FC} from 'react';

import {GetStaticPaths, GetStaticProps} from 'next/types';
import {useRouter} from 'next/router';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {MOCK_USERS} from '_mocks';
import {MainLayout} from '_layouts/MainLayout';
import {Profile} from '_components/Profile';
import {Text} from '@mantine/core';

const Want: FC = () => {
    const router = useRouter();
    const {username} = router.query;
    const user = MOCK_USERS.find((u) => u.username === username);
    if (!user) {
        return (
            <MainLayout>
                <Text>Тут будет ошибка</Text>
            </MainLayout>
        );
    }
    return (
        <MainLayout>
            <Profile user={user} />
        </MainLayout>
    );
};

export default Want;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};

export const getStaticPaths: GetStaticPaths<{slug: string}> = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};
