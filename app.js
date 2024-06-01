const pass = document.querySelector('.inp-pass');
const Name = document.querySelector('.inp-name');
const apply = document.querySelector('.apply');
const news = document.querySelector('.news');
const currency = document.querySelector('.currency');
const repeat = document.querySelector('.rep-button');

const iframe1 = document.querySelector('.iframe1');
const iframe2 = document.querySelector('.iframe2');

const gmailName = document.querySelector('.gmail-name');
const gmailPass = document.querySelector('.gmail-pass');

const alertBox = document.querySelector('.alert-box');
const header = document.querySelector('header');
const body2 = document.querySelector('.body');


setInterval(() => {
    const addBox = document.querySelector('.adds');
    const adds = document.querySelectorAll('.add');
    let randomNum = Math.trunc(Math.random() * adds.length); // случайное число от 0 до adds.length - 1

    adds.forEach(add => {
        add.classList.remove('index'); // Удаляем класс 'index' у всех элементов
    });

    adds[randomNum].classList.add('index'); // Добавляем класс 'index' к случайному элементу
}, 20000);


// Функция для проверки и отображения body2 и alertBox
function checkAndDisplay() {
    const savedName = localStorage.getItem('savedName');
    const savedPass = localStorage.getItem('savedPass');
    if (savedName) {
        gmailName.textContent = savedName;
    }
    if (savedPass) {
        gmailPass.textContent = savedPass;
    }

    if (savedName && savedPass) {
        header.style.display = 'block';
        body2.style.display = 'grid';
        alertBox.style.display = 'none';
    } else {
        header.style.display = 'none';
        body2.style.display = 'none';
        alertBox.style.display = 'block';
    }
}

// Загрузка сохраненного значения из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    checkAndDisplay();
});

apply.addEventListener('click', () => {
    if (Name.value !== '' && pass.value !== '') {
        // Сохраняем значение Name и pass в localStorage
        localStorage.setItem('savedName', Name.value);
        localStorage.setItem('savedPass', pass.value);

        // Обновляем текст в gmailName и gmailPass
        gmailName.textContent = Name.value;
        gmailPass.textContent = pass.value;

        // Показываем body2 и скрываем alertBox
        header.style.display = 'block';
        body2.style.display = 'grid';
        alertBox.style.display = 'none';
    }

    // Очищаем поля ввода Name и pass после сохранения
    Name.value = '';
    pass.value = '';

    // Проверяем и отображаем соответствующие элементы
    checkAndDisplay();
});

repeat.addEventListener('click', () => {
    // Сбрасываем сохраненные данные и отображаем alertBox
    localStorage.removeItem('savedName');
    localStorage.removeItem('savedPass');
    gmailName.textContent = '';
    gmailPass.textContent = '';
    header.style.display = 'none';
    body2.style.display = 'none';
    alertBox.style.display = 'block';
});

const Pin = document.querySelector('.pin');
const wall = document.querySelector('.wall');
const profile = document.querySelector('.profile');

Pin.addEventListener('input', () => {
    if (Pin.value === 'sim sim ochil') {
        wall.classList.add('unlock');
    } else {
        wall.classList.remove('unlock');
    }
});

currency.addEventListener('click', () => {
    iframe1.style.display = 'none';
    iframe2.style.display = 'block';
})

news.addEventListener('click', () => {
    iframe1.style.display = 'block';
    iframe2.style.display = 'none';
})