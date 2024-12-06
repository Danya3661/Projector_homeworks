'use strict';
// 1. Задача про обчислення різниці часу

function durationBetweenDates(firstDate = '01 Jan 1970', lastDate = '01 Jan 1970', unit = 'days') {
	const first = new Date(firstDate).getTime();
	const last = new Date(lastDate).getTime();
	const difference = Math.abs(last - first);
	let result;
	switch (unit) {
		case 'seconds':
			result = difference / 1000;
			break;
		case 'minutes':
			result = difference / (1000 * 60);
			break;
		case 'hours':
			result = difference / (1000 * 60 * 60);
			break;
		case 'days':
		default:
			result = difference / (1000 * 60 * 60 * 24);
	}
	return `${Math.floor(result)} ${unit}`;
}

durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'); // поверне '86400 seconds'
durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); // поверне '362 days'

// 2. Задача про перетворення об'єкту

const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
};

function optimizer(data) {
	const optimizedData = {};
	for (const [k, v] of Object.entries(data)) {
		const lowerK = k.toLocaleLowerCase();
		const roundedV = parseFloat(v).toFixed(2);
		optimizedData[lowerK] = roundedV;
	}
	return optimizedData;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
