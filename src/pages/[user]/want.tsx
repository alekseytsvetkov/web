import {FC} from 'react';

import {GetStaticPaths, GetStaticProps} from 'next/types';
import {useRouter} from 'next/router';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {Calendar, Gallery, Location, Message, SearchNormal, Settings} from 'iconsax-react';
import {MainLayout} from '_layouts/MainLayout';
import {Avatar, Menu, Text} from '@mantine/core';

import {useStyles} from './styles';

const Want: FC = () => {
    const {t} = useTranslation('common');
    const router = useRouter();
    const {user} = router.query;
    const {classes} = useStyles();
    return (
        <MainLayout>
            <div className={classes.profile}>
                <div className={classes.profileHeader}>
                    <Avatar radius={12} size="xl" />
                    <Menu>
                        <Menu.Item icon={<Settings size={14} />}>{t('settings')}</Menu.Item>
                        <Menu.Item icon={<Message size={14} />}>{t('messages')}</Menu.Item>
                        <Menu.Item icon={<Gallery size={14} />}>{t('gallery')}</Menu.Item>
                        <Menu.Item icon={<SearchNormal size={14} />}>{t('search')}</Menu.Item>
                    </Menu>
                </div>
                <div className={classes.profileName}>
                    <Text weight={700} style={{lineHeight: 1}}>
                        Aleksey Tsvetkov
                    </Text>
                    <Text color="dimmed">@{user}</Text>
                </div>

                <Text color="dimmed" className={classes.info}>
                    <Location size={18} />
                    <Text className={classes.infoText}>Saint-Petersburg, Russia</Text>
                </Text>
                <Text color="dimmed" className={classes.info}>
                    <Calendar size={18} />
                    <Text className={classes.infoText}>February, 2022</Text>
                </Text>
                <div className={classes.subscriptions}>
                    <Text weight={700}>76</Text>
                    <Text color="dimmed" style={{paddingLeft: 5, paddingRight: 10}}>
                        {t('following')}
                    </Text>
                    <Text weight={700}>24</Text>
                    <Text color="dimmed" style={{paddingLeft: 5}}>
                        {t('followers')}
                    </Text>
                </div>
            </div>
        </MainLayout>
    );
};

export default Want;

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
