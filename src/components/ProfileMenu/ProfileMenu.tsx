import React, {FC} from 'react';

import {useTranslation} from 'next-i18next';
import {Gallery, Message, SearchNormal, Settings} from 'iconsax-react';
import {Menu} from '@mantine/core';

export const ProfileMenu: FC = () => {
    const {t} = useTranslation('common');

    return (
        <Menu>
            <Menu.Item icon={<Settings size={14} />}>{t('settings')}</Menu.Item>
            <Menu.Item icon={<Message size={14} />}>{t('messages')}</Menu.Item>
            <Menu.Item icon={<Gallery size={14} />}>{t('gallery')}</Menu.Item>
            <Menu.Item icon={<SearchNormal size={14} />}>{t('search')}</Menu.Item>
        </Menu>
    );
};
