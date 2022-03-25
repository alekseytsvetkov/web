import {createStyles} from '@mantine/core';

export const useStyles = createStyles(() => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    headerLogo: {
        cursor: 'pointer',
    },
    headerLoginButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
