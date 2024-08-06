'use client';
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    useMantineTheme,
} from '@mantine/core';
import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import Image from 'next/image';

// This is mock data
const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },

];

function Dropdown() {
    const theme = useMantineTheme();
    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: '22px', height: '22px' }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Group h="100%" gap={0}>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                    <a href="#" className={`classes.link border border-slate-500 p-5 rounded-md h-12 flex items-center justify-center`}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Visit
                            </Box>
                            <IconChevronDown
                                style={{ width: '16px', height: '16px' }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                    <Group justify="space-between" px="md">
                        <Text fw={500}>Features</Text>
                        <Anchor href="#" fz="xs">
                            View all
                        </Anchor>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={1} spacing={0}>
                        {links}
                    </SimpleGrid>


                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    );
}

export default Dropdown;
