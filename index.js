const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const carRoutes = require('./routes/CarRoutes'); // Import your Car routes
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerDef'); // Update with the correct path

app.use(express.json()); // for parsing JSON data
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded data

// Connect to MongoDB
mongoose.connect('mongodb+srv://blazhe:Feri123feri@cluster0.j4co85k.mongodb.net/SUA', { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(error => {
    console.error("MongoDB connection error:", error);
  });

app.use('/cars', carRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const swaggerSpec = swaggerJSDoc(swaggerDefinition);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/*{
  "carBrand": "BMW",
  "carModel": "3-series",
  "manufacturingYear": "2022-01-01",
  "color": "Black",
  "isAutomatic": true,
  "price": 36000
}
*/