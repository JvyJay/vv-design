import React from 'react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import heroImage from '../img/hero-area.jpg'; // Replace with your image path

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
          Welcome to Our Website
        </Heading>
        <Text fontSize="xl" mb={6}>
          Discover our amazing services and products
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
