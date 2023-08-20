import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const ProjectCard = ({ title, imageUrl, description }) => {
  return (
    <Box bg="white" boxShadow="md" p={4} borderRadius="md">
      <Image src={imageUrl} alt={title} h="200px" objectFit="cover" mb={2} />
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default ProjectCard;

