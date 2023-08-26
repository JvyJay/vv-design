import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard'; // Import the PortfolioCard component

const portfolioData = [
  {
    title: 'Project 1',
    imageUrl: '/path/to/project1.jpg',
    description: 'Description of Project 1.',
  },
  {
    title: 'Project 2',
    imageUrl: '/path/to/project2.jpg',
    description: 'Description of Project 2.',
  },
  {
    title: 'Project 3',
    imageUrl: '/path/to/project3.jpg',
    description: 'Description of Project 3.',
  },
  // Add more projects...
];

const PortfolioSection = () => {
  return (
    <Box maxW="1200px" mx="auto" py={12}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Portfolio
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {portfolioData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PortfolioSection;
