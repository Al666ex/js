

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('how many films you watched?','');
    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how many films you watched?','');
    }
}

start();

let personalMovieDb = {
    count : numberOfFilms,
    movie : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms(){
    for(let i = 0; i < 2 ; i++){
        const a = prompt("Введите наименование фильма",''),
              b = prompt("Оцените фильм","");
    
        if((a !== null) && (b !== null) && (a !== "") && (b !== '') && (a.length < 50) ){
            personalMovieDb.movie[a] = b;
            
            console.log("cool");
        } else {
            console.log("bad");
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDb.count < 10){
        console.log("посмотрели мало фильмов");
    } else if(personalMovieDb.count >= 10 && personalMovieDb.count <30){
        console.log("Ds классический зритель");
    } else if(personalMovieDb.count > 30){
        console.log("Вы киноман");
    } else {console.log("Error");}
    
}
//detectPersonalLevel();

function showMyDb(hide){
    if(!hide){
        console.log(personalMovieDb);
    }
}

showMyDb(personalMovieDb.privat);


function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр ${i}`,'');
        if((genre !== '') && (genre !== null)){
            personalMovieDb.genres[i-1] = genre;
        } else {
            i--;
        }
    }
}

writeYourGenres();