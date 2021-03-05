const MoviesService = require('../services/movies');
const movieService = new MoviesService();

// @desc    Fetch all movies
// @route   GET /api/movies
// @access
exports.getMovies = async (req, res, next) => {
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
};

// @desc    Fetch single movie
// @route   GET /api/movies/:movieId
// @access
exports.getMovie = async (req, res, next) => {
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
};

// @desc    Create a movie
// @route   POST /api/movies
// @access
exports.createMovie = async (req, res, next) => {
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
};

// @desc    Update a movie
// @route   PUT /api/movies/:movieId
// @access
exports.updateMovie = async (req, res, next) => {
  const { movieId } = req.params;
  const { body: movie } = req;
  try {
    const updatedMovieId = await movieService.updateMovie({
      movieId,
      movie,
    });
    res.status(200).json({
      data: updatedMovieId,
      message: 'movie updated',
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete a movie
// @route   DELETE /api/movies/:movieId
// @access
exports.deleteMovie = async (req, res, next) => {
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
};
