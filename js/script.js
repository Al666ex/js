"use strict";

let personalMovieDb = {
    count : 0,
    movie : {},
    actors : {},
    genres : [],
    privat : false,
    start : function(){
        personalMovieDb.count = +prompt('how many films you watched?','');
        while(personalMovieDb.count === '' || personalMovieDb.count === null || isNaN(personalMovieDb.count)){
            personalMovieDb.count = +prompt('how many films you watched?','');
        }
    
    },
    rememberMyFilms : function(){
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
    },
    detectPersonalLevel : function(){
        if(personalMovieDb.count < 10){
            console.log("посмотрели мало фильмов");
        } else if(personalMovieDb.count >= 10 && personalMovieDb.count <30){
            console.log("Ds классический зритель");
        } else if(personalMovieDb.count > 30){
            console.log("Вы киноман");
        } else {console.log("Error");}        
    },
    showMyDb : function(hide){
        if(!hide){
            console.log(personalMovieDb);
        }       
    },    
    writeYourGenres : function(){
        for(let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр ${i}`,'');
            if((genre !== '') && (genre !== null)){
                personalMovieDb.genres[i-1] = genre;
            } else {
                console.log("некорректные данные")
                i--;
            }
        }
        personalMovieDb.genres.forEach(function(item,index){
            console.log(`номер ${index+1} жанр ${item} `)
        })
    },
    toggleVisibleMyDB : function(){
        if(personalMovieDb.privat) {
            personalMovieDb.privat = false
        }else{personalMovieDb.privat = true}
    }

};

//console.log(personalMovieDb.toggleVisibleMyDB())
//console.log(personalMovieDb.toggleVisibleMyDB())
