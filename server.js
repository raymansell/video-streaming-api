const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesRoutes = require('./routes/movies');
const userMoviesRoutes = require('./routes/userMovies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHanlder = require('./utils/middleware/notFoundHandler');

app.use(express.json());

// Routes
app.use('/api/movies', moviesRoutes);
app.use('/api/user-movies', userMoviesRoutes);

// Catch 404 errors
app.use(notFoundHanlder);

// Error handling middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`);
});
