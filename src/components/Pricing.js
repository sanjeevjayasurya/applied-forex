import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  SlideFade,
  Heading,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Pricing() {
  return (
    <Flex color="#000" pt={100} pb={100} width="100%" justifyContent="center" alignItems="center" flexDir="column">
      <SlideFade in={true} offsetY="20px" delay={0.25}>
        <Heading
          color="#fff"
          fontSize={["2rem", "3rem", "4rem", "5rem"]}
          mb="2rem"
        >
          Pricing
    </Heading>
      </SlideFade>
      <SlideFade in={true} offsetY="20px" delay={0.3}>
        <Text
          color="#fff" textAlign="center" m="auto" fontSize={["md", "md", "xl", "xl"]} mb="6rem">
          Get your premium membership right now!
    </Text>
      </SlideFade>
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={'gray.400'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('blue.50', 'blue.100')}
              p={2}
              px={3}
              color={'blue.500'}
              rounded={'full'}>
              MONTHLY
          </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                49.99
            </Text>
              <Text>/month</Text>
            </Stack>
          </Stack>

          <Box bg="white" color="black" px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                3 days free trial
            </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Access to Premium Channels
            </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                Custom name color
            </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
               Live sessions w / Chart Analysis every week
            </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
              Premium Support
            </ListItem>
            </List>
            <Link href="https://applied-forex-ternary.herokuapp.com/?password=Premium">
              <Button
                mt={10}
                w={'full'}
                bg={'blue.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(0 96 255 / 43%)'}
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                SUBSCRIBE
          </Button>
            </Link>
          </Box>
        </Box>
      </Center >
    </Flex >
  );
}




