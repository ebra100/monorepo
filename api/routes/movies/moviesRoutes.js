var express = require('express');
var router = express.Router();
const uploadController = require('../../controllers/movies/moviesController')


router.get('', uploadController.getMovies);

module.exports = router;
