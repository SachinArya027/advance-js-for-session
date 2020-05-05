// file:///D:/Learn/js-session/assets/theRoxbury.png
// https://css-tricks.com/debouncing-throttling-explained-examples/
const _ = require('lodash');

function batchLog() {
	console.log('I am logged from debounced function');
}

const debounced = _.debounce(batchLog, 500, { leading: true, trailing: false });
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();
// debounced();

// setTimeout(debounced, 501);
// setTimeout(debounced, 1500);


// file:///D:/Learn/js-session/assets/bar-owner.png
////////////////////////////////////////
//////////////THROTTLING////////////////
////////////////////////////////////////
function intervalLog() {
	console.log('I am logged from throttled function');
}

const throttled = _.throttle(intervalLog, 100, { trailing: false });
let numberOfTimesCalled = 0;

// const intervalId = setInterval(() => {
// 	console.log('thtottled called');
// 	throttled();
// 	if (numberOfTimesCalled <= 10) {
// 		numberOfTimesCalled++;
// 	} else {
// 		clearInterval(intervalId);
// 	}
// }, 10);
