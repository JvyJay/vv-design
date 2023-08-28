import React from 'react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import heroImage from '../img/hero-area2.jpg'; // Replace with your image path

export default function HeroArea() {
  return (
    <div>
        <Box
      bgImage={`url(${heroImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="80vh"
      position="relative"
      color="white"
    >
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
        Welcome to V.V Design
        </Heading>
        <Text fontSize="xl" mb={6}>
        where creativity meets innovation! We specialize in crafting exceptional digital experiences that captivate and engage. With a passionate team driven by a dedication to excellence, we're your partners in transforming ideas into visually stunning realities. Whether you're a small business seeking a powerful online presence or an individual with a creative project, we're here to bring your vision to life. Explore our range of services, immerse yourself in our portfolio of inspiring projects, and let's embark on a journey of design that leaves a lasting impression. Let's create together, let's create with V.V Design.
        </Text>
        <Flex justifyContent="center">
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Flex>
      </Box>
    </Box>
    </div>
  )
}
