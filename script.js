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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.link-transfer');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const parent = this.closest('.kind-of-transfers1');
            parent.classList.add('highlight-border');
        });

        link.addEventListener('mouseleave', function() {
            const parent = this.closest('.kind-of-transfers1');
            parent.classList.remove('highlight-border');
        });
    });
});


// const boxCity = document.querySelector('.box-city');
// const cityWidth = document.querySelector('.city').offsetWidth + 16; // ширина одного слайда + gap
// let scrollAmount = 0;
//
// function slideRight() {
//     scrollAmount += cityWidth; // прибавляем ширину одного слайда
//
//     // Если дошли до конца, сбрасываем слайды на начало
//     if (scrollAmount >= boxCity.scrollWidth - boxCity.clientWidth) {
//         scrollAmount = 0;
//     }
//
//     boxCity.style.transform = `translateX(-${scrollAmount}px)`; // сдвиг на определенное расстояние
// }
//
// setInterval(slideRight, 2000); // запуск каждые 2 секунды
//

// const boxCity = document.querySelector('.box-city');
// let currentIndex = 0;
//
// function slide() {
//     currentIndex = (currentIndex + 1) % boxCity.children.length; // Увеличиваем индекс
//     const offset = currentIndex * -200; // Смещение в зависимости от ширины слайда
//     boxCity.style.transform = `translateX(${offset}px)`; // Применяем смещение
// }
//
// // Переключаем слайды каждые 2 секунды
// setInterval(slide, 2000);


// const boxCity = document.querySelector('.box-city');
// const cities = boxCity.children;
// const totalCities = cities.length;
// let currentIndex = 0;
//
// function slide() {
//     currentIndex = (currentIndex + 1) % totalCities; // Увеличиваем индекс
//     const offset = currentIndex * -200; // Смещение в зависимости от ширины слайда
//
//     // Проверяем, если это последний слайд, чтобы добавить первый слайд в конец
//     if (currentIndex === 0) {
//         boxCity.style.transition = 'none'; // Отключаем анимацию при сбросе
//         boxCity.style.transform = `translateX(0)`; // Возвращаем на первый слайд
//         setTimeout(() => {
//             boxCity.style.transition = 'transform 0.5s ease-in-out'; // Включаем анимацию снова
//             boxCity.style.transform = `translateX(-200px)`; // Переключаем на второй слайд
//         }, 50); // Небольшая задержка для того, чтобы браузер успел применить изменения
//     } else {
//         boxCity.style.transform = `translateX(${offset}px)`; // Применяем смещение
//     }
// }
//
// // Переключаем слайды каждые 2 секунды
// setInterval(slide, 2000);


// const boxCity = document.querySelector('.box-city');
// let currentIndex = 0;
//
// function slide() {
//     currentIndex = (currentIndex + 1) % boxCity.children.length; // Увеличиваем индекс
//     const offset = currentIndex * -200; // Смещение в зависимости от ширины слайда
//     boxCity.style.transform = `translateX(${offset}px)`; // Применяем смещение
// }
//
// // Переключаем слайды каждые 2 секунды
// setInterval(slide, 2000);



// const boxCity = document.querySelector('.box-city');
// const cities = document.querySelectorAll('.city');
// let currentIndex = 0;
//
// // Function to slide the cities
// function slideCities() {
//     currentIndex++;
//
//     // Reset to the first city if at the end
//     if (currentIndex >= cities.length) {
//         currentIndex = 0;
//     }
//
//     // Calculate the offset for the slide
//     const offset = -currentIndex * (200 + 16); // 200 is the width, 16 is the margin-right
//     boxCity.style.transform = `translateX(${offset}px)`;
// }
//
// // Change slide every 2 seconds
// setInterval(slideCities, 2000);


