import React from 'react';
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const theme = extendTheme({
  // Your custom Chakra UI theme configuration can be added here (optional).
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Box maxW="1200px" mx="auto" p={4}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
