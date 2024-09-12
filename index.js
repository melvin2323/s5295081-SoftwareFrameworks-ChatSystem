const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes'); // Import the user routes


// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json

const errorHandler = require('./src/middleware/errorMiddleware');
app.use(errorHandler);


// Use user routes
app.use('/api/users', userRoutes); // Prefix your routes with /api/

// authentication
const authenticate = require('./src/middleware/authMiddleware');
app.use*('/api/users', authenticate, userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
