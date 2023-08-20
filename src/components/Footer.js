import React from 'react';
import { Box, Flex, Image, Link, Text, VStack, Icon } from '@chakra-ui/react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';


const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex maxW="1200px" mx="auto" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1">
          <Image src="/path/to/logo.png" alt="Logo" w="100px" h="auto" mb={4} />
          <Text fontSize="sm" mb={4}>
            123 Main Street, City, Country
          </Text>
          <Text fontSize="sm" mb={4}>
            Email: info@example.com
          </Text>
          <Text fontSize="sm">
            Phone: +123 456 7890
          </Text>
        </Box>
        <VStack spacing={4}>
            <Link href="#" target="_blank">
                <Icon as={IoLogoFacebook} boxSize={6} />
            </Link>
            <Link href="#" target="_blank">
                <Icon as={IoLogoTwitter} boxSize={6} />
            </Link>
            <Link href="#" target="_blank">
                <Icon as={IoLogoInstagram} boxSize={6} />
            </Link>
        </VStack>

      </Flex>
    </Box>
  );
};

export default Footer;
