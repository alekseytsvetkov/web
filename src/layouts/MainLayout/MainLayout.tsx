import {FC, ReactNode} from 'react';

import {HeaderHome} from '_components/HeaderHome';
import {AppShell, Group, MediaQuery} from '@mantine/core';

import {useStyles} from './styles';

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = ({children}: IProps) => {
    const {classes} = useStyles();
    return (
        <AppShell fixed header={<HeaderHome />}>
            <MediaQuery largerThan="md" styles={{width: '40vw'}}>
                <Group noWrap direction="column" spacing="xs" className={classes.content}>
                    {children}
                </Group>
            </MediaQuery>
        </AppShell>
    );
};
