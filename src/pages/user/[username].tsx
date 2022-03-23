import {GetStaticPaths, GetStaticProps} from 'next/types';
import {useRouter} from 'next/router';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {Text} from '@mantine/core';

const User = () => {
    const router = useRouter();
    const {t} = useTranslation('common');
    return (
        <Text
            color="dimmed"
            align="center"
            size="lg"
            sx={{maxWidth: 580, fontSize: 34, fontWeight: 600}}
            mx="auto"
            mt="xl">
            {t('welcome')} {router.query.username}
        </Text>
    );
};

export default User;

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
