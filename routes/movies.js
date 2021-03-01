const router = require('express').Router();
const MoviesService = require('../services/movies');

const movieService = new MoviesService();

router
  .route('/')
  .get(async (req, res, next) => {
    const { tags } = req.query;
    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    const { body: movie } = req;
    try {
      const createdMovieId = await movieService.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:movieId')
  .get(async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const movie = await movieService.getMovie({ movieId });
      res.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await movieService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
