import { match } from 'assert';
import * as readline from 'readline';

var width:number = 5;
var length:number = 10;

var areaOfTriangle:number = width * length;


// Output the results
console.log("Area of rectangle: " + areaOfTriangle);

// Volume of cube

var sideLength: number = 5;
var volume: number = sideLength ** 3;

console.log(`The volume of the cube with side length ${sideLength} is: ${volume}`);

//Even or Odd


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input) => {
  const number = parseInt(input);
  if (!isNaN(number)) {
    const isodd = number % 2 !== 0;
    console.log(`${number} is ${isodd ? 'odd' : 'even'}.`);
  } else {
    console.log('Invalid input. Please enter a valid number.');
  }
  
  rl.close();
});


var result:boolean = ((10 + 5) * 3 - 2) / (4 % 3) - 7 -31 == 5;

console.log(`The result of the expression is: ${result}`);


