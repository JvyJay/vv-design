import React from 'react'
import { Box, Heading, SimpleGrid, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeroArea from '../components/HeroArea';
import ServiceCard from '../components/ServiceCard';

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
      <Box py={12}>
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
        py={4}
        flexDirection="column"
        justify="center" // Horizontally center
        align="center" // Vertically center
      >
        <Text fontSize="lg">
          Want to learn more about our services?{' '}
        </Text>
        <Button>
          <Link to="/contact" color="white">
            Contact us now!
          </Link>
          </Button>
      </Flex>
      {/* Banner Section */}
    </div>
  );
};

export default Home;
