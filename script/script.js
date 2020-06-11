'use strict';

// Функция проверки на число
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// Функция рандомного числа
let getRandomNumber = function (rangeMin, rangeMax) {
	let number = Math.ceil(Math.random() * (rangeMax - rangeMin) + rangeMin);
	return number;
};

const guessNumber = function (number, attempt) {
	let userNumber = prompt('Угадай число от 1 до 100');
	if (!isNumber(userNumber) && userNumber !== null) {
		alert('Введи число!');
		guessNumber(number, attempt);
	} else if (!!+userNumber) {
		if (attempt > 1 && attempt <= 10) {
			if (userNumber > number) {
				attempt--;
				alert(`Загаданное число меньше, осталось попыток ${attempt}`);
				console.log('Загаданное число: ', number);
				guessNumber(number, attempt);
			} else if (userNumber < number) {
				attempt--;
				alert(`Загаданное число больше, осталось попыток ${attempt}`);
				console.log('Загаданное число: ', number);
				guessNumber(number, attempt);
			} else {
				let newStep = confirm(
					`Поздравляем! Загаданное число: ${number}. Хотите сыграть еще?`
				);
				if (newStep) {
					attempt = 10;
					number = getRandomNumber(1, 100);
					console.log('Загаданное число: ', number);
					guessNumber(number, attempt);
				} else {
					alert('Игра закончена! До новых встреч!');
				}
			}
		} else {
			let theEnd = confirm('Попытки закончились, хотите сыграть еще?');
			if (theEnd) {
				attempt = 10;
				number = getRandomNumber(1, 100);
				console.log('Загаданное число: ', number);
				guessNumber(number, attempt);
			}
		}
	} else {
		alert('Игра закончена! До новых встреч!');
	}
};

guessNumber(getRandomNumber(1, 100), 10);
