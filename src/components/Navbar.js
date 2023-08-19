import React from 'react';
import { Flex, Box, Heading, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../img/1.png'

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Heading as="image" size="md" color="white" mr={8}>
          <Image src={logo} alt="Logo" boxSize="40px" mr={8}>

          </Image>
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
