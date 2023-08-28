import React from 'react';
import { Box, Container, Heading, Text, VStack, Image, SimpleGrid } from '@chakra-ui/react';
// COMPONENTS
import TeamMemberCard from '../components/TeamMemberCard'; // Import the TeamMemberCard component
import Footer from '../components/Footer';
// IMAGES
import rainier from '../img/rainier.jpg'; // Import the rainier image
import family from '../img/family.jpg';

export default function About() {
  const teamMembers = [
    { name: 'Jadon Guzman', role: 'Developer/Designer', description: 'Skilled in React, Vue, Figma, Photoshop, and more.' },
    { name: 'Faith Vadnais', role: 'Sales Agent', description: 'Experienced in sales, telemarketing, and customer service.' },
    { name: 'Madison Vadnais', role: 'Business Administrator', description: 'Graduated from University of Albany with a bachelor\'s degree in business administration and management.' },
  ];

  return (
    <Box>
      {/* About Us Section */}
      <Box
        position="relative"
        display="flex" // Display flex to center content vertically and horizontally
        justifyContent="center"
        alignItems="center"
        py={12}
        textAlign="center"
        color="white"
        bgImage={`url(${rainier})`} // Set the image as background
        bgSize="cover"
        bgPosition="center"
        zIndex={-1}
      >
        <Box // Box for the color overlay
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="teal.500" // Use the teal.500 color token
          opacity={0.7} // Set the desired opacity
          zIndex={-2}
        />
        <Container maxW="xl">
          <VStack spacing={8} alignItems="center" p={6} borderRadius="md">
            <Heading as="h1" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              We are a family-owned web design and development company based in Tacoma, Washington. With a passion for creating innovative and user-friendly web solutions, we specialize in designing and developing business, informational, and portfolio websites.
            </Text>
            <Text fontSize="lg">
              Our team consists of dedicated professionals who bring unique skills to the table. Jadon Guzman, our Web Designer/Developer, excels in React, Vue, Figma, Photoshop, and more. Faith Vadnais brings her expertise in sales, telemarketing, and customer service, ensuring a seamless client experience. Madison Vadnais, a graduate from the University of Albany in New York, holds a bachelor's degree in business administration and management.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Image Component */}
      <Box display="flex" justifyContent="center" mt={8}>
        <Image src={family} alt="Childhood Family Photo" maxW="500px" />
      </Box>

      {/* Team Member Section */}
      <Box py={12}>
        <Container maxW="xl">
          <VStack spacing={8} align="center">
            <Heading as="h2" size="xl">
              Our Team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={4}>
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} name={member.name} role={member.role} description={member.description} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Footer Section */}
      <Footer />
      {/* Footer Section */}
    </Box>
  );
}
