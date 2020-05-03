// Do you know Liger is a mix breed of male lion and a female tiger.
// file:///D:/Learn/js-session/assets/liger.jpg
// https://en.wikipedia.org/wiki/Liger#/media/File:Liger_couple.jpg

// multi level inheritance vs multiple inheritance

// Wikipedia: A mixin is a class that contains methods for use by other classes
// without having to be the parent class of those other classes

// Creating an object
const canFight = (state) => ({
	fight: () => {
		console.log(`${state.name} killed the opponent.`);
		state.stamina--;
	},
});

const canRoar = (state) => ({
	sound: () => {
		console.log(`${state.name} ROARS !!!!!`);
	},
});

// const canMeow = () => ({
// 	sound: () => {
// 		console.log('mewo');
// 	},
// });

const lion = (name) => {
	let state = {
		name,
		health: 100,
		stamina: 100,
	};

	return Object.assign(state, canFight(state), canRoar(state));
};

const simba = lion('Simba');
// simba.fight();
// simba.sound();
// console.log(simba.stamina);

///////////////////////////////
////////ES6 MIX-INS////////////
//////////////////////////////
class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Lion extends Animal {
	sound() {
		console.log('EARTH SHAKING ROAR!!!');
	}
}

const canFightMixin = (Base) =>
	class extends Base {
		fight() {
			console.log(`${this.name} killed the liger...!!!`);
		}
	};

// class Lion extends canFightMixin(Animal) {
// 	sound() {
// 		console.log('EARTH SHAKING ROAR!!!');
// 	}
// }

// const sherKhan = new Lion('Sher Khan');
// sherKhan.fight();
// sherKhan.sound();

const canHuntMixin = (Base) =>
	class extends Base {
		hunt() {
			console.log('Deer was an easy prey!!!');
		}
	};

// class Lion extends canHuntMixin(canFightMixin(Animal)) {
// 	sound() {
// 		console.log('EARTH SHAKING ROAR!!!');
// 	}
// }

// const sherKhan = new Lion('Sher Khan');
// sherKhan.fight();
// sherKhan.sound();
// sherKhan.hunt();