import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/Navbar'
import { WhyAF } from '../components/WhyAF'
import { Testimonial } from '../components/Testimonial'
import Pricing from '../components/Pricing'
import BasicStatistics from '../components/Stats'
import Team from '../components/Team'


const Index = () => (
  <Container>
    <NavBar />
    <Hero />
    <BasicStatistics />
    <Pricing />
    <Team />
    <WhyAF />
    <Testimonial />
    <Footer />
  </Container>
)

export default Index
