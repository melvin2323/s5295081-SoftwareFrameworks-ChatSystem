const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/routes/userRoutes'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

const errorHandler = require('./src/middleware/errorMiddleware');
app.use(errorHandler);



app.use('/api/users', userRoutes); 


const authenticate = require('./src/middleware/authMiddleware');
app.use*('/api/users', authenticate, userRoutes);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
