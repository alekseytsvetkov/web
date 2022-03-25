import React, {FC} from 'react';

import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Button, Header, Text} from '@mantine/core';

import {useStyles} from './styles';

import {ColorSchemeToggle} from '..';

export const HeaderHome: FC = () => {
    const {t} = useTranslation('common');
    const {classes} = useStyles();
    return (
        <Header height={70} p="md">
            <div className={classes.header}>
                <Link href="/" passHref>
                    <div className={classes.headerLogo}>
                        <Text sx={() => ({lineHeight: 1})} size="xl" weight={700}>
                            Skeetry
                        </Text>
                        <Text color="dimmed" size="xs">
                            {t('description')}
                        </Text>
                    </div>
                </Link>
                <div className={classes.headerLoginButton}>
                    <ColorSchemeToggle />
                    <Button
                        sx={(theme) => ({
                            color: theme.colorScheme === 'dark' ? 'black' : 'dark',
                            backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'dark',
                            '&:hover': {
                                backgroundColor:
                                    theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                            },
                            marginLeft: '10px',
                        })}
                        color="dark"
                        radius={12}>
                        {t('login')}
                    </Button>
                </div>
            </div>
        </Header>
    );
};
