import React from 'react';
import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';

export default function About() {
  return (
    <Box py={12}>
      <Container maxW="xl">
        <VStack spacing={8} alignItems="center">
          <Heading as="h1" size="xl">
            About Us
          </Heading>
          <Image src="/path/to/about_image.jpg" alt="About Us" w="100%" maxH="300px" objectFit="cover" borderRadius="md" />
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ex non ex egestas fermentum. Sed
            tincidunt odio eu neque consectetur, ac sollicitudin arcu tempus. Fusce sit amet dui nec ex feugiat
            elementum a ut ante.
          </Text>
          <Text fontSize="lg">
            Sed nec nisl a turpis placerat gravida. Pellentesque eu felis eu risus rhoncus pharetra at eu justo.
            Duis nec libero tincidunt, varius mauris at, efficitur orci.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
