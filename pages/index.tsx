import {Title, Text, Anchor} from '@mantine/core';
import {ColorSchemeToggle} from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
    return (
        <>
            <Text
                color="dimmed"
                align="center"
                size="lg"
                sx={{maxWidth: 580, fontSize: 34, fontWeight: 600}}
                mx="auto"
                mt="xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <ColorSchemeToggle />
        </>
    );
}
