import React from 'react';
import { Box, Flex, Heading, VStack, Text, useMediaQuery } from '@chakra-ui/react';
//COMPONENTS
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
// REACT REVEAL COMPONENTS
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';

const Contact = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Box>
      <Fade cascade>
        <Text color='teal.500' fontSize='3xl' fontWeight="bold" textAlign="center" py={8}>
          Contact Us
        </Text>
        <Flex direction={isSmallerThanMd ? "column" : "row"} justify="center">
          <Slide cascade top>
            <Box maxW="400px" mb={isSmallerThanMd ? 4 : 0} mr={isSmallerThanMd ? 0 : 8}>
              <VStack spacing={4} alignItems={isSmallerThanMd ? "center" : "flex-start"}>
                <Text fontWeight="bold">Visit Us</Text>
                <Text>123 Main Street</Text>
                <Text>City, Country</Text>
              </VStack>
              <VStack spacing={4} alignItems={isSmallerThanMd ? "center" : "flex-start"}>
                <Text fontWeight="bold">Contact Info</Text>
                <Text>Email: info@example.com</Text>
                <Text>Phone: +123 456 7890</Text>
              </VStack>
            </Box>
          </Slide>
          <Slide right cascade>
            <Box maxW="400px">
              <ContactForm />
            </Box>
          </Slide>
        </Flex>
      </Fade>
      <Footer />
    </Box>
  );
};

export default Contact;
