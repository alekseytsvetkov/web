import React, {FC} from 'react';

import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {LoginButton} from '_components/LoginButton';
import {ColorSchemeToggle} from '_components/ColorSchemeToggle';
import {Header, Text} from '@mantine/core';

import {useStyles} from './styles';

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
                <div className={classes.headerButtons}>
                    <ColorSchemeToggle />
                    <LoginButton />
                </div>
            </div>
        </Header>
    );
};
