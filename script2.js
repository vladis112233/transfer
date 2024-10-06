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
