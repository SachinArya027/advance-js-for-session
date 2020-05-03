function curry(func) {
	return function curried(...args) {
		if (args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}

function sumTwoNumber(a, b) {
	return a + b;
}

function sumThreeNumber(a, b, c) {
	return a + b + c;
}

const currySumTwoNumber = curry(sumTwoNumber);
let res = currySumTwoNumber(5)(10);
// console.log(res);	// 15

const currySumThreeNumber = curry(sumThreeNumber);
res = currySumThreeNumber(5)()(10)()()()()(15);
// console.log(res);	// 30

// "currying" and "partial application" are two totally different functions.
// Currying takes exactly 1 input, whereas partial application takes 2 (or more) inputs.
// Even though they both return a function as output, the returned functions are of totally different forms

/////Some Practical UseCase//////
function log(date, type, message) {
	console.log(`
	ON: ${date.toDateString()}
	TYPE: ${type}
	MESSAGE: ${message}
	`);
}

// log(new Date(), 'Debug', 'Bhayanak Exception');

const logCurry = curry(log);

const toDayLog = logCurry(new Date());

// toDayLog('Personal', 'Just Playing With Currying');

const toDayDebugLog = toDayLogs('Debug');

// toDayDebugLog('This Method Just Needs a Message');
