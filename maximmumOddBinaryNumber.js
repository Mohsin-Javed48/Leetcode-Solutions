/** @format */

function maximumOddBinaryNumber(s) {
  let array = s.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "1") {
      array[i] = "0";
      break;
    }
  }

  array.sort((a, b) => a - b);
  array.reverse();

  array[array.length - 1] = "1";
  s = array.join("");

  for (let i = 0; i < array.length; i++) {
    console.log(s[i]);
  }

  return s;
}
let s = "0101";

maximumOddBinaryNumber(s);
