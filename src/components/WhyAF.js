import { QuestionOutlineIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Image, SlideFade, Text } from "@chakra-ui/react"

export const WhyAF = () => {
    return (
        <Flex id="about" mt={100} mb={100} width="100%" justifyContent="center" alignItems="center" flexDir="column" background="black">
            <SlideFade in={true} offsetY="20px" delay={0.25}>
                <Heading
                    fontSize={["2rem", "3rem", "4rem", "5rem"]}
                    bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
                    bgClip="text"
                    mb="2rem"
                >
                    Why Applied Forex!
                </Heading>
            </SlideFade>
            <SlideFade in={true} offsetY="20px" delay={0.3}>
                <Text textAlign="center" width="80%" m="auto" fontSize={["md", "md", "xl", "xl"]} color="white" mb="6rem">
                    Our unique Mentorship provides real-time contact with skilled traders from all around
                    the world 24/7 that will help you in your decision making and risk management operations. We have managed to combine it all, a community of traders learning off each other while earning money at the same time!
                </Text>
            </SlideFade>
            <Flex
                w="80%"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                flexDir={["column", "column", "column", "row"]}
            >
                <Box
                    py={6}
                    px={7}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="#232323"
                    mt={[15, 15, 15, 0]}
                    mr={15}
                    ml={15}
                    color="#fff"
                    position="relative"
                >
                    <Image src="/forex.svg" alt="Chart Analysis" height="50px" margin="auto" />
                    <Heading
                        fontSize="lg"
                        bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
                        bgClip="text"
                        mb="2rem"
                        mt="3rem"
                    >
                        Live Chart Analysis
                </Heading>
                    See daily analysis on the most profitable pairs of the market.
                </Box>
                <Box
                    py={6}
                    px={7}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="#232323"
                    color="#fff"
                    mt={[15, 15, 15, 0]}
                    mr={15}
                    ml={15}
                >
                    <QuestionOutlineIcon color="white" w={50} h={50} margin="auto" />
                    <Heading
                        fontSize="lg"
                        bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
                        bgClip="text"
                        mb="2rem"
                        mt="3rem"
                    >
                        Questions answered
                </Heading>
                    Get all your doubts solved in less then 24h with our team.
                </Box>
                <Box
                    py={6}
                    px={7}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="#232323"
                    mt={[15, 15, 15, 0]}
                    color="#fff"
                    mr={15}
                    ml={15}
                >
                    <Image src="/strategy.svg" alt="Chart Analysis" height="50px" margin="auto" />
                    <Heading
                        fontSize="lg"
                        bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
                        bgClip="text"
                        mb="2rem"
                        mt="3rem"
                    >
                        Strategy development
                </Heading>
                    Build strategies that fits your personality with expert’s help.
                </Box>
                <Box
                    py={6}
                    px={7}
                    borderRadius="lg"
                    overflow="hidden"
                    bg="#232323"
                    color="#fff"
                    mt={[15, 15, 15, 0]}
                    mr={15}
                    ml={15}
                >
                    <Image src="/community.svg" alt="Chart Analysis" w="50px" height="50px" margin="auto" />
                    <Heading
                        fontSize="lg"
                        bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
                        bgClip="text"
                        mb="2rem"
                        mt="3rem"
                    >
                        Community interaction
                </Heading>
                    Interact with our community of traders from all over the world.
                </Box>
            </Flex>
        </Flex>
    )
}