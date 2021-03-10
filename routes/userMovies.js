const router = require('express').Router();
const {
  getUserMovies,
  createUserMovie,
  deleteUserMovie,
} = require('../controllers/userMovies');
const { userIdSchema } = require('../utils/schemas/users');
const {
  userMovieIdSchema,
  createUserMovieSchema,
} = require('../utils/schemas/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');

router
  .route('/')
  .get(validationHandler({ userId: userIdSchema }, 'query'), getUserMovies)
  .post(validationHandler(createUserMovieSchema), createUserMovie);

router
  .route('/:userMovieId')
  .delete(
    validationHandler({ userMovieId: userMovieIdSchema }, 'params'),
    deleteUserMovie
  );

module.exports = router;
