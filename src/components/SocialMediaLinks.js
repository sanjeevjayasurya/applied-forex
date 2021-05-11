import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaInstagram fontSize="20px" />} />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaFacebook fontSize="20px" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
)
