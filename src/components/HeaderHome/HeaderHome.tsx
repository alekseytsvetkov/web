import React, {FC} from 'react';

import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {LoginButton} from '_components/LoginButton';
import {ColorSchemeToggle} from '_components/ColorSchemeToggle';
import {Group, Header, MediaQuery, Text} from '@mantine/core';

import {useStyles} from './styles';

export const HeaderHome: FC = () => {
    const {t} = useTranslation('common');
    const {classes} = useStyles();

    return (
        <Header height={60} p="xs">
            <Group noWrap align="center" position="apart">
                <Link href="/" passHref>
                    <Group noWrap direction="column" spacing={1} className={classes.headerLogo}>
                        <Text inline size="lg" weight={700}>
                            Skeetry
                        </Text>
                        <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                            <Text color="dimmed" size="xs">
                                {t('description')}
                            </Text>
                        </MediaQuery>
                    </Group>
                </Link>
                <Group noWrap spacing={1}>
                    <ColorSchemeToggle />
                    <LoginButton />
                </Group>
            </Group>
        </Header>
    );
};
