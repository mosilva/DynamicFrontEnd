//Numbers

const n1 = 3;
const n2 = 4;

let result = n1 * n2;

const list = [10,1, 5, 9, 8, 12, 15];

result = list.sort(); //Don't use, because the Js convert number in text and 80 > 9. Always, considerer the first caracter in text.

result = list.sort((a,b) => a - b); //Correct. Pattern documented: compare number and add an index a each number.

console.log(result);

//String

const cifrao = '\u0024'

console.log(cifrao);

//Bool

const textN1 = "Marcelo";
const textN2 = "m";

console.log(textN1 > textN2);

//Specials types

console.log(null == undefined); // true
console.log(null === undefined); // falseCOP

//Truthy or false

// 0 => false
// 1 => true

console.log(0 == false);

console.error(new Error("deu erro"));
