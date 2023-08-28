import React from 'react'
import { Box, Heading, SimpleGrid, Flex, Text, Button, Image, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsCodeSlash, BsBrush, BsMegaphone } from 'react-icons/bs';
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
      icon: <Icon as={BsCodeSlash} w={6} h={6} />,
    },
    {
      title: 'Graphic Design',
      description: 'Our expert designers create stunning visual identities and graphics.',
      icon: <Icon as={BsBrush} w={6} h={6} />,
    },
    {
      title: 'Digital Marketing',
      description: 'We help you reach your target audience and grow your online presence.',
      icon: <Icon as={BsMegaphone} w={6} h={6} />,
    },
    // Add more services here...
  ];
  return (
    <div>
      <HeroArea />
      {/* Services Section */}
      <Box maxW="1200px" mx="auto" py={12}>
        <Text color='teal.500' fontSize='3xl' fontWeight="bold" textAlign="center" mb={6}>
          Our Services
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
        ))}
        </SimpleGrid>
      </Box>
      {/* Services Section */}
      {/* Banner Section */}
      <Flex
        bg="gray.100"
        color="white"
        p={10}
        flexDirection="column"
        justify="center" // Horizontally center
        align="center" // Vertically center
      >
        <Text color='teal.500' mb="4" fontSize="lg">
          Want to learn more about our services?{' '}
        </Text>
        <Button bg='teal.500' color='white'>
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
            We are a family-founded web design and development company based in Tacoma, Washington. With a passion for creativity and innovation, we're dedicated to crafting exceptional digital experiences that empower small businesses and freelancers. Our mission is to bring your unique vision to life through responsive web design, creative branding, and effective digital marketing strategies. We believe in fostering connections, providing personalized solutions, and supporting the growth of your online presence. Join us on this journey as we work together to create meaningful and impactful digital solutions that resonate with your audience.
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
