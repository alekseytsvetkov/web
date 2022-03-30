import {createStyles} from '@mantine/core';

export const useStyles = createStyles(() => ({
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 10,
    },

    profileHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    profileName: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    info: {
        display: 'flex',
        alignItems: 'center',
    },
    infoText: {
        paddingLeft: 5,
    },
    subscriptions: {
        display: 'flex',
        paddingTop: 5,
    },
}));
