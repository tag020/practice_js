'use strict'

let numberOfFilms
let ratingOfFilms
let genreOfFilm
let nameOfFilm

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

rememberMyFilms()

writeYourGenres()

detectPersonalLevel()

showMyDB(personalMovieDB.privat)

/* Function */

function start () {
  do {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '')
  } while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms))
}

function rememberMyFilms () {
  let i = 1

  do {
    nameOfFilm = prompt('Один із останніх переглянутих фільмів?', '')
    ratingOfFilms = prompt('На скільки ви його оціните?')
    if (nameOfFilm !== '' && ratingOfFilms !== '' && nameOfFilm !== null && ratingOfFilms !== null && nameOfFilm.length <= 50) {
      console.log(`You answered ${i} way correctly. Thats great!`)
      personalMovieDB.movies[nameOfFilm] = ratingOfFilms
      i++
    } else {
      console.log(`We're sorry, but you entered a space or exceeded the 50 character limit on path ${i}. Please try again`)
    }
  } while (i <= 2)
}

// let i = 1

// while (i <= 2) {
//   nameOfFilm = prompt('Один із останніх переглянутих фільмів?', '')
//   ratingOfFilms = prompt('На скільки ви його оціните?')
//   if (nameOfFilm !== '' && ratingOfFilms !== '' && nameOfFilm !== null && ratingOfFilms !== null && nameOfFilm.length <= 50) {
//     console.log(`You answered ${i} way correctly. Thats great!`)
//     personalMovieDB.movies[nameOfFilm] = ratingOfFilms
//     i++
//   } else {
//     console.log(`We're sorry, but you entered a space or exceeded the 50 character limit on path ${i}. Please try again`)
//   }
// }

// for (let i = 1; i <= 2; i++) {
//   nameOfFilm = prompt('Один із останніх переглянутих фільмів?', '')
//   ratingOfFilms = prompt('На скільки ви його оціните?')
//   if (nameOfFilm !== '' && ratingOfFilms !== '' && nameOfFilm !== null && ratingOfFilms !== null && nameOfFilm.length <= 50) {
//     console.log(`You answered ${i} way correctly. Thats great!`)
//     personalMovieDB.movies[nameOfFilm] = ratingOfFilms
//   } else {
//     console.log(`We're sorry, but you entered a space or exceeded the 50 character limit on path ${i}. Please try again`)
//     i--
//     continue
//   }
// }

function detectPersonalLevel () {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log('Переглянуто доволі мало фільмів')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Ви середньостатистичний глядач')
  } else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман')
  } else {
    console.log('Сталась помилка')
  }
}

function writeYourGenres () {
  let i = 1

  do {
    genreOfFilm = prompt(`Ваш улюблений жанр під номером ${i}`, '')
    if (genreOfFilm !== '' && genreOfFilm !== null) {
      personalMovieDB.genres[i - 1] = genreOfFilm
      i++
    }
  } while (i <= 3)
}

function showMyDB (state) {
  if (state === false) {
    console.log(personalMovieDB)
  }
}
