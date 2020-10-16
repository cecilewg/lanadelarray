function swapIndex (array, fromIndex, toIndex) {
  // autre solution pour le swap :
  // let element = array.splice(fromIndex, 1)[0];
  //    array.splice(toIndex, 0, element)

  let firstElement = array[fromIndex]
  array[fromIndex] = array[toIndex]
  array[toIndex] = firstElement
}

function bubbleSorting (arr) {
  let swappedWasDone = false
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swappedWasDone = true
      swapIndex(arr, i, i + 1)
    }
  }
  if (swappedWasDone === true) {
    bubbleSorting(arr)
  }
  // the pass through the list is repeated until no swaps are needed
  return arr
}

let firstRes = bubbleSorting([5, 1, 4, 2, 8, 3])
console.log(firstRes)
