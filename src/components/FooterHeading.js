import { Heading, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const FooterHeading = (props) => (
    <Heading
        as="h4"
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
        {...props}
    />
)