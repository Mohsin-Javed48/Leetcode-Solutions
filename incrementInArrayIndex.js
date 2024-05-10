/**
 * @format
 * @param {string[]} operations
 * @return {number}
 */

var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    let xPosition = operations[i].indexOf("X");
    let operator_minus = operations[i].includes("-");
    let operator_plus = operations[i].includes("+");

    if (xPosition > 1) {
      if (operator_minus) {
        x--;
      } else {
        x++;
      }
    } else {
      if (operator_minus) {
        x--;
      } else {
        x++;
      }
    }
  }
  return x;
};
