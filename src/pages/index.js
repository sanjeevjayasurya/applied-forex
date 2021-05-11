import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar'
import { WhyAF } from '../components/WhyAF'
import { Testimonial } from '../components/Testimonial'
import Pricing from '../components/Pricing'
import BasicStatistics from '../components/Stats'


const Index = () => (
  <Container>
    <NavBar />
    <Hero />
    <BasicStatistics />
    <WhyAF />
    <Testimonial />
    <Pricing />
    <Footer />
    {/* <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main> */}

    {/* <DarkModeSwitch /> */}
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
    {/* <CTA /> */}
  </Container>
)

export default Index
