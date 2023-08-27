import React from 'react'
import { Box, Heading, SimpleGrid, Flex, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeroArea from '../components/HeroArea';
import ServiceCard from '../components/ServiceCard';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
// IMAGES
import tacoma from '../img/tacoma.jpg';

const Home = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'We create beautiful and responsive web designs that engage users.',
    },
    {
      title: 'Graphic Design',
      description: 'Our expert designers create stunning visual identities and graphics.',
    },
    {
      title: 'Digital Marketing',
      description: 'We help you reach your target audience and grow your online presence.',
    },
    // Add more services here...
  ];
  return (
    <div>
      <HeroArea />
      {/* Services Section */}
      <Box maxW="1200px" mx="auto" py={12}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
        </SimpleGrid>
      </Box>
      {/* Services Section */}
      {/* Banner Section */}
      <Flex
        bg="teal.500"
        color="white"
        p={10}
        flexDirection="column"
        justify="center" // Horizontally center
        align="center" // Vertically center
      >
        <Text mb="4" fontSize="lg">
          Want to learn more about our services?{' '}
        </Text>
        <Button>
          <Link to="/contact" color="white">
            Contact us now!
          </Link>
          </Button>
      </Flex>
      {/* Banner Section */}

      {/* Portfolio Section */}
      <PortfolioSection />
      {/* Portfolio Section */}

      {/* About Us (Summarized) */}
      <Box bg="teal.500" color="white" py={12}>
        <Flex maxW="1200px" mx="auto" flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
          <Box flex="1" p={4} pr={{ base: 0, md: 4 }}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ex non ex egestas
              fermentum. Sed tincidunt odio eu neque consectetur, ac sollicitudin arcu tempus. Fusce
              sit amet dui nec ex feugiat elementum a ut ante.
            </Text>
          </Box>
          <Box flex="1" p={4}>
            <Image src={tacoma} alt="About Us" w="100%" h="auto" borderRadius="md" />
          </Box>
        </Flex>
      </Box>
    {/* About Us (Summarized) */}

    {/* Footer Section */}
    <Footer />
    {/* Footer Section */}
    </div>
  );
};

export default Home;
