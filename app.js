const pass = document.querySelector('.inp-pass');
const Name = document.querySelector('.inp-name');
const apply = document.querySelector('.apply');
const repeat = document.querySelector('.rep-button');

const gmailName = document.querySelector('.gmail-name');
const gmailPass = document.querySelector('.gmail-pass');

const alertBox = document.querySelector('.alert-box');
const body2 = document.querySelector('.body');

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
        body2.style.display = 'grid';
        alertBox.style.display = 'none';
    } else {
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
