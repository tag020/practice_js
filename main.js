'use strict'

const numberOfFilms = prompt('Скільки фільмів ви вже переглянули?', '')
const nameOfFilm = prompt('Один із останніх переглянутих фільмів?', '')
const ratingOfFilms = prompt('На скільки ви його оціните?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

personalMovieDB.movies[nameOfFilm] = ratingOfFilms

console.log(personalMovieDB)
