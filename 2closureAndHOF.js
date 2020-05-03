// HIGHER ORDER FUNCTION//
// A function that returns a function or takes a function
// as its argument is called a Higher-Order Function.

function makeAdder(x) {
	return function (y) {
		return x + y;
	};
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

// What is closure???
console.log(add5(2));
console.log(add10(2));

// show in console while debugging