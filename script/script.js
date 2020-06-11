'use strict';

// Функция проверки на число
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// 
const guessNumber = function (number) {
    let userNumber = prompt('Угадай число от 1 до 100');

    if (!isNumber(userNumber) && userNumber !== null) {
        alert('Введи число!');
        guessNumber(32);
    } else if (!!(+userNumber)) {
        if (userNumber > number) {
            alert('Загаданное число меньше!');
            guessNumber(32);
        } else if (userNumber < number) {
            alert('Загаданное число больше!');
            guessNumber(32);
        } else {
            alert(`Поздравляем! Загаданное число: ${number}`);
        }
    }
};

guessNumber(32);