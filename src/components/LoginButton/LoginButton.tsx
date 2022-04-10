import React, {FC} from 'react';

import Link from 'next/link';
import {useTranslation} from 'next-i18next';
import {Google} from 'iconsax-react';
import {useModals} from '@mantine/modals';
import {Button, Group, Text, Title} from '@mantine/core';

import {useStyles} from './styles';

export const LoginButton: FC = () => {
    const modals = useModals();
    const {t} = useTranslation('common');
    const {classes} = useStyles();
    const openContentModal = () => {
        const id = modals.openModal({
            withCloseButton: false,
            children: (
                <Group noWrap direction="column" align="center" spacing={5} className={classes.modalMain}>
                    <Title order={2}>{t('welcome_to')} Skeetry</Title>
                    <Text color="dimmed" size="sm">
                        {t('description')}
                    </Text>
                    <Link href="/@username" passHref>
                        <Button
                            component="a"
                            sx={(theme) => ({
                                color: theme.colorScheme === 'dark' ? 'black' : 'dark',
                                backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'dark',
                                '&:hover': {
                                    backgroundColor:
                                        theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                                },
                                paddingLeft: 20,
                                paddingRight: 20,
                                marginTop: 20,
                            })}
                            fullWidth
                            leftIcon={<Google size={18} variant="Bold" />}
                            color="dark"
                            radius={12}
                            onClick={() => modals.closeModal(id)}>
                            {t('sign_in_with_google')}
                        </Button>
                    </Link>
                </Group>
            ),
        });
    };

    return (
        <Button
            onClick={openContentModal}
            sx={(theme) => ({
                color: theme.colorScheme === 'dark' ? 'black' : 'dark',
                backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'dark',
                '&:hover': {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
                },
                marginLeft: '10px',
            })}
            color="dark"
            radius={12}>
            {t('login')}
        </Button>
    );
};
