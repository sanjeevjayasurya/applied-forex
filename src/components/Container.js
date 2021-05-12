import { Box, Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props) => {
  return (
    <Box
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="black"
      color="white"
      {...props}
    />
  )
}
