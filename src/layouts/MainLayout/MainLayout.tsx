import React, {FC, ReactNode} from 'react';

import {Header} from '../../components';

interface IProps {
    children: ReactNode;
}

export const MainLayout: FC<IProps> = ({children}: IProps) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">{children}</main>
        </div>
    );
};
