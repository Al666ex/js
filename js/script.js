

let numberOfFilms = '';
while(numberOfFilms.length <= 0){
    numberOfFilms = prompt('how many films you watched?','');
}

let personalMovieDb = {
    count : numberOfFilms,
    movie : {},
    actors : {},
    genres : [],
    privat : false
};


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

console.log(personalMovieDb);

if(personalMovieDb.count < 10){
    console.log("посмотрели мало фильмов");
} else if(personalMovieDb.count >= 10 && personalMovieDb.count <30){
    console.log("Ds классический зритель");
} else if(personalMovieDb.count > 30){
    console.log("Вы киноман");
} else {console.log("Error");}






