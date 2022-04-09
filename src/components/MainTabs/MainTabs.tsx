import {FC} from 'react';

import {useRouter} from 'next/router';
import Link from 'next/link';
import {Container, Group, Text} from '@mantine/core';

import {isActiveRoute} from '_app/utils';
import {ILink} from '_app/types';

import {useStyles} from './styles';

interface IProps {
    linkRoutes: ILink[];
}

export const MainTabs: FC<IProps> = ({linkRoutes}) => {
    const {classes, cx} = useStyles();
    const router = useRouter();
    const {pathname} = router;

    return (
        <Group noWrap spacing={1} position="left" className={classes.navigation}>
            {linkRoutes.map((link) => (
                <Container key={link.id} px="xs" className={classes.navigationItemContainer}>
                    <Link href={link.url} passHref>
                        <Text
                            className={
                                isActiveRoute(link.name, pathname)
                                    ? cx(classes.navigationItem, classes.active)
                                    : cx(classes.navigationItem)
                            }
                            component="a">
                            {link.name}
                        </Text>
                    </Link>
                </Container>
            ))}
        </Group>
    );
};
