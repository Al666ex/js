/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoImg = document.querySelectorAll(".promo__adv img"),
      genre = document.querySelector('.promo__genre'),
      listMovies = document.querySelector('.promo__interactive-list'),
      moviesDel = listMovies.querySelectorAll('.promo__interactive-item'),
      inputMovie = document.querySelector('.promo__interactive .add input[type="text"]'),
      buttonMovie = document.querySelector('.promo__interactive .add button');
;

promoImg.forEach(item =>
    item.remove()
);

genre.textContent = 'драма';


moviesDel.forEach(movie => 
    movie.remove()
);

movieDB.movies.forEach((item,index) => {
    listMovies.innerHTML +=
    `<li class="promo__interactive-item">${index + 1} ${item}
        <div class="delete"></div>
    </li>`;
});

buttonMovie.addEventListener('click', function(e){
    e.preventDefault();    
    movieDB.movies.push(inputMovie.value);    
        listMovies.innerHTML +=
        `<li class="promo__interactive-item">${movieDB.movies.length} ${inputMovie.value}
            <div class="delete"></div>
        </li>`;    
    movieDB.movies.forEach(item => console.log(item));
    inputMovie.value = null;
});




