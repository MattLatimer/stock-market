/*
  Function Name: maxProfits
  Input: array of numbers
  return: number
  `maxProfits` will search an array for the highest possible gain moving forward in the array.
*/

var chart = [45, 24, 35, 31, 40, 38, 11];

function maxProfits(arr) {
  gain = 0;
  arr.forEach(function (price, i) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > gain) {
        gain = arr[j] - arr[i];
      }
    }
  });
  return gain;
}
console.log('Brute force method:', maxProfits(chart));

function maxProfitsElegant(arr) {
  var minElement = arr[0];
  var maxGain = arr[1] - arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
    if (maxGain < (arr[i+1] - minElement)) {
      maxGain = (arr[i+1] - minElement);
    }
  }
  return maxGain;
}
console.log('Elegant method:', maxProfitsElegant(chart));
