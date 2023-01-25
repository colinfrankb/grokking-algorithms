// Write a function mergeLists(listA, listB) that takes in two lists, listA and listB, and creates a new list listC that alternates the elements from listA and listB. The function should make sure that listA and listB are of the same length before creating listC.

// Function signature: function mergeLists(listA, listB)

// Input:

// listA: an array of elements of any type. The length of listA is n (1 <= n <= 10^3)
// listB: an array of elements of any type. The length of listB is n (1 <= n <= 10^3)
// Output:

// listC: an array of elements of any type, where alternating elements are from listA and listB.
// Examples:

// mergeLists([1,2,3], [4,5,6]) returns [1, 4, 2, 5, 3, 6]
// mergeLists(['a', 'b', 'c'], ['d', 'e', 'f']) returns ['a', 'd', 'b', 'e', 'c', 'f']
// Note:

// If the length of listA and listB are not equal, return an empty array or raise an error.
// The elements in listA and listB can be of different types.

const mergeLists = (a, b) => {
  if (a.length !== b.length) return [];

  const c = [];

  for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
  }

  return c;
};

console.log(mergeLists([1,2,3], [4,5,6]));

const mergeListsVariableLengths = (a, b) => {
  const c = [];

  for (let i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) c.push(a[i]);
    if (i < b.length) c.push(b[i]);
  }

  return c;
};

console.log(mergeListsVariableLengths([1,2,3], [4,5,6,7]));

// [ 1, 2, 3 ]
//   -  -  -  
// [ 4, 5, 6 , 7 ]

// [1, 4, 2, 5, 3, 6, 7]