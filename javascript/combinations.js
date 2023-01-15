const combinations = (elements) => {
    // Determine the base case by thinking about what the simpliest case would be
    if (elements.length === 0) return [[]];

    const firstEl = elements[0];
    const rest = elements.slice(1);
    const combsWithoutFirst = combinations(rest);
    const combsWithFirst = [];

    for (let i = 0; i < combsWithoutFirst.length; i++) {
        const comb = [...combsWithoutFirst[i], firstEl];
        combsWithFirst.push(comb);
    }

    return [...combsWithoutFirst, ...combsWithFirst];
};

console.log(combinations(['a', 'b', 'c']));
// Output
// [
//  [],
//  ['a'],
//  ['b'],
//  ['c'],
//  ['a', 'b']
//  ['b', 'c']
//  ['a', 'c']
//  ['a', 'b', 'c']
// ]

// console.log(combinations([]));
// Output
// [
//     []
// ]