const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesRoutes = require('./routes/movies');

app.use(express.json());

app.use('/api/movies', moviesRoutes);

app.listen(config.port, () => {
  console.log(`Listening http://localhost${config.port}`);
});
