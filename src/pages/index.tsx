import {FC} from 'react';

import {GetStaticProps} from 'next/types';
import Link from 'next/link';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {AppShell, Button, Header, Text} from '@mantine/core';

import {ColorSchemeToggle} from '../components';

const HomePage: FC = () => {
    const {t} = useTranslation('common');

    return (
        <AppShell
            fixed
            header={
                <Header height={70} p="md">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: '100%',
                        }}>
                        <Link href="/">
                            <div
                                style={{
                                    lineHeight: 1,
                                    cursor: 'pointer',
                                }}>
                                <Text sx={() => ({lineHeight: 1})} size="xl" weight={700}>
                                    Skeetry
                                </Text>
                                <Text color="dimmed" size="xs">
                                    {t('description')}
                                </Text>
                            </div>
                        </Link>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 130,
                            }}>
                            <ColorSchemeToggle />
                            <Button
                                sx={(theme) => ({
                                    color: theme.colorScheme === 'dark' ? 'black' : 'dark',
                                    backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'dark',
                                    '&:hover': {
                                        backgroundColor:
                                            theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                                    },
                                })}
                                color="dark"
                                radius={12}>
                                {t('login')}
                            </Button>
                        </div>
                    </div>
                </Header>
            }>
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
