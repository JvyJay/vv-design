import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProjectCard = ({ title, imageUrl, description, link }) => {
  return (
    <Box bg="white" boxShadow="md" p={4} borderRadius="md">
      <Image src={imageUrl} alt={title} h="200px" objectFit="cover" mb={2} />
      <Text color='teal.500' fontWeight="bold" fontSize="xl" mb={2}>
        {title}
      </Text>
      <Text mb={2}>{description}</Text>
      <Button as="a" href={link} colorScheme="teal" size="sm">
              Learn More
      </Button>
    </Box>
  );
};

export default ProjectCard;

