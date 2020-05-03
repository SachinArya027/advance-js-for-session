/////////////////////////////////////////////
//////////// I want to generate IDs//////////
/////////////////////////////////////////////
function genId(prefix) {
	for (let i = 0; true; i++) {
		console.log(prefix + i);
	}
}

// genId('my_id_');

/////////////////////////////////////////////
////Simple Example To Generate distinct Ids//
/////////////////////////////////////////////
function* idGenerator(prefix) {
	for (let i = 0; true; i++) {
		yield prefix + i;
	}
}

const generateId = idGenerator('user_');

// console.log(generateId.next().value);
// console.log(generateId.next().value);
// console.log(generateId.next().value);

/////////////////////////////////////////////
/////////////Example with yield*/////////////
/////////////////////////////////////////////
function* adminIdGenerator() {
	for (let i = 1; i <= 2; i++) {
		yield 'admin_' + i;
	}
}

function* userIdGenerator() {
	for (let i = 1; i <= 3; i++) {
		yield 'user_' + i;
	}
}

function* newIdGenerator() {
	yield* adminIdGenerator();
	yield* userIdGenerator();
	return 'NO MORE USERS';
}

const generateNewId = newIdGenerator();
// console.log(generateNewId.next().value);
// console.log(generateNewId.next().value);
// console.log(generateNewId.next().value);
// console.log(generateNewId.next().value);
// console.log(generateNewId.next());

// // what will happen if i will call it one more time
// console.log(generateNewId.next());
// console.log(generateNewId.next());

//////////////////////////////////////////////
////////////////Use Case//////////////////////
//////////////////////////////////////////////
const UserRegex = new RegExp(/@(\w+)/, 'g');

function* getUsernames(string) {
	let match = null;
	while((match = UserRegex.exec(string)) !== null) {
		yield match[1];
	}
}

const string = 'Following are Earth team members @Ayush @Mayank and @Rashmi.';

// // The Generator object is returned by a generator function and
// // it conforms to both the iterable protocol and the iterator protocol.
// // LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
const userMatchesGen = getUsernames(string);
for (const user of userMatchesGen) {
	// console.log(user);
}
