// file:///D:/Learn/js-session/assets/indian_curry.jpg
// https://en.wikipedia.org/wiki/Haskell_Curry

function sum(a, b) {
	return a + b;
}

let res = sum(5, 10);
// console.log(res);	//15
// sum(5)(10)

// Currying is a concept of breaking a function with many arguments into
// many functions with single argument in such a way, that the output is same.

// => transforming sum(5, 10) to sum(5)(10) is currying

function sumCurry(f) {
	return function (a) {
		return function (b) {
			return f(a, b);
		};
	};
}

const curriedSum = sumCurry(sum);
res = curriedSum(5)(10);
// console.log(res);	//15

const sumCurryWithArrow = func => a => b => func(a, b);

const curriedSumWithArrow = sumCurryWithArrow(sum);
res = curriedSumWithArrow(5)(10);
// console.log(res);	//15

/////////////////////////////////
//// Using Lodash for Currying///
const _ = require('lodash');

const curriedSumWith_ = _.curry(sum);

// console.log(curriedSumWith_(5)(10));	//15
// console.log(curriedSumWith_(5, 10));	//15
