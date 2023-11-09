const swaggerDefinition = {
    info: {
      title: 'api-documentation',
      version: '1.0.0',
      description: 'API documentation for your service',
    },
    host: 'localhost:3000', // Update with your host and port
    basePath: '/',
  };
  
  module.exports = {
    swaggerDefinition,
   // apis: ['routes/carRoutes.js'], // ZA node index.js
    apis: ['/app/routes/CarRoutes.js'], // za DOCKER

  };
  