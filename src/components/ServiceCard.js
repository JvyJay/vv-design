import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const ServiceCard = ({ title, description }) => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md">
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
      {/* You can add additional content like icons, buttons, etc. */}
    </Box>
  );
};

export default ServiceCard;
