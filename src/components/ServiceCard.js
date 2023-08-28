import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" textAlign="center">
      <Flex alignItems="center" justifyContent="center" mb={4}>
        {icon}
      </Flex>
      <Text color='teal.500' fontWeight="bold" fontSize="xl" mb={2}>
        {title}
      </Text>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};

export default ServiceCard;
