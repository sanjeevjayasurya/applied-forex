import { Flex, SlideFade, Heading, Text, Box, HStack, Circle, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { Quotee } from './Quote'
import { QuoteIcon } from './QuoteIcon'


const array = [
    {
        name: "Zik",
        jobTitle: "Fellow Trader",
        imageSrc: "/Zik.jpeg",
        testimonial: "On the first time i joined AF group, i was really excited to join the you, I benefit by talking to you guys which enhance my english. And for my profit u guys did good, I've gained more knowledge than ever before about forex on live sesions. I'm so happy on the server!"
    },
    {
        name: "Danny",
        jobTitle: "Fellow Trader",
        imageSrc: "/Danny.jpeg",
        testimonial: "When I joined the group i practically knew nothing about trading. I've only been here about a week but I have already learn so much and have even started trading. The resources that are uploaded constantly give me an insight into trading and the friendly members were there to answers any and all of my questions!"
    },
    {
        name: "Emre",
        jobTitle: "Fellow Trader",
        imageSrc: "/Emre.png",
        testimonial: "I joined AF 4-5 months ago, I joined this server to seek help because i was a beginner and I had bad trade days. I've met some really wonderful people here such as Teekay, Leo and Troy. They helped me to trade and this really gave me a lot of experience. Weekly live trade meetings, charts where I could see all kinds of analyzes, you name it. I am very happy to be a member of AF, and I hope to be a member here for life!"
    }
]

export const Testimonial = () => {
    const [state, setState] = useState(0)
    return (
        <Flex color="#000" pt={100} pb={100} width="100%" justifyContent="center" alignItems="center" flexDir="column" background="white">
            <SlideFade in={true} offsetY="20px" delay={0.25}>
                <Heading
                    color="#000"
                    fontSize={["2rem", "3rem", "4rem", "5rem"]}
                    mb="2rem"
                >
                    What Group members say!
                </Heading>
            </SlideFade>
            <SlideFade in={true} offsetY="20px" delay={0.3}>
                <Text
                    color="#000" textAlign="center" m="auto" fontSize={["md", "md", "xl", "xl"]} mb="6rem">
                    ENHANCE YOUR PERFORMANCE JUST LIKE THEM
                </Text>
            </SlideFade>
            <Box as="section" >
                <Box
                    maxW="5xl"
                    mx="auto"
                >
                    <Flex direction="column" align="center" textAlign="center">
                        <QuoteIcon
                            color={useColorModeValue('gray.300', 'gray.600')}
                            fontSize={{
                                base: '3xl',
                                md: '6xl',
                            }}
                        />
                        <Text
                            fontSize={{
                                base: 'lg',
                                md: 'xl',
                            }}
                            fontWeight="medium"
                            mt="6"
                        >
                            &ldquo;{array[state].testimonial}&rdquo;
        </Text>
                        <Quotee
                            name={array[state].name}
                            jobTitle={array[state].jobTitle}
                            imageSrc={array[state].imageSrc}
                            mt="8"
                        />
                    </Flex>
                    <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
                        <Circle w={state === 0 ? "3" : "2"} h={state === 0 ? "3" : "2"} bg={state === 0 ? "blue.500" : "currentColor"} onClick={() => setState(0)} />
                        <Circle w={state === 1 ? "3" : "2"} h={state === 1 ? "3" : "2"} bg={state === 1 ? "blue.500" : "currentColor"} onClick={() => setState(1)} />
                        <Circle w={state === 2 ? "3" : "2"} h={state === 2 ? "3" : "2"} bg={state === 2 ? "blue.500" : "currentColor"} onClick={() => setState(2)} />
                    </HStack>
                </Box>
            </Box>
        </Flex>
    )
}