import React from 'react';
import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" textAlign="center">
      <Flex alignItems="center" justifyContent="center" mb={4}>
        {icon}
      </Flex>
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

export default ServiceCard;
