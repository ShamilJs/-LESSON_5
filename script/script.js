'use strict';

const guessNumber = function (number, attempt) {
	let rangeMin = 1,
		rangeMax = 100;
	let userNumber = prompt('Угадай число от 1 до 100');

	// Расчитывает загаданное число рандомно
	let getRandomNumber = function () {
		number = Math.ceil(Math.random() * (rangeMax - rangeMin) + rangeMin);
		console.log('Загаданное число: ', number);
		return number;
	};

	// Проверяет введено ли число
	let isNumber = function (n) {
		if (!(!isNaN(parseFloat(n)) && isFinite(n)) && userNumber !== null) {
			alert('Введи число!');
			guessNumber(number, attempt);
		}
	};
	isNumber(userNumber);

	// уменьшает счетчик попыток, выводит сообщение и перезапускает функцию
	let wew = function (definition) {
		attempt--;
		alert(`Загаданное число ${definition}, осталось попыток ${attempt}`);
		guessNumber(number, attempt);
	};

	// Запускает рандомную функцию расчета числа, выставляет начальные условия
	let newGames = function () {
		attempt = 10;
		guessNumber(getRandomNumber(), attempt);
	};
	//  --------------------------------------------------------------------------
	if (!!+userNumber) {
		if (attempt > 1 && attempt <= 10) {
			if (userNumber > number) {
				return wew('меньше');
			} else if (userNumber < number) {
				return wew('больше');
			} else {
				let newStep = confirm(
					`Поздравляем! Загаданное число: ${number}. Хотите сыграть еще?`
				);
				if (newStep) {
					newGames();
				}
			}
		} else {
			let theEnd = confirm('Попытки закончились, хотите сыграть еще?');
			if (theEnd) {
				newGames();
			}
		}
	}
	alert('Игра закончена! До новых встреч!');
};

guessNumber(32, 10);
