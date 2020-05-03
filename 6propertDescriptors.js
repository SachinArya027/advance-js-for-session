// show in console

const car = { make: 'honda', year: 2000 };
Object.getOwnPropertyDescriptor(car, 'make');
Object.defineProperty(car, 'make', { writable: false });

car.make = 'Ford';

console.log(car);
