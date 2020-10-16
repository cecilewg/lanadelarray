// function swapIndex (array, fromIndex, toIndex) {
//   let firstElement = array[fromIndex]
//   array[fromIndex] = array[toIndex]
//   array[toIndex] = firstElement
// }

function sortByInsertion (array) {
  let swapWasDone = false
  let j = 0
  for (let i = 1; i < array.length; i++) {
    j = i
    while (array[j] < array[j - 1] && j > 0) {
      swapWasDone = true
      let element = array[j]
      array[j] = array[j - 1]
      array[j - 1] = element
      j--
    }
  }
  if (swapWasDone === true) {
    sortByInsertion(array)
  }
  return array
}

let result = sortByInsertion([12, 11, 13, 5, 6])
console.log(result)

let result2 = sortByInsertion([12, 11, 13, 5, 6, 1, 10, 9])
console.log(result2)

// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
