function sortBySelection (array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    }
    if (min !== i) {
      let firstElement = array[i]
      array[i] = array[min]
      array[min] = firstElement
    }
  }
  return array
}

let result = sortBySelection([12, 11, 13, 5, 6])
console.log(result)

// function selectionSort (array) {
//     for (let i = 0; i < array.length; i++) {
//         let min = i
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[min] > array[j]) {
//                 min = j
//             }
//         }
//         if (min !== i) {
//             let tmp = array[i]
//             array[i] = array[min]
//             array[min] = tmp
//         }
//     }
//     return array
// }
//
// let result = selectionSort([12, 11, 13, 5, 6])
// console.log(result)
