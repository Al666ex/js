/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."                      
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img"),
          movieList = document.querySelector('.promo__interactive-list'),
          poster = document.querySelector('.promo__bg'),
          genre = document.querySelector('.promo__genre');
    
    
    adv.forEach(item =>
        item.remove()
    );
    
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")'
    movieList.innerHTML=''
    
    // moviesDel.forEach(movie => 
    //     movie.remove()
    // );
    
    movieDB.movies.forEach((item,index) => {
        
        movieList.innerHTML +=
        `<li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>`;
    });
    

})
    
    






