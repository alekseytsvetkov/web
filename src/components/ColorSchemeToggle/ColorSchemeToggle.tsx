import {Moon, Sun1} from 'iconsax-react';
import {ActionIcon, useMantineColorScheme} from '@mantine/core';

export function ColorSchemeToggle() {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <ActionIcon
            variant="transparent"
            onClick={() => toggleColorScheme()}
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white,
                color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
            })}
            size="lg">
            {colorScheme === 'dark' ? <Sun1 size={18} variant="Bold" /> : <Moon size={18} variant="Bold" />}
        </ActionIcon>
    );
}
