'use strict'

const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '')
let ratingOfFilms
let nameOfFilm

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 1; i <= 2; i++) {
  nameOfFilm = prompt('Один із останніх переглянутих фільмів?', '')
  ratingOfFilms = +prompt('На скільки ви його оціните?', '')
  if (nameOfFilm !== '' && ratingOfFilms !== '' && nameOfFilm !== null && ratingOfFilms !== null && nameOfFilm.length <= 50) {
    console.log(`You answered ${i} way correctly. Thats great!`)
    personalMovieDB.movies[nameOfFilm] = ratingOfFilms
  } else {
    console.log(`We're sorry, but you entered a space or exceeded the 50 character limit on path ${i}. Please try again`)
    i--
    continue
  }
}

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  console.log('Переглянуто доволі мало фільмів')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Ви середньостатистичний глядач')
} else if (personalMovieDB.count > 30) {
  console.log('Ви кіноман')
} else {
  console.log('Сталась помилка')
}

console.log(personalMovieDB)
