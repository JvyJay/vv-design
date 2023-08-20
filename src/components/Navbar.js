import React from 'react';
import { Box, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../img/2.png';

const Navbar = () => {
  return (
    <Box bg="white" p={4}>
      <Box maxW="1200px" mx="auto">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="md" color="white">
            <RouterLink to="/">
              <img src={logo} alt="Logo" style={{ height: '100px', marginRight: '8px' }} />
            </RouterLink>
          </Heading>

          <Menu>
            <MenuButton as={Button} variant="link" color="teal.500">
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/home" color="teal.500">
                Home
              </MenuItem>
              <MenuItem as={RouterLink} to="/about" color="teal.500">
                About
              </MenuItem>
              <MenuItem as={RouterLink} to="/portfolio" color="teal.500">
                Portfolio
              </MenuItem>
              <MenuItem as={RouterLink} to="/contact" color="teal.500">
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
