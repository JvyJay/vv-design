import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

const ContactForm = () => {
  return (
    <Box mb={6} p={6} bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea rows={4} />
        </FormControl>
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;

