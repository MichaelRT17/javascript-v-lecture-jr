// 120
var _ = require('lodash');
var movieData = require('./movies.json');

//movies before 1990 with imdbRating > 8.7
var popularOldies = _.filter(movieData, (movie) => movie.year < 1990 && movie.imdbRating > 8.7)
var popularOldiesTitles = popularOldies.map((movie) => movie.originalTitle)
console.log(popularOldiesTitles)

//do any movies star John Travolta in 1994
var filmsWithJT = _.filter(movieData, (movie) => {
    return _.find(movie.actors, (actor) => actor === 'John Travolta')
})

//get me a list of distinct actors
var allActors = _.chain(movieData)
    .map(movieData, 'actors')
    .union(...allActors)
    .value();

var abc = 123;