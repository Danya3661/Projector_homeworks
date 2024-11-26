// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:

const userNames = ['Петрик Ольга Іванівна', 'Гнатюк Петро Антонович', 'Рудко Андрій Опанасович'];
let initials;

initials = userNames.sort().map(
	(name) =>
		name
			.split(' ')
			.map((word) => word[0].toUpperCase())
			.join('.') + '.',
);

console.log(initials);

// 2. Задача на фільтрування масиву

// через умовну конструкцію

const userNames2 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames2 = [];
const letters = ['е', 'ю', 'і', 'я', 'а', 'о'];
for (let name of userNames2) {
	if (letters.includes(name[0].toLocaleLowerCase())) {
		filteredNames2.push(name);
	}
}
console.log(filteredNames2);

// через вбудований метод масивів

const userNames3 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames3;

filteredNames3 = userNames3.filter((name) => letters.includes(name[0].toLocaleLowerCase()));

console.log(filteredNames3);

// 3. Задача на розворот числа:

const currentMaxValue = 4589;

let reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));

console.log(reverseMaxValue);
console.log(typeof reverseMaxValue);

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

function getProduct(arr) {
	return arr.reduce((a, p) => {
		if (typeof p === 'number') {
			return a * p;
		}
		if (Array.isArray(p)) {
			return a * getProduct(p);
		}
		return a;
	});
}
productOfArray = getProduct(resultsArray);

console.log(productOfArray); // 24
