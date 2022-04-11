import {createStyles} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    container: {
        height: '100%',
    },
    link: {
        color: theme.colors.blue[5],
        transition: 'color 0.25s ease-out',
        '&:hover': {
            color: theme.colors.blue[8],
        },
    },
}));
