// function openNav() {
//     document.getElementById("mySidebar").style.width = "200px";
//     // document.getElementById("main").style.marginLeft = "250px";
// }
//
// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// }

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


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("formStatus").innerHTML = "<p>Заявка успешно отправлена.</p>";
                // Clear form inputs if needed
                this.reset();
            } else {
                document.getElementById("formStatus").innerHTML = "<p>Произошла ошибка при отправке заявки.</p>";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("formStatus").innerHTML = "<p>Произошла ошибка при отправке заявки.</p>";
        });
});


document.addEventListener('DOMContentLoaded', function () {
    const prices = {
        'Болонья': {
            'Милан': 200, 'Флоренция': 100, 'Парма': 85, 'Бергамо': 220, 'Рим': 380,
            'Венеция': 150, 'Портофино': 210, 'озеро Комо': 250, 'Турин': 295,
            'Генуя': 210, 'Пиза': 135, 'Верона': 140
        },
        'Милан': {
            'Болонья': 200, 'Флоренция': 300, 'Парма': 120, 'Бергамо': 60, 'Рим': 570,
            'Венеция': 275, 'Портофино': 145, 'озеро Комо': 50, 'Турин': 140,
            'Генуя': 150, 'Пиза': 290, 'Верона': 160
        },
        //... Добавьте остальные расстояния
    };

    const pricePerKm = 2;

    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const priceDisplay = document.getElementById('price-display');
    const priceText = document.getElementById('price');
    const calculateButton = document.getElementById('calculate');

    function calculatePrice() {
        const from = fromSelect.value;
        const to = toSelect.value;

        if (from && to && from !== to) {
            const distance = prices[from][to] || prices[to][from];
            const price = distance * pricePerKm;
            priceText.textContent = `Цена: ${price} евро`;
            priceDisplay.style.display = 'block';
        } else {
            priceText.textContent = 'Цена: -- евро';
            priceDisplay.style.display = 'none';
        }
    }

    calculateButton.addEventListener('click', calculatePrice);
});

// document.addEventListener('DOMContentLoaded', function() {
//     const linkTransfer = document.querySelector('.link-transfer');
//     const kindOfTransfers = document.querySelector('.kind-of-transfers1');
//
//     linkTransfer.addEventListener('mouseover', function() {
//         kindOfTransfers.classList.add('animate-border');
//     });
//
//     linkTransfer.addEventListener('mouseout', function() {
//         kindOfTransfers.classList.remove('animate-border');
//     });
// });

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
