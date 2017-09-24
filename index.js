var bottle = require('./water');

//tests
function testBottleEqual() {
  console.log('test1', bottle.water([2, 3, 1], [1, 3, 2]));
}

function testBottle1Small() {
  console.log('test2', bottle.water([1, 1, 1, 1], [2, 1]));
}

function testBottleBig() {
  console.log('test3', bottle.water([4], [2, 1, 2]));
}

function testBottleEmpty() {
  console.log('test4', bottle.water([], [1]));
}

testBottleEqual();
testBottle1Small();
testBottleBig();
testBottleEmpty();
