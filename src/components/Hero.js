import { Box, Button, Flex, Heading, SlideFade, Text } from '@chakra-ui/react'

export const Hero = () => (
  // <Box w="100%">
    <Flex justifyContent="center" alignItems="center" height="100vh" flexDir="column" background="black">
      <SlideFade in={true} offsetY="20px" delay={0.25}>
        <Heading
          fontSize={["2rem", "3rem", "4rem", "5rem"]}
          bgGradient="linear(to-l, #FFFFFF, #F0F0F0)"
          bgClip="text"
          mb="2rem"
        >
          Welcome To Applied Forex
    </Heading>
      </SlideFade>
      <SlideFade in={true} offsetY="20px" delay={0.3}>
        <Text textAlign="center" width="80%" m="auto" fontSize={["md", "md", "xl", "xl"]} color="white" mb="6rem">We create a community of real traders to enhance just about anyone’s performance on the Forex Market.</Text>
      </SlideFade>
      <Flex>
        <SlideFade in={true} offsetY="20px" delay={0.325}>
          <Button bg="blue.400" colorScheme="blue" variant="solid" mr={15}>
            Join Now
      </Button>
          <Button bg="blue.400" colorScheme="blue" variant="solid" ml={15}>
            Sign in
      </Button>
        </SlideFade>
      </Flex>
    </Flex>
  // </Box>
)
