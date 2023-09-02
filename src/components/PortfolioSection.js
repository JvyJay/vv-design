import React from 'react';
import { Box, Text, SimpleGrid, Button } from '@chakra-ui/react';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component
// IMAGES
import project1 from '../img/achilles-collective.png';
import project2 from '../img/jjvy.png';
import project3 from '../img/Faith-Photography.png';
// REACT REVEAL
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

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
      <Fade cascade>
        <Text color='teal.500' fontSize='3xl' fontWeight="bold" textAlign="center" mb={6}>
          Portfolio
        </Text>
        <Bounce right>
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
        </Bounce>
      </Fade>
    </Box>
  );
};

export default PortfolioSection;
