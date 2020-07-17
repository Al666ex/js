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
        for(let i = 1; i < 2; i++){
            // const genre = prompt(`Ваш любимый жанр ${i}`,'');
            // if((genre !== '') && (genre !== null)){
            //     personalMovieDb.genres[i-1] = genre;
            // } else {
            //     console.log("некорректные данные")
            //     i--;
            // }

            const genres = prompt(`Ваши любимые жанры кино введите через запятую`,'').toLowerCase();
            if((genres !== "") && (genres !== null)){
                personalMovieDb.genres = genres.split(", ")
                personalMovieDb.genres.sort()
            }else {
                console.log("данные введены не корректно");
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


let one = document.querySelectorAll(".one")
//one.forEach(item => console.log(item))

let box = document.getElementById("box")
let tagName = document.getElementsByTagName("button")
let hearts = document.querySelectorAll(".heart")
let wrapper = document.querySelector(".wrapper")
// box.style.backgroundColor = "green";
// box.style.width = "300px"

// console.dir(tagName)
// tagName[2].style.borderRadius = "100%"
// box.style.cssText = "background-color : yellow; width : 55px;"

hearts.forEach(item => {
    item.style.background = "yellow"
})

let div = document.createElement("div")
div.classList.add("black");
//document.body.append(div)
//wrapper.append(div)
//wrapper.prepend(div)
hearts[0].after(div)

