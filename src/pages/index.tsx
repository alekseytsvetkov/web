import Link from 'next/link';
import {useRouter} from 'next/router';

import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {Text, Button} from '@mantine/core';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle';

export default function HomePage() {
    const router = useRouter();
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
                {t('utils.login')}
            </Text>
            <Link href="/" locale={router.locale === 'en' ? 'ru' : 'en'}>
                <Button color="gray" radius="md" size="md">
                    {t('change')}
                </Button>
            </Link>
            <ColorSchemeToggle />
        </>
    );
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
