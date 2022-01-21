// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const onlyDirectors = movies.map(function(names){
    return movies.names
})
  return onlyDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(onlyDirectors) {
  let spilbergMovies = movies.filter(function(movie){
    if ( movie.genre.includes("Drama") && movie.director.includes("Steven Spilberg")) {
      return true
    }

  })
  return spilbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies){
  const avgScores = movies.reduce(function (accumulator, currentValue ) {
    return accumulator + movies.score
  }, 0)
  const avegScores = sumScores / movies.length... 

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}
function dramaMoviesScore(movies) {
  const DramaFilms = movies.filter(function(movie){
    return (movie.genre.includes("Drama"))
  })
  const sumScores = DramaFilms.reduce(function(global, scores){
    return global + scores.score
  }, 0)
  const averageScores = sumScores / DramaFilms.length
  const averageScoresDecimals = Math.round(averageScores * 100)/100
  return averageScoresDecimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  const sorted =JSON.parse(JSON.stringify(movies)).sort(function(a, b){
    if(a.year !== b.year){
      return a.year - b.year;
    }else{
      return a.title.localeCompare(b.title);
    }
  })
  return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
