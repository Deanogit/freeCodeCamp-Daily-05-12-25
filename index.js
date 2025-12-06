// Symmetric Difference
// Given two arrays, return a new array containing the symmetric difference of them.

// The symmetric difference between two sets is the set of values that appear in either set, but not both.
// Return the values in the order they first appear in the input arrays.

// function difference(arr1, arr2) {
// console.log("Start with: ",arr1, arr2)
// create a set
// const set = new Set();
// spread both arrays;
// const both = [...arr1, ...arr2];
// console.log("Spread both: ",both)
// set.add(both);
// console.log("Set for unique elements: ", set)
// const resultArr = Array.from(set)
// console.log(resultArr)
//  return arr1;
//}

// think I am barking up the wrong tree
// put both arrays into one array
// add to a set
// return array of set
// no this doesnt work, it doesnt return the symmetric difference between two sets, values that appear in either set, but not both

// so if element is present in both arrays, remove it from both arrays

// function difference(arr1, arr2) {
//   console.log("Starting with: ", arr1, arr2)
//   arr1.forEach((x, i) => {
//     if(arr2.includes(x)) {
//      console.log(x, i)
//      arr1.splice(i, 1)
//      arr2.splice(arr2.indexOf(x), 1)
//      console.log(arr2.indexOf(x))
//    }
//  })
//  const result = [...arr1, ...arr2]
//  console.log(arr1, arr2)
//  console.log(result)
//  return result
// }

// difference([1, "a", 2], [2, "b", "a"])

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");

// Syntax
// array.splice(index, count, item1, ....., itemX)

// Parameters
// Parameter	Description
// index	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.

// count	Optional.
// Number of items to be removed.
// item1, ...,	Optional.
// The new elements(s) to be added.
// Return Value
// Type	Description
// Array	An array containing the removed items (if any).

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");

// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).

// function difference(arr1, arr2) {
//  console.log("Starting with: ", arr1, arr2)
// this loops once!
//  arr2.forEach((x, i) => {
//    if (arr1.includes(x)) {
//      console.log("Showing a duplicate: ", x,"at index: ",  i)
//      arr2.splice(i, 1)
//      console.log("This is the arr1 contains: ", arr1.indexOf(x))
//      arr2.splice(arr2.indexOf(x), 1)
//    }
//  })
//  const result = [...arr1, ...arr2]
//  console.log(arr1, arr2)
//  console.log(result)
//  return result
// }

// difference([1, "a", 2], [2, "b", "a"])

// check arr2 for matching arr1 elements
// if match
// remove from arr1 & arr2

// another way
// concat arrays
// loop through
// if a & b
// remove a & b
// how to join back arrays??

// difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].
// difference(["a", "b"], ["c", "b"]) should return ["a", "c"].
// difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].
// difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].

// loop arr1
// loop arr2
// if arr2[l].includes(arr1[i])
// remove arr1[i]
// remove arr2[l]
//

function difference(arr1, arr2) {
  arr1.forEach((x, i) => {
    arr2.forEach((y, ind) => {
      // if (y == x) {
      //   console.log("Match!", arr1[i], arr2[ind])

      // }
      console.log('testing', x, i, y, ind);
    });
  });
}
