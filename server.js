const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesRoutes = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHanlder = require('./utils/middleware/notFoundHandler');

app.use(express.json());

// Routes
app.use('/api/movies', moviesRoutes);

// Catch 404 errors
app.use(notFoundHanlder);

// Error handling middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`);
});
