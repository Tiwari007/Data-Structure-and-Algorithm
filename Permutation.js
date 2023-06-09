// Input: ['a', 'b', 'c']
// Output: [['a', 'b', 'c'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['a', 'c', 'b'], ['c', 'a', 'b'], ['c', 'b', 'a']]

// Time Complexity = O(n!)
// Space Complexity = O(n*n)  ==> O(n^2)

const Permutation = (elements) => {
    if(elements.length === 0) return [[]];

    let firstElement = elements[0]
    let restElements = elements.slice(1)

    const permutationWithoutFirst = Permutation(restElements)

    const allPermutations = []

    permutationWithoutFirst.forEach(ele => {

        for(let i=0; i<= ele.length; i++){
            let permutationWithFirst = [...ele.slice(0, i), firstElement, ...ele.slice(i)]
            allPermutations.push(permutationWithFirst)
        }
        
    })

    return allPermutations
}

console.log(Permutation(['a', 'b', 'c']));

console.log(Permutation(['a', 'b', 'c', 'd']));

console.log(Permutation([]));


