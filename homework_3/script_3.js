// 1. Задача про рекурсію

function recursiveOddSumTo(number) {
	if (number <= 0) {
		return 0;
	}

	if (number % 2 !== 0) {
		return number + recursiveOddSumTo(number - 2);
	} else {
		return recursiveOddSumTo(number - 1);
	}
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));

// 2. Задача про ітерацію

function iterativeOddSumTo(number) {
	for (i = 0; i <= 0; i++) {
		if (number % 2 !== 0) {
			return number + recursiveOddSumTo(number - 2);
		} else {
			return recursiveOddSumTo(number - 1);
		}
	}
}

console.log(iterativeOddSumTo(1)); 
console.log(iterativeOddSumTo(10)); 
