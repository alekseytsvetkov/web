import React, {FC} from 'react';

import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Center, Group, Text, Title} from '@mantine/core';

import {useStyles} from './styles';

export const NotFound: FC = () => {
    const {t} = useTranslation('common');
    const {classes} = useStyles();

    return (
        <Center className={classes.container}>
            <Group position="center">
                <Title order={2}>{t('error_404')}.</Title>
                <Text size="xl" weight={500} align="center">
                    {t('error_404_description')}{' '}
                    <Link href="https://t.me/SkeetryBot" passHref>
                        <Text inherit component="a" target="_blank" className={classes.link}>
                            {t('error_404_link')}.
                        </Text>
                    </Link>
                </Text>
                <Link href="/" passHref>
                    <Text component="a" size="md" weight={600} className={classes.link}>
                        {t('back_to_home')}
                    </Text>
                </Link>
            </Group>
        </Center>
    );
};
