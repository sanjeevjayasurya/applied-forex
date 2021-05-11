import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}

export default function BasicStatistics() {
    return (
        <Box width="100%" mx={'auto'} pt={5} pb={20}
            px={{ base: 2, sm: 12, md: 17 }}
            bg="white" color="black">
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                What we are proud of!
        </chakra.h1>
            <SimpleGrid mx='auto' maxW="5xl" columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'We serve'} stat={'800+ members'} />
                <StatsCard title={'Posted'} stat={'15+ trades/week'} />
                <StatsCard title={'Performing'} stat={'200+ operations'} />
            </SimpleGrid>
        </Box>
    );
}