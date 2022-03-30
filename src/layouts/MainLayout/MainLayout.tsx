import {FC, ReactNode} from 'react';

import {HeaderHome} from '_components/HeaderHome';
import {AppShell} from '@mantine/core';

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = ({children}: IProps) => {
    return (
        <AppShell fixed header={<HeaderHome />}>
            {children}
        </AppShell>
    );
};
