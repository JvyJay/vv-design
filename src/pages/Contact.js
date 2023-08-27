import React from 'react';
import { Box, Flex, Heading, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  const [isSmallerThanMd] = useMediaQuery("(max-width: 767px)");

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" py={8}>
        Contact Us
      </Heading>
      <Flex direction={isSmallerThanMd ? "column" : "row"} justify="center">
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
        <Box maxW="400px">
          <ContactForm />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Contact;
