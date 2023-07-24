import React from 'react';
import { Flex, Box, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="md" color="white" mr={8}>
          Logo
        </Heading>
        <Link as={RouterLink} to="/" color="white" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/services" color="white" mr={4}>
          Services
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mr={4}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
