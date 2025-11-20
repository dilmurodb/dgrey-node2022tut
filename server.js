// let firstName = 'Dave';
// let lastName = 'Grey';
// console.log(`Hello my name is ${firstName} ${lastName}`)
// console.log(global);
const os = require('os');
const path = require('path');
// const math = require('./math');
const { add, subtract, multiply, divide } = require('./math');

// console.log(math.add(5, 7));
console.log(add(5, 7));
console.log(subtract(5, 7));
console.log(multiply(5, 7));
console.log(divide(5, 7));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename).root);