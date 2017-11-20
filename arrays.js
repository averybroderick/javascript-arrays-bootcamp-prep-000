var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var unshiftedArr = [element, ...array];
  return unshiftedArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
