import React, {FC} from 'react';

import {useTranslation} from 'next-i18next';
import {Calendar, Location} from 'iconsax-react';
import dayjs from 'dayjs';
import {ProfileMenu} from '_components/ProfileMenu';
import {Avatar, Group, Text} from '@mantine/core';

import {IUser} from '_app/types';

import {useStyles} from './styles';

const localizedFormat = require('dayjs/plugin/localizedFormat');

dayjs.extend(localizedFormat);
require('dayjs/locale/en');
require('dayjs/locale/ru');

interface IProps {
    user: IUser;
}

export const Profile: FC<IProps> = ({user}) => {
    const {t, i18n} = useTranslation('common');
    const {classes} = useStyles();
    const {name, username, location, createdAt, followingCount, followersCount} = user;
    const currentLocale = i18n.language;

    return (
        <Group noWrap direction="column" spacing={5} className={classes.profile}>
            <Group noWrap position="apart" className={classes.profileHeader}>
                <Avatar radius={12} size="xl" />
                <ProfileMenu />
            </Group>
            <Group noWrap direction="column" spacing={5}>
                <Text inline size="lg" weight={700}>
                    {name}
                </Text>
                <Text inline color="dimmed">
                    @{username}
                </Text>
            </Group>
            <Group noWrap direction="column" spacing={1} className={classes.infoGroup}>
                {!!location && (
                    <Group noWrap spacing={5}>
                        <Location color="gray" size={18} />
                        <Text color="dimmed">{location}</Text>
                    </Group>
                )}
                <Group noWrap spacing={5}>
                    <Calendar color="gray" size={18} />
                    <Text color="dimmed">
                        {t('date_of_registration')}: {dayjs(createdAt).locale(currentLocale).format('LL')}
                    </Text>
                </Group>
            </Group>
            <Group noWrap spacing={5}>
                <Text weight={700}>{followingCount}</Text>
                <Text color="dimmed">{t('following')}</Text>
                <Text weight={700}>{followersCount}</Text>
                <Text color="dimmed">{t('followers')}</Text>
            </Group>
        </Group>
    );
};
