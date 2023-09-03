const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define a proxy route for HeroTofu
app.use(
  '/herotofu', // Change this to match your frontend route
  createProxyMiddleware({
    target: 'https://public.herotofu.com',
    changeOrigin: true,
  })
);

// Start the proxy server on a different port (e.g., 4000)
const port = 4000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
