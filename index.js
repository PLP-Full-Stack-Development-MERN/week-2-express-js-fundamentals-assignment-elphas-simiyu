require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(logger);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));