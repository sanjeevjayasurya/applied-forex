import { Box, Button, Flex, IconButton, Image, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
export const NavBar = () => {
    const [display, changeDisplay] = useState(false)
    return (
        <React.Fragment>
            <Flex boxShadow="0 5px 5px -5px rgba(255,255,255,.5);" zIndex={20} w="100%" height={display ? "50%" : "auto"} px={[4, 4, 4, 8]} py={[4, 4, 4, 4]} minH="60px" position="fixed" flexDir="column" background="black" color="white" >
                <Flex>
                    <Image h={["60px", "60px", "80px", "80px"]} src="/logo.png" alt="logo" aria-label="applied-forex-logo" />
                    <Spacer />
                    <Flex
                        top="1rem"
                        right="1rem"
                        align="center"
                    >
                        <Flex
                            display={['none', 'none', 'none', 'flex']}
                        >
                            <Link href="/">
                                <Button
                                    as="a"
                                    variant="ghost"
                                    aria-label="Home"
                                    my={5}
                                    w="100%"
                                >
                                    Home
                        </Button>
                            </Link>
                            <Link href="/">
                                <Button
                                    as="a"
                                    variant="ghost"
                                    aria-label="About"
                                    my={5}
                                    w="100%"
                                >
                                    About
                        </Button>
                            </Link>
                            <Link href="/">
                                <Button
                                    as="a"
                                    variant="ghost"
                                    aria-label="Contact"
                                    my={5}
                                    w="100%"
                                >
                                    Contact
                        </Button>
                            </Link>
                        </Flex>
                    </Flex>
                    <IconButton
                        aria-label="Menu"
                        size="lg"
                        mr={2}
                        h="auto"
                        icon={display === false ? <HamburgerIcon /> : <CloseIcon />}
                        display={['flex', 'flex', 'flex', 'none']}
                        onClick={() => changeDisplay(!display)}
                        bg="none"
                    />
                </Flex>
                <Flex
                    flexDir="column"
                    align="center"
                    h={display ? '50vh' : '0vh'}
                    transition='height 0.5s ease-out'
                >
                    <Box mt="20px" display={display === false && 'none'} width="100%" transition="display 0.5s ease">
                        <Link href="/">
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="Home"
                                w="100%"
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href="#about">
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="About"
                                w="100%"
                            >
                                About
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button
                                as="a"
                                variant="ghost"
                                aria-label="Contact"
                                w="100%"
                            >
                                Contact
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </React.Fragment>
    )
}