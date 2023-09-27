const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calling the reduce()method on the input array and passing it the arguments, result and number.
//The callback function iterates through the array, adding the batch numbers to the result that has a start value of 0.
//The function returns the sum of all assembled batteries at the end of the iteration.
const totalBatteries = batteryBatches.reduce(function (result, number) {
  return result + number;
}, 0);
