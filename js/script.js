'use strict';

const h1 = new Human ('Ілля', 18);
const h2 = new Human ('Даніїл', 30);
const h3 = new Human ('Олександр', 16);
const c1 = new Car ('Lexus', 'RX-350', 2013,'BE7997CB');
const c2 = new Car ('Toyota', 'Corolla', 2015,'BE2442CB');
const c3 = new Car ('Audi', 'A6', 2021,'BE4224CB');
c1.ownerCar(h1);
c2.ownerCar(h2);
c3.ownerCar(h3);