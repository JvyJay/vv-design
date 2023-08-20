import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
// COMPONENTS
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" py={8}>
        Contact Us
      </Heading>
      <Box maxW="400px" mx="auto">
        <ContactForm />
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
