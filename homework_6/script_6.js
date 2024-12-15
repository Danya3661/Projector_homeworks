'use strict';

// 1. Напишіть функцію addThemAll

function addThemAll(...args) {
	return args.reduce((sum, curr) => sum + curr, 0);
}

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

// 2. Задача на використання замикання.

function multiply(a) {
	return function (b) {
		return a * b;
	};
}

console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));

// // 4. Напишіть функцію яка відфільтрує масив унікальних значень

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
	return [...new Set(array)];
}

console.log(filterUnique(userNames));

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

function byProperty(property, direction) {
    return function (d, c) {
        if (d[property] > c[property]) {
            return direction === '>' ? 1 : -1;
        } else if (d[property] < c[property]) {
            return direction === '>' ? -1 : 1;
        } else {
            return 0; 
        }
    };
}

// console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку