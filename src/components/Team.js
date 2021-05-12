import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    SlideFade,
} from '@chakra-ui/react';

export default function Team() {
    return (
        <Flex id="team" color="#000" pt={100} pb={100} width="100%" justifyContent="center" alignItems="center" flexDir="column" background="white">
            <SlideFade in={true} offsetY="20px" delay={0.25}>
                <Heading
                    color="#000"
                    fontSize={["2rem", "3rem", "4rem", "5rem"]}
                    mb="2rem"
                >
                    Our Team
                </Heading>
            </SlideFade>
            <SlideFade in={true} offsetY="20px" delay={0.3}>
                <Text
                    color="#000" textAlign="center" m="auto" fontSize={["md", "md", "xl", "xl"]} mb="6rem">
                    YOU COULDN'T BE IN BETTER HANDS
                </Text>
            </SlideFade>
            <Flex py={12} color="white">
                <Box
                    mr={50}
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url('/Teekay.jpg')`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            objectFit={'cover'}
                            src={'/Teekay.jpg'}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Tike Asajile
            </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                CEO & TRADER
              </Text>

                        </Stack>
                    </Stack>
                </Box>
                <Box
                    ml={50}
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        // height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url('/Leo.jpg')`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            objectFit={'cover'}
                            src={'/Leo.jpg'}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Leopoldo Pires
            </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                CO-FOUNDER & TRADER
              </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    );
}