// WAP to find the no of combination from given array 
// Use Recursive Code

const Combinations = (elements) => {
    // base condition 
    //  if we have an empty array
    if(elements.length === 0) return [[]];

    // save the first element to a variable
    const firstElement = elements[0]
    const restElements = elements.slice(1);

    // console.log("firstElement: ", firstElement, "restElements: ", restElements);

    const CombinationsWithoutFirstElement = Combinations(restElements)
    // console.log("CombinationsWithoutFirstElement", CombinationsWithoutFirstElement);


    const CombinationsWithFirstElement = [];

    CombinationsWithoutFirstElement.forEach(comb => {
        const combWithFirst = [...comb, firstElement]
        CombinationsWithFirstElement.push(combWithFirst)
    });

    console.log("CombinationsWithFirstElement", CombinationsWithFirstElement);

    return [ ...CombinationsWithoutFirstElement, ...CombinationsWithFirstElement]


}

console.log(Combinations(['a', 'b', 'c']));
console.log(Combinations([]));