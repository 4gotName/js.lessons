"use strict";

const numberOfFilms = +prompt('Сколько фильио вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    privat: false
};



