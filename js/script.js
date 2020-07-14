
let numberOfFolms = prompt('how many films have you watched?','');

let personalMovieDb = {};
personalMovieDb.count = numberOfFolms;
personalMovieDb.movie = {};
personalMovieDb.actors = {};
personalMovieDb.gencers = [];
personalMovieDb.privat = false;

let lastFilm = prompt('One of last films which have you seen?','');
let score = prompt('Put your nore','');

personalMovieDb.movie[lastFilm] = lastFilm;
personalMovieDb.movie.score = score;

console.log(personalMovieDb);