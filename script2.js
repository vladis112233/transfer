const carousel = document.getElementById('carousel');
const cities = carousel.children;
let currentIndex = 0;
const slideWidth = 200; // Ширина одного слайда
const totalItems = cities.length;

// Клонируем первые слайды и добавляем их в конец для эффекта бесконечной прокрутки
for (let i = 0; i < 3; i++) {
    const clone = cities[i].cloneNode(true);
    carousel.appendChild(clone);
}

function moveCarousel() {
    currentIndex++;
    carousel.style.transition = 'transform 0.5s ease'; // Анимация для плавного перемещения
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Когда дойдем до конца (до клонированных элементов), быстро возвращаемся к началу
    if (currentIndex === totalItems) {
        setTimeout(() => {
            carousel.style.transition = 'none'; // Убираем анимацию для незаметного перехода
            currentIndex = 0;
            carousel.style.transform = `translateX(0)`; // Возвращаемся к первому слайду
        }, 500); // Длительность анимации (0.5 секунды)
    }
}

setInterval(moveCarousel, 2000); // Двигаем карусель каждые 2 секунды




//
// // Вторая карусель - изменены переменные и классы
// let secondCurrentIndex = 0;
//
// function moveSecondCarousel(direction) {
//     const secondItems = document.querySelectorAll('.carousel-items2 .box-of-reviews');
//     const secondTotalItems = secondItems.length;
//
//     // Обновляем индекс для второй карусели
//     secondCurrentIndex += direction;
//
//     // Ограничиваем движение в пределах доступных слайдов
//     if (secondCurrentIndex < 0) {
//         secondCurrentIndex = secondTotalItems - 1;
//     } else if (secondCurrentIndex >= secondTotalItems) {
//         secondCurrentIndex = 0;
//     }
//
//     // Сдвигаем карусель
//     const secondTrack = document.querySelector('.carousel-items2');
//     const secondItemWidth = secondItems[0].clientWidth;
//     secondTrack.style.transform = `translateX(-${secondCurrentIndex * secondItemWidth}px)`;
// }


// // Вторая карусель - изменены переменные и классы
// let secondCurrentIndex = 0;
// const secondSlidesToShow = 3; // Сколько слайдов показывать одновременно
//
// function moveSecondCarousel(direction) {
//     const secondItems = document.querySelectorAll('.carousel-items2 .box-of-reviews');
//     const secondTotalItems = secondItems.length;
//
//     // Обновляем индекс для второй карусели
//     secondCurrentIndex += direction;
//
//     // Ограничиваем движение в пределах доступных слайдов
//     if (secondCurrentIndex < 0) {
//         secondCurrentIndex = secondTotalItems - secondSlidesToShow;
//     } else if (secondCurrentIndex >= secondTotalItems - secondSlidesToShow + 1) {
//         secondCurrentIndex = 0;
//     }
//
//     // Сдвигаем карусель
//     const secondTrack = document.querySelector('.carousel-items2');
//     const secondItemWidth = secondItems[0].clientWidth;
//     secondTrack.style.transform = `translateX(-${secondCurrentIndex * secondItemWidth}px)`;
// }



// Вторая карусель - изменены переменные и классы
let secondCurrentIndex = 0;

function moveSecondCarousel(direction) {
    const secondItems = document.querySelectorAll('.carousel-items2 .box-of-reviews');
    const secondTotalItems = secondItems.length;

    // Обновляем индекс для второй карусели
    secondCurrentIndex += direction;

    // Ограничиваем движение в пределах доступных слайдов
    if (secondCurrentIndex < 0) {
        secondCurrentIndex = secondTotalItems - 1;
    } else if (secondCurrentIndex >= secondTotalItems) {
        secondCurrentIndex = 0;
    }

    // Сдвигаем карусель
    const secondTrack = document.querySelector('.carousel-items2');
    const secondItemWidth = secondItems[0].clientWidth;
    secondTrack.style.transform = `translateX(-${secondCurrentIndex * secondItemWidth}px)`;
}






// const carousel = document.querySelector('.carousel-inner');
//
// carousel.addEventListener('mouseover', () => {
//     carousel.style.animationPlayState = 'paused';
// });
//
// carousel.addEventListener('mouseout', () => {
//     carousel.style.animationPlayState = 'running';
// });



const reviewCarousel = document.querySelector('.carousel-inner-reviews');
const reviewItems = document.querySelectorAll('.box-of-reviews1');
let reviewIndex = 0;
const reviewTotalItems = reviewItems.length;
const reviewInterval = 4000; // Время между сменами слайдов (4 секунды)

function autoSlideReviews() {
    reviewIndex++;

    // Если мы дошли до конца, возвращаемся к первому элементу
    if (reviewIndex >= reviewTotalItems) {
        reviewIndex = 0;
    }

    // Рассчитываем смещение для перехода к следующему слайду
    const offset = -reviewIndex * 100;
    reviewCarousel.style.transform = `translateX(${offset}%)`;
}

// Запускаем автоматическую прокрутку
setInterval(autoSlideReviews, reviewInterval);


document.addEventListener('DOMContentLoaded', () => {

    // получаем все элементы с классом pushmenu
    const pushmenu = document.getElementsByClassName('pushmenu');

    // получаем элемент с классом hidden-overley
    const hiddenOverley = document.querySelector('.hidden-overley');

    // отслеживаем клик клика по оверлею
    hiddenOverley.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('show');
        document.querySelector('.sidebar').classList.toggle('show');
        document.querySelector('body').classList.toggle('sidebar-opened');
        for( i=0; i < pushmenu.length; i++ ){
            pushmenu[i].classList.toggle('open');
        }
    });

    const pushmenuFunction = function() {
        document.querySelector('.pushmenu').classList.toggle('open');
        document.querySelector('.sidebar').classList.toggle('show');
        document.querySelector('.hidden-overley').classList.toggle('show');
        document.body.classList.toggle('sidebar-opened')
    };

    // Отслеживаем клики кнопок с классом pushmenu
    for( i=0; i < pushmenu.length; i++ ){
        pushmenu[i].addEventListener('click', pushmenuFunction, false);
    }

    const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
    const accordeonFunction =  function() {
        this.parentNode.querySelector('ul').classList.toggle('show');
        this.querySelector('i').classList.toggle('rotate');
    }
    // Отслеживаем клики родительских пунктов меню
    for( i=0; i < sidebarAccordeon.length; i++ ){
        sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
    }
});







window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-transfer');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.querySelector('.link-to-contact').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращает стандартное поведение ссылки
    document.querySelector('#contacts').scrollIntoView({
        behavior: 'smooth'
    });
});
