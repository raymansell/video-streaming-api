const router = require('express').Router();
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');

router
  .route('/')
  .get(getMovies)
  .post(validationHandler(createMovieSchema), createMovie);

router
  .route('/:movieId')
  .get(validationHandler({ movieId: movieIdSchema }, 'params'), getMovie)
  .put(
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    updateMovie
  )
  .delete(validationHandler({ movieId: movieIdSchema }, 'params'), deleteMovie);

module.exports = router;
