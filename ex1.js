"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
var width = 5;
var length = 10;
var areaOfTriangle = width * length;
// Output the results
console.log("Area of rectangle: " + areaOfTriangle);
// Volume of cube
var sideLength = 5;
var volume = sideLength ** 3;
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
    }
    else {
        console.log('Invalid input. Please enter a valid number.');
    }
    rl.close();
});
var result = ((10 + 5) * 3 - 2) / (4 % 3) - 7 - 31 == 5;
console.log(`The result of the expression is: ${result}`);
