// HW2 — Цикли, умовні конструкції, примітивні типи даних в деталях

// 1.

for (let i = 1; i <= 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log('ЛолКек');
	} else if (i % 3 === 0) {
		console.log('Лол');
	} else if (i % 5 === 0) {
		console.log('Кек');
	} else {
		console.log(i);
	}
}

// 2.

// Спосіб 1

const value = 10;
if (typeof value !== 'number' || Number.isNaN(value)) {
	console.log('Таке чуство шо Бог десь наказує нас за шось');
} else  {
	for (let i = 2; i < value; i = i + 2) {
		console.log(i);
	}
}

// Спосіб 2

if (typeof value !== 'number' || Number.isNaN(value)) {
	 
	console.log('Таке чуство шо Бог десь наказує нас за шось');
} else   {
	let i = 2;
	while (i < value) {
		console.log(i);
		i = i + 2;
	}
}
