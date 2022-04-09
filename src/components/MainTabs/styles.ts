import {createStyles} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    navigation: {
        width: '100%',
    },
    navigationItemContainer: {
        margin: 0,
    },
    navigationItem: {
        color: theme.colors.gray[6],
        paddingBottom: 3,
        transition: 'color 0.25s ease-out',
        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[8],
        },
    },
    active: {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.dark[8],
        borderBottom: '2px solid',
    },
}));
