import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const TeamMemberCard = ({ name, role, imageUrl }) => {
  return (
    <Box p={4} bg="white" boxShadow="md" borderRadius="md">
      <VStack mt={4} alignItems="center" textAlign="center">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.600">{role}</Text>
      </VStack>
    </Box>
  );
};

export default TeamMemberCard;
