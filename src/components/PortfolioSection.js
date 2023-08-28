import React from 'react';
import { Box, Heading, SimpleGrid, Button } from '@chakra-ui/react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
// Images
import project1 from '../img/achilles-collective.png';
import project2 from '../img/jjvy.png';
import project3 from '../img/Faith-Photography.png';

const portfolioData = [
  {
    title: 'Achilles Collective',
    imageUrl: project1,
    description: 'Martial Arts Community Website',
    link: 'https://achilles-collective.vercel.app/', // Add the link
  },
  {
    title: 'jjvy (Music Portfolio)',
    imageUrl: project2,
    description: 'Music Producer Website',
    link: 'https://prodbyjjvy.vercel.app/#/', // Add the link
  },
  {
    title: 'F.V Photography',
    imageUrl: project3,
    description: 'Photographer Portfolio',
    link: 'https://faith-photography.vercel.app/#/', // Add the link
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
            link={project.link}
          >
          </ProjectCard>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PortfolioSection;
