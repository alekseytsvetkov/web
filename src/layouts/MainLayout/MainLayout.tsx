import {FC, ReactNode} from 'react';

import {HeaderHome} from '_components/HeaderHome';
import {AppShell, MediaQuery} from '@mantine/core';

import {useStyles} from './styles';

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = ({children}: IProps) => {
    const {classes} = useStyles();
    return (
        <AppShell fixed header={<HeaderHome />}>
            <MediaQuery largerThan="lg" styles={{width: '40vw'}}>
                <div className={classes.content}>{children}</div>
            </MediaQuery>
        </AppShell>
    );
};
